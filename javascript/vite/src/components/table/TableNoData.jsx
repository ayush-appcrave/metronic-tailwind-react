import { TableCell, TableRow } from '@mui/material';
import React from 'react';
const TableNoData = ({
  colSpan = 1,
  text = 'No data found'
}) => {
  return <TableRow>
      <TableCell colSpan={colSpan}>{text}</TableCell>
    </TableRow>;
};
export { TableNoData };