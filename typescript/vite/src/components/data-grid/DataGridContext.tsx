'use client';

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable,
  ColumnFiltersState,
  VisibilityState,
  getFacetedRowModel,
  getFacetedUniqueValues,
  RowSelectionState,
  OnChangeFn,
  Table
} from '@tanstack/react-table';
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { DataGridInner } from './DataGridInner';
import { TDataGridProps } from './DataGrid';
import { deepMerge } from '@/lib/helpers';

export interface IDataGridContextProps<TData extends object> {
  props: TDataGridProps<TData>;
  table: Table<TData>;
  totalRows: number;
  loading: boolean;
  setLoading: (state: boolean) => void;
}

const DataGridContext = createContext<IDataGridContextProps<any> | undefined>(undefined);

export const useDataGrid = () => {
  const context = useContext(DataGridContext);
  if (!context) {
    throw new Error('useDataGrid must be used within a DataGridProvider');
  }
  return context;
};

export const DataGridProvider = <TData extends object>(props: TDataGridProps<TData>) => {
  const defaultValues: Partial<TDataGridProps<TData>> = {
    messages: {
      empty: 'No data available',
      loading: 'Loading...'
    },
    layout: {
      cellSpacing: 'md',
      cellBorder: true,
      card: false
    },
    pagination: {
      info: '{from} - {to} of {count}',
      sizes: [5, 10, 25, 50, 100],
      sizesLabel: 'Show',
      sizesDescription: 'per page',
      size: 5,
      page: 0,
      moreLimit: 5,
      more: false
    },
    rowSelection: false,
    serverSide: false
  };

  const mergedProps = deepMerge(defaultValues, props);

  // Initialize data, loading, and totalRows states
  const [data, setData] = useState<TData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalRows, setTotalRows] = useState<number>(0);

  // Mounted ref to prevent state updates after unmount
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Set initial data and totalRows in a useEffect
  useEffect(() => {
    if (mergedProps.data) {
      if (isMountedRef.current) {
        setData(mergedProps.data);
        setTotalRows(mergedProps.data.length);
        setLoading(false);
      }
    }
  }, [mergedProps.data]);

  // Pagination and Sorting from props
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: props.pagination?.page ?? 0,
    pageSize: props.pagination?.size ?? 5
  });
  const [rowSelection, setRowSelection] = useState(mergedProps.rowSelection);
  const [sorting, setSorting] = useState<any[]>(mergedProps.sorting ?? []);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  // Fetch data for server-side pagination, sorting, and filtering
  const fetchServerSideData = async () => {
    if (!mergedProps.onFetchData) return;

    setLoading(true);

    try {
      const requestParams = {
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
        sorting,
        columnFilters
      };

      const { data, totalCount } = await mergedProps.onFetchData(requestParams);

      if (isMountedRef.current) {
        setData(data || []);
        setTotalRows(totalCount || 0);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  };

  const handleRowSelectionChange: OnChangeFn<RowSelectionState> = (updaterOrValue) => {
    // Update local rowSelection state
    setRowSelection((prev: RowSelectionState) =>
      typeof updaterOrValue === 'function' ? updaterOrValue(prev) : updaterOrValue
    );

    if (mergedProps.onRowSelectionChange) {
      const newSelection = typeof updaterOrValue === 'function' ? updaterOrValue(rowSelection) : updaterOrValue;
      mergedProps.onRowSelectionChange(newSelection, table);
    }
  };

  const table = useReactTable({
    data,
    columns: mergedProps.columns,
    pageCount: mergedProps.serverSide ? Math.ceil(totalRows / pagination.pageSize) : undefined,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination
    },
    getRowId: mergedProps.getRowId || ((row, index) => String(index)),
    enableRowSelection: mergedProps.rowSelection,
    onRowSelectionChange: handleRowSelectionChange,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: mergedProps.serverSide,
    manualSorting: mergedProps.serverSide,
    manualFiltering: mergedProps.serverSide
  });

  // Handle sorting, pagination, and search loading
  const handleStateChange = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (isMountedRef.current) setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (mergedProps.serverSide) {
      fetchServerSideData();
    }
  }, [pagination, sorting, columnFilters]);

  // Listen for sorting changes
  useEffect(() => {
    if (table.getState().sorting.length > 0) {
      handleStateChange();
    }
  }, [table.getState().sorting]);

  // Listen for pagination changes
  useEffect(() => {
    handleStateChange();
  }, [table.getState().pagination]);

  return (
    <DataGridContext.Provider
      value={{
        props: mergedProps,
        table,
        totalRows,
        loading,
        setLoading
      }}
    >
      <DataGridInner />
    </DataGridContext.Provider>
  );
};
