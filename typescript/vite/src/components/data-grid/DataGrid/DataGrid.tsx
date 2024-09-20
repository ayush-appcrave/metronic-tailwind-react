import { DataGridInner, DataGridProvider } from './';
import { ReactNode } from 'react';

export interface TDataGridProps {
  children: ReactNode;
  loadingText?: string;
  rowSelect?: boolean;
}

const DataGrid = (props: TDataGridProps) => {
  return (
    <DataGridProvider {...props}>
      <DataGridInner>{props.children}</DataGridInner>
    </DataGridProvider>
  );
};

export { DataGrid };
