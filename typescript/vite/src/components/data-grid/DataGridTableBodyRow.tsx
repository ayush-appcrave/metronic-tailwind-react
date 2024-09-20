import React, { ReactNode } from 'react';
import { useDataGrid } from './';

export interface TDataGridTableBodyRowProps {
  children: ReactNode;
  className?: string;
  id: string;
}

const DataGridTableBodyRow = ({ id, children, className }: TDataGridTableBodyRowProps) => {
  const { props } = useDataGrid();

  const buildRowSelectCell = () => {
    return (
      <td>
        <input className="checkbox checkbox-sm" type="checkbox" />
      </td>
    );
  };

  return (
    <tr key={id} className={className && className}>
      {props.rowSelect && buildRowSelectCell()}
      {children}
    </tr>
  );
};

export { DataGridTableBodyRow };
