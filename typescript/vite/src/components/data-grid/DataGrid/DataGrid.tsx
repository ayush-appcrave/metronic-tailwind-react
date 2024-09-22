import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable
} from '@tanstack/react-table';
import { DataGridInner, DataGridProvider } from './';
import { useState } from 'react';

export interface TDataGridProps<TData extends object> {
  columns: any[]; // Define columns and data props
  data: TData[];
  loadingText?: string;
  rowSelect?: boolean;
  emptyText?: string;
  paginationInfo?: string;
  paginationSizes?: number[];
  paginationSizesLabel?: string;
  paginationSizesDesc?: string;
  paginationSize?: number;
  paginationMore?: boolean;
  paginationMoreLimit?: number;
}

const DataGrid = <TData extends object>(props: TDataGridProps<TData>) => {
  // Set default values for the required props
  const defaultValues: Partial<TDataGridProps<TData>> = {
    loadingText: 'Loading...', // Default value for loadingText
    rowSelect: false, // Default value for rowSelect
    emptyText: 'No data available', // Default value for emptyInfo
    paginationInfo: '{from} - {to} of {count}', // Default value for paginationInfo
    paginationSizes: [5, 10, 25, 50, 100], // Default pagination sizes
    paginationSizesLabel: 'Show',
    paginationSizesDesc: 'per page',
    paginationSize: 5, // Default pagination size
    paginationMoreLimit: 5, // Default limit for "load more"
    paginationMore: false // Default for paginationMore
  };

  // Merge default values with props
  const mergedProps = { ...defaultValues, ...props };

  // Initialize pagination state
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: mergedProps.paginationSize || defaultValues.paginationSize!
  });

  // Initialize the table using useReactTable and pass props.columns and props.data
  const table = useReactTable({
    columns: mergedProps.columns, // Access columns from mergedProps
    data: mergedProps.data, // Access data from mergedProps
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
    <DataGridProvider table={table} props={mergedProps}>
      <DataGridInner />
    </DataGridProvider>
  );
};

export { DataGrid };
