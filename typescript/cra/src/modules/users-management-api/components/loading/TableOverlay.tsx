import { TableCell, TableRow } from '@mui/material';

interface Props {
  itemsPerPage: number;
  rowHeight: number;
}

const TableOverlay = (props: Props) => {
  return (
    <TableRow
      sx={{
        height: `${props.rowHeight * props.itemsPerPage}px`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%'
      }}>
      <TableCell
        colSpan={8}
        rowSpan={props.itemsPerPage}
        sx={{
          textAlign: 'center',
          verticalAlign: 'middle',
          backgroundColor: 'black',
          opacity: 0.3,
          display: 'inline-table',
          width: '100%',
          height: '100%'
        }}></TableCell>
    </TableRow>
  );
};

export { TableOverlay };
