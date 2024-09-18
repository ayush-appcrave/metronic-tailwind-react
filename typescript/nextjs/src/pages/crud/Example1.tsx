import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { makeData, Person } from './makeData';
import Table from '@/components/table/Table.tsx';

const Example1 = () => {
  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorFn: (row) => row.firstName,
        id: 'firstName',
        cell: (info) => info.getValue(),
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

  const [data] = React.useState(() => makeData(100000));

  return (
    <>
      <Table
        {...{
          data,
          columns
        }}
      />
    </>
  );
};

export default  Example1 ;
