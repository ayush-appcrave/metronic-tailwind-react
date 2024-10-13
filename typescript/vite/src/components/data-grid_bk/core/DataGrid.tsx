/* eslint-disable react-hooks/exhaustive-deps */
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable,
  ColumnFiltersState
} from '@tanstack/react-table';
import { DataGridInner, DataGridProvider } from './';
import { ReactNode, useEffect, useState } from 'react';

export type TDataGridTableSpacingType = 'xs' | 'sm' | 'lg';

export type TDataGridSelectedRowIds = Set<string>;

export interface TDataGridProps<TData extends object> {
  columns: any[];
  data: TData[];
  loadingText?: string;
  saveState?: boolean;
  saveStateId?: string;
  rowSelect?: boolean;
  onRowsSelectChange?: (selectedRowIds: TDataGridSelectedRowIds) => void;
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
  initialSorting?: { id: string; desc?: boolean }[];
  // Server-side support props
  serverSide?: boolean;
  onFetchData?: (params: any) => Promise<any>;
  requestMapper?: (params: {
    pageIndex: number;
    pageSize: number;
    sorting: { id: string; desc?: boolean }[];
    filters: ColumnFiltersState;
  }) => any; // Function to map request parameters
  responseMapper?: (response: any) => { data: TData[]; totalCount: number }; // Function to map response data
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
    initialSorting: [], // Default for initial sorting
    serverSide: false // Default is local data
  };

  const mergedProps = { ...defaultValues, ...props };

  // Load saved pagination, sorting state from localStorage
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

  // Initialize pagination, sorting, and data states
  const [pagination, setPagination] = useState<PaginationState>(validatedInitialPagination);
  const [sorting, setSorting] = useState<any[]>(validatedInitialSorting);
  const [filters, setFilters] = useState<ColumnFiltersState>([]);
  const [data, setData] = useState<TData[]>(mergedProps.data);
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [totalRows, setTotalRows] = useState<number>(0);

  // Server-side data fetching logic
  const fetchServerSideData = async () => {
    if (!mergedProps.onFetchData) return;

    setLoading(true);
    try {
      // Map request params if requestMapper is provided
      const requestParams = mergedProps.requestMapper
        ? mergedProps.requestMapper({
            pageIndex: pagination.pageIndex,
            pageSize: pagination.pageSize,
            sorting,
            filters
          })
        : { pageIndex: pagination.pageIndex, pageSize: pagination.pageSize, sorting, filters };

      const response = await mergedProps.onFetchData(requestParams);

      // Map response data if responseMapper is provided
      const { data, totalCount } = mergedProps.responseMapper
        ? mergedProps.responseMapper(response)
        : response;

      setData(data);
      setTotalRows(totalCount);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Save pagination, sorting state when they change
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

  // Fetch data on pagination, sorting, or filter changes if serverSide is enabled
  useEffect(() => {
    if (mergedProps.serverSide) {
      fetchServerSideData();
    }
  }, [pagination, sorting, filters]);

  // Save state on pagination and sorting change
  useEffect(() => {
    handleSaveState({
      pageIndex: pagination.pageIndex,
      pageSize: pagination.pageSize,
      sorting
    });
  }, [pagination, sorting]);

  // Initialize table with @tanstack/react-table
  const table = useReactTable({
    columns: mergedProps.columns,
    data: mergedProps.serverSide ? data : mergedProps.data,
    pageCount: mergedProps.serverSide ? Math.ceil(totalRows / pagination.pageSize) : undefined,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: mergedProps.serverSide,
    manualSorting: mergedProps.serverSide,
    manualFiltering: mergedProps.serverSide,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setFilters,
    state: { pagination, sorting, columnFilters: filters }
  });

  return (
    <DataGridProvider table={table} props={mergedProps}>
      <DataGridInner />
    </DataGridProvider>
  );
};

export { DataGrid };
