import React, { useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { DataGrid, TDataGridRequestParams, KeenIcon, TDataGridSelectedRowIds } from '@/components';
import { CommonRating } from '@/partials/common';
import { Team, QueryApiResponse } from './teams-types.ts';
import axios from 'axios';
import { formatIsoDate } from '@/utils/Date.ts';
import { TeamUsers } from '@/pages/dashboards/light-sidebar/blocks/teams/TeamUsers.tsx';

type TeamsQueryApiResponse = QueryApiResponse<Team>;

const fetchTeams = async (params: TDataGridRequestParams) => {
  try {
    const response = await axios.get<TeamsQueryApiResponse>(
      `${import.meta.env.VITE_APP_API_URL}/teams/query`,
      {
        params: {
          page: params.pageIndex,
          'items-per-page': params.pageSize,
          sort: params.sorting[0]?.id || 'name',
          order: params.sorting[0]?.desc ? 'desc' : 'asc'
        }
      }
    );

    // Returning the formatted data and total count directly from the response
    return {
      data: response.data, // Server response's data
      totalCount: response.pagination.total // Server response's total count
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      data: [],
      totalCount: 0
    };
  }
};

const Teams = () => {
  const { enqueueSnackbar } = useSnackbar();

  const columns = useMemo<ColumnDef<Team>[]>(
    () => [
      {
        accessorFn: (row) => row.name,
        id: 'team',
        header: () => 'Team',
        enableSorting: true,
        cell: (info) => {
          return (
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
          );
        },
        meta: {
          className: 'min-w-[280px]'
        }
      },
      {
        accessorFn: (row) => row.rating,
        id: 'rating',
        header: () => 'Rating',
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
        id: 'lastModified',
        enableSorting: true,
        header: () => 'Last Modified',
        cell: (info) => formatIsoDate(info.row.original.updated_at),
        meta: {
          className: 'min-w-[135px]'
        }
      },
      {
        accessorFn: (row) => row.users,
        id: 'members',
        header: () => 'Members',
        enableSorting: true,
        cell: (info) => <TeamUsers users={info.row.original.users} />,
        meta: {
          className: 'min-w-[135px]'
        }
      }
    ],
    []
  );

  const handleRowsSelectChange = (selectedRowIds: TDataGridSelectedRowIds) => {
    enqueueSnackbar(
      selectedRowIds.size > 0 ? `${selectedRowIds.size} rows selected` : `No rows are selected`,
      {
        variant: 'solid',
        state: 'dark'
      }
    );
  };

  return (
    <div className="card card-grid h-full min-w-full">
      <div className="card-header">
        <h3 className="card-title">Teams</h3>
        <div className="input input-sm max-w-48">
          <KeenIcon icon="magnifier" />
        </div>
      </div>

      <div className="card-body">
        <DataGrid
          cellsBorder={true}
          columns={columns}
          data={[]}
          serverSide={true}
          onFetchData={fetchTeams}
          rowSelect={true}
          onRowsSelectChange={handleRowsSelectChange}
          initialSorting={[{ id: 'team', desc: false }]}
          saveState={true}
          saveStateId="teams-grid"
        />
      </div>
    </div>
  );
};

export { Teams };
