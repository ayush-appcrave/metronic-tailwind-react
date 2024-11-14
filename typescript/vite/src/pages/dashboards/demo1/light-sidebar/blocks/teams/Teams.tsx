import React, { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Column, ColumnDef, RowSelectionState } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import {
  DataGrid,
  TDataGridRequestParams,
  KeenIcon,
  DataGridRowSelect,
  DataGridRowSelectAll,
  DataGridColumnHeader
} from '@/components';
import { CommonRating } from '@/partials/common';
import { Team, QueryApiResponse } from './teams-types';
import axios from 'axios';
import { formatIsoDate } from '@/utils/Date';
import { TeamUsers } from './TeamUsers';
import { Input } from '@/components/ui/input';

type TeamsQueryApiResponse = QueryApiResponse<Team>;

interface IColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

const Teams = () => {
  const ColumnFilter = <TData, TValue>({ column }: IColumnFilterProps<TData, TValue>) => {
    return (
      <Input
        placeholder="Filter..."
        value={(column.getFilterValue() as string) ?? ''}
        onChange={(event) => column.setFilterValue(event.target.value)}
        className="h-9 w-full max-w-40"
      />
    );
  };  

  const columns = useMemo<ColumnDef<Team>[]>(
    () => [
      {
        accessorKey: 'id',
        accessorFn: (row) => row.id,
        header: () => <DataGridRowSelectAll />,
        cell: ({ row }) => <DataGridRowSelect row={row} />,
        enableSorting: false,
        enableHiding: false,
        meta: {
          headerClassName: 'w-0'
        }
      },
      {
        accessorFn: (row) => row.name,
        id: 'name',
        header: ({ column }) => <DataGridColumnHeader title="Team" column={column} />,
        enableSorting: true,
        cell: (info) => (
          <div className="flex flex-col gap-2">
            <Link
              className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
              to="#"
            >
              {info.row.original.name}
            </Link>
            <span className="text-2sm text-gray-700 font-normal leading-3">
              {info.row.original.description}
            </span>
          </div>
        ),
        meta: {
          headerClassName: 'min-w-[280px]'
        }
      },
      {
        accessorFn: (row) => row.rating,
        id: 'rating',
        header: ({ column }) => <DataGridColumnHeader title="Rating" column={column} />,
        enableSorting: true,
        cell: (info) => (
          <CommonRating
            rating={Math.floor(info.row.original.rating)}
            round={info.row.original.rating % 1}
          />
        ),
        meta: {
          className: 'min-w-[135px]'
        }
      },
      {
        accessorFn: (row) => row.updated_at,
        id: 'updated_at',
        enableSorting: true,
        enableHiding: false,
        header: ({ column }) => <DataGridColumnHeader title="Last Modified" column={column} />,
        cell: (info) => formatIsoDate(info.row.original.updated_at),
        meta: {
          className: 'min-w-[135px]'
        }
      },
      {
        accessorFn: (row) => row.users,
        id: 'users',
        header: () => 'Members',
        enableSorting: false,
        enableHiding: true,
        cell: (info) => <TeamUsers users={info.row.original.users} />,
        meta: {
          className: 'min-w-[135px]'
        }
      }
    ],
    []
  );

  const [searchQuery, setSearchQuery] = useState('');

  const fetchTeams = async (params: TDataGridRequestParams) => {
    try {
      const queryParams = new URLSearchParams();

      queryParams.set('page', String(params.pageIndex + 1)); // Page is 1-indexed on server
      queryParams.set('items_per_page', String(params.pageSize));

      if (params.sorting?.[0]?.id) {
        queryParams.set('sort', params.sorting[0].id);
        queryParams.set('order', params.sorting[0].desc ? 'desc' : 'asc');
      }

      if (searchQuery.length > 2) {
        queryParams.set('query', searchQuery);
      }

      const response = await axios.get<TeamsQueryApiResponse>(
        `${import.meta.env.VITE_APP_API_URL}/teams/query?${queryParams.toString()}`
      );

      return {
        data: response.data.data, // Server response data
        totalCount: response.data.pagination.total // Total count for pagination
      };
    } catch (error) {
      toast(`Connection Error`, {
        description: `An error occurred while fetching data. Please try again later`,
        action: {
          label: 'Ok',
          onClick: () => console.log('Ok')
        }
      });

      return {
        data: [],
        totalCount: 0
      };
    }
  };

  const handleRowSelection = (state: RowSelectionState) => {
    const selectedRowIds = Object.keys(state);

    if (selectedRowIds.length > 0) {
      toast(`Total ${selectedRowIds.length} are selected.`, {
        description: `Selected row IDs: ${selectedRowIds}`,
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo')
        }
      });
    }
  };

  const Toolbar = () => {
    return (
      <div className="card-header border-b-0 px-5">
        <h3 className="card-title">Teams</h3>
        <div className="input input-sm max-w-48">
          <KeenIcon icon="magnifier" />
          <input type="text" placeholder="Search Teams" onChange={(e) => {}} />
        </div>
      </div>
    );
  };

  return (
    <DataGrid
      columns={columns}
      serverSide={true}
      onFetchData={fetchTeams}
      rowSelection={true}
      getRowId={(row: any) => row.id}
      onRowSelectionChange={handleRowSelection}
      pagination={{ size: 5 }}
      toolbar={<Toolbar />}
      layout={{ card: true }}
    />
  );
};

export { Teams };
