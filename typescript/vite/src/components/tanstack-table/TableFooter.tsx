import React from 'react';
import { Table } from '@tanstack/react-table';
import { TablePagination } from '@/components/tanstack-table/TablePagination.tsx';

type TableFooterProps = {
  table: Table<any>;
};

const TableFooter = ({ table }: TableFooterProps) => {
  return (
    <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
      <div className="flex items-center gap-2">
        Show
        <select
          className="select select-sm w-16"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>{' '}
        per page
      </div>
      <TablePagination table={table} />
    </div>
  );
};

export { TableFooter };
