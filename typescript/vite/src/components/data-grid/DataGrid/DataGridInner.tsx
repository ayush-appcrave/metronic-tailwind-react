import { Fragment } from 'react';
import { useDataGrid } from './';
import { DataGridLoader } from '../DataGridLoader';
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableBodyCell,
  DataGridTableBodyRow,
  DataGridTableHead,
  DataGridTableHeadCell,
  DataGridToolbar
} from '..';
import { flexRender } from '@tanstack/react-table';

const DataGridInner = () => {
  const { loading, table } = useDataGrid();

  return (
    <Fragment>
      <div className="grid min-w-full">
        <div className="scrollable-x-auto">
          <DataGridTable>
            <DataGridTableHead>
              {table.getHeaderGroups().map((headerGroup) => {
                return headerGroup.headers.map((header, index) => {
                  return <DataGridTableHeadCell key={index} header={header} />;
                });
              })}
            </DataGridTableHead>
            <DataGridTableBody>
              {table.getRowModel().rows.map((row, index) => {
                return (
                  <DataGridTableBodyRow key={index} id={row.id}>
                    {row.getVisibleCells().map((cell, index) => {
                      return (
                        <DataGridTableBodyCell key={index} id={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </DataGridTableBodyCell>
                      );
                    })}
                  </DataGridTableBodyRow>
                );
              })}
            </DataGridTableBody>
          </DataGridTable>
          <DataGridToolbar />
        </div>
      </div>
      {loading && <DataGridLoader />}
    </Fragment>
  );
};

export { DataGridInner };
