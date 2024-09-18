import React from 'react';
const TablePagination = ({
  table
}) => {
  return <div className="flex items-center gap-4">
      <div className="flex">
        <div>
          Page{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
          </strong>
        </div>
      </div>
      <button className="border rounded p-1" onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>
        <i className="ki-filled ki-double-left"></i>
      </button>
      <button className="border rounded p-1" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
        <i className="ki-filled ki-left"></i>
      </button>
      <input type="number" min="1" max={table.getPageCount()} defaultValue={table.getState().pagination.pageIndex + 1} onChange={e => {
      const page = e.target.value ? Number(e.target.value) - 1 : 0;
      table.setPageIndex(page);
    }} className="input" />
      <button className="border rounded p-1" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
        <i className="ki-filled ki-right"></i>
      </button>
      <button className="border rounded p-1" onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
        <i className="ki-filled ki-double-right"></i>
      </button>
    </div>;
};
export { TablePagination };