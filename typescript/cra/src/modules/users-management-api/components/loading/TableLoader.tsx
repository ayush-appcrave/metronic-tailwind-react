import { LinearProgress, TableCell, TableRow } from '@mui/material';
import { PaginationState } from '../../helpers';

interface Props {
  itemsPerPage: number;
  rowHeight: number;
}

const TableLoader = (props: Props) => {
  return (
    <TableRow
      sx={{
        height: `${props.rowHeight * props.itemsPerPage}px`,
        position: 'relative'
      }}>
      <TableCell
        colSpan={8}
        rowSpan={props.itemsPerPage}
        sx={{
          textAlign: 'center',
          display: 'table-cell',
          verticalAlign: 'middle'
        }}>
        <LinearProgress sx={{ marginLeft: 'auto', marginRight: 'auto', width: '30%' }} />
      </TableCell>
    </TableRow>
  );
};

export { TableLoader };
