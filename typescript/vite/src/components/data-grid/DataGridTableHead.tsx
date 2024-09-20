import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useDataGrid } from '@/components/data-grid';

export interface TDataGridTableHeadProps {
  className?: string;
  children: ReactNode;
}

const DataGridTableHead = ({ children, className }: TDataGridTableHeadProps) => {
  const { props } = useDataGrid();

  const buildRowsSelectCell = () => {
    return (
      <td className="w-[60px]">
        <input className="checkbox checkbox-sm" type="checkbox" />
      </td>
    );
  };

  return (
    <thead className={clsx(className && className)}>
      <tr>
        {props.rowSelect && buildRowsSelectCell()}
        {children}
      </tr>
    </thead>
  );
};

export { DataGridTableHead };
