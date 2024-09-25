import { RowData } from '@tanstack/react-table';

// Extend the TanStack Table's ColumnMeta interface
declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    className?: string; // Custom class for head cells
    cellClassName?: string; // Custom class for body cells
  }
}