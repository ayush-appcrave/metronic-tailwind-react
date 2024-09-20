import { ReactNode, Fragment } from 'react';
import { useDataGrid } from './';
import { DataGridLoader } from '../DataGridLoader';

export interface TDataGridInnerProps {
  children: ReactNode;
}

const DataGridInner = ({ children }: TDataGridInnerProps) => {
  const { loading, props } = useDataGrid();

  return (
    <Fragment>
      <div className="grid min-w-full">
        <div className="scrollable-x-auto">{children}</div>
      </div>
      {loading && <DataGridLoader label={props.loadingText || 'Loading'} />}
    </Fragment>
  );
};

export { DataGridInner };
