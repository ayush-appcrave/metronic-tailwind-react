import React, { ReactNode } from 'react';

export interface TDataGridTableProps {
  children: ReactNode;
}

const DataGridTable = ({ children }: TDataGridTableProps) => {
  return <table className="table table-border">{children}</table>;
};

export { DataGridTable };
