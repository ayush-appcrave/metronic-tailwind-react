import { LinearProgress, TableCell, TableRow } from '@mui/material';

interface Props {
  itemsPerPage: number;
  rowHeight: number;
}

const TableLoader = (props: Props) => {
  return (
    <TableRow
      sx={{
        height: `${props.rowHeight * props.itemsPerPage}px`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <TableCell
        colSpan={8}
        rowSpan={props.itemsPerPage}
        sx={{
          textAlign: 'center',
          verticalAlign: 'middle',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          opacity: 0.3,
          display: 'flex',
          width: '100%',
          height: '100%',
          cursor: 'wait'
        }}
      >
        <LinearProgress sx={{ marginLeft: 'auto', marginRight: 'auto', width: '30%' }} />
      </TableCell>
    </TableRow>
  );
};

export { TableLoader };
