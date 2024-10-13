import React from 'react';
import { DataGridPagination, useDataGrid } from '..';

const DataGridToolbar = () => {
  const { table, props } = useDataGrid();

  return (
    <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
      <div className="flex items-center gap-2">
        {props.paginationSizesLabel}
        <select
          className="select select-sm w-16"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {props.paginationSizes?.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>{' '}
        {props.paginationSizesDesc}
      </div>
      <DataGridPagination />
    </div>
  );
};

export { DataGridToolbar };
