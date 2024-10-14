/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { DataGridInner, DataGridProvider } from '.';

export type TDataGridTableSpacingType = 'xs' | 'sm' | 'lg';

export type TDataGridSelectedRowIds = Set<string>;

export type TDataGridRequestParams = {
  pageIndex: number;
  pageSize: number;
  sorting: { id: string; desc?: boolean }[];
  filters: any;
}
export interface TDataGridProps<TData extends object> {
  columns: any[];
  data?: TData[];
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
  paginationSizesDescription?: string;
  paginationSize?: number;
  paginationPage?: number;
  paginationMore?: boolean;
  paginationMoreLimit?: number;
  initialSorting?: { id: string; desc?: boolean }[];
  serverSide?: boolean;
  onFetchData?: (params: any) => Promise<any>;
}

const DataGrid = <TData extends object>(props: TDataGridProps<TData>) => {
  return (
    <DataGridProvider {...props}>
      <DataGridInner />
    </DataGridProvider>
  );
};

export { DataGrid };
