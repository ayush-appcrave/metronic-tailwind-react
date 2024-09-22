/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from 'react';
import { DataGrid } from '@/components';
import { KeenIcon } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import { CommonAvatars, CommonRating, IAvatarsProps } from '@/partials/common'; // Import avatar-related types and components
import { Link } from 'react-router-dom';
import { TeamsData, ITeamData } from '../data/TeamsData';

// Define the Team data structure and integrate IAvatarsProps for members
interface Team {
  team: {
    name: string;
    description: string;
  };
  rating: {
    value: number;
    round: number;
  };
  lastModified: string;
  members: IAvatarsProps; // Use IAvatarsProps for the members property
}

const TeamsBlock = () => {
  const columns = useMemo<ColumnDef<ITeamData>[]>(
    () => [
      {
        accessorFn: (row) => row.team.name,
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
                {info.row.original.team.name}
              </Link>
              <span className="text-2sm text-gray-700 font-normal leading-3">
                {info.row.original.team.description}
              </span>
            </div>
          );
        },
        meta: {
          className: 'min-w-[280px]'
        }
      },
      {
        accessorFn: (row) => row.rating.value,
        id: 'rating',
        header: () => 'Rating',
        enableSorting: true,
        cell: (info) => (
          <CommonRating
            rating={info.row.original.rating.value}
            round={info.row.original.rating.round}
          />
        ),
        meta: {
          className: 'min-w-[135px]'
        }
      },
      {
        accessorFn: (row) => row.lastModified,
        id: 'lastModified',
        enableSorting: true,
        header: () => 'Last Modified',
        cell: (info) => info.getValue(),
        meta: {
          className: 'min-w-[135px]'
        }
      },
      {
        accessorFn: (row) => row.members,
        id: 'members',
        header: () => 'Members',
        enableSorting: false,
        cell: (info) => (
          <CommonAvatars
            size="size-[30px]"
            group={info.row.original.members.group}
            more={info.row.original.members.more}
          />
        ),
        meta: {
          className: 'min-w-[135px]'
        }
      }
    ],
    []
  );

  // Memoize the team data
  const data: Team[] = useMemo(() => TeamsData, []);

  // Search term and filtered data
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter team data based on the search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return data; // If no search term, return full data

    return data.filter(
      (team) =>
        team.team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team.team.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

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
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </div>
      </div>

      <div className="card-body">
        {/* Pass filtered data to the DataGrid */}
        <DataGrid columns={columns} data={filteredData} rowSelect={true} />
      </div>
    </div>
  );
};

export { TeamsBlock };
