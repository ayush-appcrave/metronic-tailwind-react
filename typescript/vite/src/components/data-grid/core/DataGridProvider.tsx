/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
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
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { DataGridInner } from './DataGridInner'; // Import DataGridInner
import { TDataGridProps, TDataGridSelectedRowIds } from './DataGrid'; // Import DataGrid props

export interface IDataGridContextProps<TData extends object> {
  props: TDataGridProps<TData>;
  table: any;
  totalRows: number;
  loading: boolean;
  setLoading: (state: boolean) => void;
  selectedRowIds: Set<string>;
  toggleRowSelection: (id: string) => void;
  toggleAllRowsSelection: (checked: boolean) => void;
  getSelectedRowIds: () => string[];
  isSelectAllChecked: boolean;
  isSelectAllIndeterminate: boolean;
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
    data: [],
    saveState: false,
    saveStateId: '',
    cellsBorder: true,
    loadingText: 'Loading...',
    rowSelect: false,
    emptyState: 'No data available',
    paginationInfo: '{from} - {to} of {count}',
    paginationSizes: [5, 10, 25, 50, 100],
    paginationSizesLabel: 'Show',
    paginationSizesDesc: 'per page',
    paginationSize: 5,
    paginationMoreLimit: 5,
    paginationMore: false,
    initialSorting: [],
    serverSide: false
  };

  const mergedProps = { ...defaultValues, ...props };

  const [data, setData] = useState<TData[]>(mergedProps.data ?? []);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalRows, setTotalRows] = useState<number>(mergedProps.data?.length ?? 0);

  // State management for selected rows
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set());
  const [isSelectAllChecked, setIsSelectAllChecked] = useState<boolean>(false);
  const [isSelectAllIndeterminate, setIsSelectAllIndeterminate] = useState<boolean>(false);

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

  const validateSorting = (sorting: any[], columns: any[]) => {
    const validColumnIds = new Set(columns.map((column) => column.id));
    return sorting.filter((sort) => validColumnIds.has(sort.id));
  };

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

  const { pagination: initialPagination, sorting: initialSorting } = loadSavedState();

  const validatedInitialSorting = validateSorting(initialSorting, mergedProps.columns);
  const validatedInitialPagination = validatePagination(
    initialPagination,
    totalRows,
    mergedProps.paginationSizes!
  );

  const [pagination, setPagination] = useState<PaginationState>(validatedInitialPagination);
  const [sorting, setSorting] = useState<any[]>(validatedInitialSorting);
  const [filters, setFilters] = useState<ColumnFiltersState>([]);

  const fetchServerSideData = async () => {
    if (!mergedProps.onFetchData) return;

    setLoading(true);
    try {
      const requestParams = {
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
        sorting,
        filters
      };

      const { data, totalCount } = await mergedProps.onFetchData(requestParams);
      setData(data);
      setTotalRows(totalCount);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false); // Stop loading once data is fetched
    }
  };

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

  useEffect(() => {
    if (mergedProps.serverSide) {
      fetchServerSideData();
    }
  }, [pagination, sorting, filters]);

  useEffect(() => {
    handleSaveState({
      pageIndex: pagination.pageIndex,
      pageSize: pagination.pageSize,
      sorting
    });
  }, [pagination, sorting]);

  const table = useReactTable({
    columns: mergedProps.columns,
    data: data,
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

  const toggleRowSelection = (id: string) => {
    setSelectedRowIds((prevSelected) => {
      const newSelected: TDataGridSelectedRowIds = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      if (props.onRowsSelectChange) {
        props.onRowsSelectChange(newSelected);
      }
      return newSelected;
    });
  };

  const toggleAllRowsSelection = (checked: boolean) => {
    const allRowIds = table.getRowModel().rows.map((row) => row.id);
    const newSelectedRowIds: TDataGridSelectedRowIds = checked ? new Set(allRowIds) : new Set();
    setSelectedRowIds(newSelectedRowIds);
    if (props.onRowsSelectChange) {
      props.onRowsSelectChange(newSelectedRowIds);
    }
  };

  const getSelectedRowIds = () => {
    return Array.from(selectedRowIds);
  };

  // Handle sorting, pagination, and search loading
  const handleStateChange = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after action completes
    }, 300); // Delay for smooth experience
    return () => clearTimeout(timer);
  };

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

  // Handle data loading (trigger loading when data is being fetched)
  useEffect(() => {
    if (data.length === 0) {
      console.log('wow:1');
      setLoading(true);
    } else {
      setLoading(false); // Data loaded
    }
  }, [data]);

  useEffect(() => {
    const allRowIds = table.getRowModel().rows.map((row) => row.id);
    const isAllSelected = allRowIds.every((id) => selectedRowIds.has(id));
    const isSomeSelected = allRowIds.some((id) => selectedRowIds.has(id));

    setIsSelectAllChecked(isAllSelected);
    setIsSelectAllIndeterminate(!isAllSelected && isSomeSelected);
  }, [selectedRowIds, table.getRowModel().rows]);

  return (
    <DataGridContext.Provider
      value={{
        props: mergedProps,
        table,
        totalRows,
        loading,
        setLoading,
        selectedRowIds,
        toggleRowSelection,
        toggleAllRowsSelection,
        getSelectedRowIds,
        isSelectAllChecked,
        isSelectAllIndeterminate
      }}
    >
      <DataGridInner />
    </DataGridContext.Provider>
  );
};
