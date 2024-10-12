/* eslint-disable react-hooks/exhaustive-deps */
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable
} from '@tanstack/react-table';
import { DataGridInner, DataGridProvider } from './';
import { ReactNode, useEffect, useState } from 'react';

export type TDataGridTableSpacingType = 'xs' | 'sm' | 'lg';

export type TDataGridSelectedRowIds = Set<string>;

export interface TDataGridProps<TData extends object> {
  columns: any[]; // Define columns and data props
  data: TData[];
  loadingText?: string;
  saveState?: boolean;
  saveStateId?: string;
  rowSelect?: boolean;
  onRowsSelectChange?: (prselectedRowIds: TDataGridSelectedRowIds) => void;
  emptyState?: ReactNode;
  cellsBorder?: boolean;
  tableSpacing?: TDataGridTableSpacingType;
  paginationInfo?: string;
  paginationSizes?: number[];
  paginationSizesLabel?: string;
  paginationSizesDesc?: string;
  paginationSize?: number;
  paginationMore?: boolean;
  paginationMoreLimit?: number;
  initialSorting?: { id: string; desc?: boolean }[]; // New prop to set initial sorting
}

const DataGrid = <TData extends object>(props: TDataGridProps<TData>) => {
  // Set default values for the required props
  const defaultValues: Partial<TDataGridProps<TData>> = {
    saveState: false,
    saveStateId: '',
    cellsBorder: true,
    loadingText: 'Loading...', // Default value for loadingText
    rowSelect: false, // Default value for rowSelect
    emptyState: 'No data available', // Default value for emptyInfo
    paginationInfo: '{from} - {to} of {count}', // Default value for paginationInfo
    paginationSizes: [5, 10, 25, 50, 100], // Default pagination sizes
    paginationSizesLabel: 'Show',
    paginationSizesDesc: 'per page',
    paginationSize: 5, // Default pagination size
    paginationMoreLimit: 5, // Default limit for "load more"
    paginationMore: false, // Default for paginationMore
    initialSorting: [] // Default for initial sorting
  };

  // Merge default values with props
  const mergedProps = { ...defaultValues, ...props };

  /// Load saved pagination, sorting state from localStorage
  const loadSavedState = (): { pagination: PaginationState; sorting: any[] } => {
    if (props.saveState && props.saveStateId) {
      const savedState = localStorage.getItem(props.saveStateId);
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        return {
          pagination: {
            pageIndex: parsedState.pageIndex ?? 0,
            pageSize: parsedState.pageSize ?? mergedProps.paginationSize ?? 5
          },
          sorting: parsedState.sorting ?? mergedProps.initialSorting ?? []
        };
      }
    }
    return {
      pagination: {
        pageIndex: 0,
        pageSize: mergedProps.paginationSize || 5
      },
      sorting: mergedProps.initialSorting || []
    };
  };

  // Validate if saved sorting column exists in the columns config
  const validateSorting = (sorting: any[], columns: any[]) => {
    const validColumnIds = new Set(columns.map((column) => column.id));
    return sorting.filter((sort) => validColumnIds.has(sort.id));
  };

  // Validate pageIndex and pageSize against current data and pagination sizes
  const validatePagination = (
    pagination: PaginationState,
    dataLength: number,
    paginationSizes: number[]
  ): PaginationState => {
    const validPageSize = paginationSizes.includes(pagination.pageSize)
      ? pagination.pageSize
      : paginationSizes[0];
    const totalPages = Math.ceil(dataLength / validPageSize);
    const validPageIndex = Math.min(pagination.pageIndex, Math.max(0, totalPages - 1));

    return {
      pageIndex: validPageIndex,
      pageSize: validPageSize
    };
  };

  // Load initial saved state (pagination, sorting)
  const { pagination: initialPagination, sorting: initialSorting } = loadSavedState();

  // Validate the initial sorting and pagination state
  const validatedInitialSorting = validateSorting(initialSorting, mergedProps.columns);
  const validatedInitialPagination = validatePagination(
    initialPagination,
    mergedProps.data.length,
    mergedProps.paginationSizes!
  );

  // Initialize pagination and sorting states
  const [pagination, setPagination] = useState<PaginationState>(validatedInitialPagination);
  const [sorting, setSorting] = useState<any[]>(validatedInitialSorting);

  // Function to save pagination and sorting state
  const handleSaveState = (newState: any) => {
    if (props.saveState && props.saveStateId) {
      const existingState = localStorage.getItem(props.saveStateId);
      let mergedState = newState;

      if (existingState) {
        const parsedState = JSON.parse(existingState);
        mergedState = { ...parsedState, ...newState };
      }

      localStorage.setItem(props.saveStateId, JSON.stringify(mergedState));
    }
  };

  // Initialize the table using useReactTable and pass props.columns and props.data
  const table = useReactTable({
    columns: mergedProps.columns, // Access columns from mergedProps
    data: mergedProps.data, // Access data from mergedProps
    debugTable: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      pagination,
      sorting
    }
  });

  // Save pagination, sorting state when they change
  useEffect(() => {
    handleSaveState({
      pageIndex: table.getState().pagination.pageIndex,
      pageSize: table.getState().pagination.pageSize,
      sorting: table.getState().sorting
    });
  }, [handleSaveState, table]);

  return (
    <DataGridProvider table={table} props={mergedProps}>
      <DataGridInner />
    </DataGridProvider>
  );
};

export { DataGrid };
