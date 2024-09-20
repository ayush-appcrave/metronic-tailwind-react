import React from 'react';
import { Table } from '@tanstack/react-table';
import { KeenIcon } from '../KeenIcons';

type IDataGridPaginationProps = {
  table: Table<any>;
};

const DataGridPagination = ({ table }: IDataGridPaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex">
        <div>
          Page{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
          </strong>
        </div>
      </div>
      <button
        className="border rounded p-1"
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <KeenIcon icon="double-left" />
      </button>
      <button
        className="border rounded p-1"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <KeenIcon icon="left" />
      </button>
      <input
        type="number"
        min="1"
        max={table.getPageCount()}
        defaultValue={table.getState().pagination.pageIndex + 1}
        onChange={(e) => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          table.setPageIndex(page);
        }}
        className="input"
      />
      <button
        className="border rounded p-1"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <KeenIcon icon="right" />
      </button>
      <button
        className="border rounded p-1"
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
      >
        <KeenIcon icon="right" />
      </button>
    </div>
  );
};

export { DataGridPagination };
