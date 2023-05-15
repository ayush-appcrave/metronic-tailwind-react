import { TableCell, TableRow } from '@mui/material';
import React from 'react';

interface TableNoDataProps {
  colSpan: number;
  text: string;
}

const TableNoData = (props: TableNoDataProps) => {
  return (
    <TableRow>
      <TableCell colSpan={props.colSpan}>{props.text}</TableCell>
    </TableRow>
  );
};

export { TableNoData };
