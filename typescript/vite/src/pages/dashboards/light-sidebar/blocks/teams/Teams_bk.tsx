import React, { useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { DataGrid, KeenIcon, TDataGridSelectedRowIds } from '@/components';
import { CommonRating } from '@/partials/common';
import { Team, QueryApiResponse } from './teams-types.ts';
import axios from 'axios';
import { formatIsoDate } from '@/utils/Date.ts';
import { TeamUsers } from '@/pages/dashboards/light-sidebar/blocks/teams/TeamUsers.tsx';

type TeamsQueryApiResponse = QueryApiResponse<Team>;

const storageFilterId = 'teams-filter';
const fetchTeams = () => {
  return axios.get<TeamsQueryApiResponse>(
    `${import.meta.env.VITE_APP_API_URL}/teams/query?${new URLSearchParams({
      items_per_page: '15'
    }).toString()}`
  );
};

const Teams = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [teamsResponse, setTeamsResponse] = useState<TeamsQueryApiResponse>();
  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem(storageFilterId) || '';
  });

  useEffect(() => {
    localStorage.setItem(storageFilterId, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    fetchTeams().then((value) => setTeamsResponse(value.data));
  }, []);

  const teams = useMemo<Team[] | undefined>(() => teamsResponse?.data, [teamsResponse]);
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

  const filteredData = useMemo(() => {
    if (!searchTerm) return teams;

    return teams?.filter(
      (team) =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, teams]);

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
          <input
            type="text"
            placeholder="Search Teams"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="card-body">
        {filteredData && (
          <DataGrid
            cellsBorder={true}
            columns={columns}
            data={filteredData}
            rowSelect={true}
            onRowsSelectChange={handleRowsSelectChange}
            initialSorting={[{ id: 'team', desc: false }]}
            saveState={true}
            saveStateId="teams-grid"
          />
        )}
      </div>
    </div>
  );
};

export { Teams };
