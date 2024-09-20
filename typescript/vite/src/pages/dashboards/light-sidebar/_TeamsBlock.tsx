import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable
} from '@tanstack/react-table';

import {
  DataGrid,
  DataGridTable,
  DataGridTableBody,
  DataGridTableBodyRow,
  DataGridTableHead,
  DataGridToolbar,
  DataGridTableBodyCell,
  DataGridTableHeadCell
} from '@/components/data-grid';

import { makeData, Person } from '@/pages/crud/makeData';
import React from 'react';
import { useMemo, useState } from 'react';
import { KeenIcon } from '@/components';

const TeamsBlock = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });

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

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination
    }
  });

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
        <DataGrid rowSelect={true}>
          <DataGridTable>
            <DataGridTableHead>
              {table.getHeaderGroups().map((headerGroup) => {
                return headerGroup.headers.map((header) => {
                  return <DataGridTableHeadCell header={header} />;
                });
              })}
            </DataGridTableHead>
            <DataGridTableBody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <DataGridTableBodyRow id={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <DataGridTableBodyCell id={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </DataGridTableBodyCell>
                      );
                    })}
                  </DataGridTableBodyRow>
                );
              })}
            </DataGridTableBody>
          </DataGridTable>
          <DataGridToolbar table={table} />
        </DataGrid>
      </div>
    </div>
  );
};

export { TeamsBlock };
