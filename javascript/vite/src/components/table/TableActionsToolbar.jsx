import { Box, TableCell } from '@mui/material';
const TableActionsToolbar = ({
  colSpan = 1,
  selected,
  children
}) => {
  return <TableCell colSpan={colSpan}>
      <Box sx={{
      display: 'flex',
      alignItems: 'center'
    }}>
        <Box>{selected.length} selected</Box>
        <Box>{children}</Box>
      </Box>
    </TableCell>;
};
export { TableActionsToolbar };