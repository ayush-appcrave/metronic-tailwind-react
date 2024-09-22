import { DataGrid } from '@/components';
import { makeData, Person } from '@/pages/crud/makeData';
import React from 'react';
import { useMemo, useState } from 'react';
import { KeenIcon } from '@/components';
import { ColumnDef } from '@tanstack/react-table';

const TeamsBlock = () => {
  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorFn: (row) => row.firstName,
        id: 'firstName',
        cell: (info) => info.getValue(),
        meta: {
          className: 'w-[60px]'
        },
        header: () => 'First Name',
        footer: (props) => props.column.id
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => 'Last Name',
        footer: (props) => props.column.id
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        footer: (props) => props.column.id
      },
      {
        accessorKey: 'visits',
        header: () => 'Visits',
        footer: (props) => props.column.id
      },
      {
        accessorKey: 'status',
        header: 'Status',
        footer: (props) => props.column.id
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress',
        footer: (props) => props.column.id
      }
    ],
    []
  );

  const [data] = useState(() => makeData(100000));

  return (
    <div className="card card-grid h-full min-w-full">
      <div className="card-header">
        <h3 className="card-title">Teams</h3>
        <div className="input input-sm max-w-48">
          <KeenIcon icon="magnifier" />
          <input type="text" placeholder="Search Teams" />
        </div>
      </div>

      <div className="card-body">
        <DataGrid columns={columns} data={data} rowSelect={true} />
      </div>
    </div>
  );
};

export { TeamsBlock };
