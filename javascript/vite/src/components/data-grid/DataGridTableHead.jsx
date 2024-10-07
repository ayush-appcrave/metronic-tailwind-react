import clsx from 'clsx';
import React from 'react';
import { useDataGrid } from '@/components/data-grid';
import { DataGridTableHeadRowsSelect } from './DataGridTableHeadRowsSelect';
const DataGridTableHead = ({
  children,
  className
}) => {
  const {
    props
  } = useDataGrid();
  return <thead className={clsx(className && className)}>
      <tr key={0}>
        {props.rowSelect && <DataGridTableHeadRowsSelect />}
        {children}
      </tr>
    </thead>;
};
export { DataGridTableHead };