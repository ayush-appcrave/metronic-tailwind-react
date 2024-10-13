import { Fragment } from 'react';
import {
  useDataGrid,
  DataGridLoader,
  DataGridTable,
  DataGridTableBody,
  DataGridTableBodyCell,
  DataGridTableBodyRow,
  DataGridTableHead,
  DataGridTableHeadCell,
  DataGridTableEmpty,
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
              {table
                .getHeaderGroups()
                .map((headerGroup) =>
                  headerGroup.headers.map((header, index) => (
                    <DataGridTableHeadCell key={index} header={header} />
                  ))
                )}
            </DataGridTableHead>
            <DataGridTableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row, index) => (
                  <DataGridTableBodyRow key={index} id={row.id}>
                    {row.getVisibleCells().map((cell, index) => (
                      <DataGridTableBodyCell
                        key={index}
                        id={cell.id}
                        className={cell.column.columnDef.meta?.cellClassName || ''}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </DataGridTableBodyCell>
                    ))}
                  </DataGridTableBodyRow>
                ))
              ) : (
                <DataGridTableEmpty />
              )}
            </DataGridTableBody>
          </DataGridTable>
          {loading && <DataGridLoader />}
        </div>
        <DataGridToolbar />
      </div>
    </Fragment>
  );
};

export { DataGridInner };
