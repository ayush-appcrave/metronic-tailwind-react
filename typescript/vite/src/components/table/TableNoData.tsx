import { TableCell, TableRow } from '@mui/material';

interface TableNoDataProps {
  colSpan?: number;
  text?: string;
}

const TableNoData = ({ colSpan = 1, text = 'No data found' }: TableNoDataProps) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>{text}</TableCell>
    </TableRow>
  );
};

export { TableNoData };
