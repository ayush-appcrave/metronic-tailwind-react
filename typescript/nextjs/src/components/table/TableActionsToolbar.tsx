import { Box, TableCell } from '@mui/material';
import { ReactNode } from 'react';

interface TableActionsToolbarProps {
  colSpan: number;
  selected: string[];
  children: ReactNode;
}

const TableActionsToolbar = ({ colSpan = 1, selected, children }: TableActionsToolbarProps) => {
  return (
    <TableCell colSpan={colSpan}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box>{selected.length} selected</Box>
        <Box>{children}</Box>
      </Box>
    </TableCell>
  );
};

export { TableActionsToolbar };
