import { CircularProgress, LinearProgress, TableCell, TableRow } from '@mui/material';

interface Props {
  colSpan: number;
  itemsPerPage: number;
  rowHeight: number;
  type?: 'linear' | 'circle';
}

const TableOverlayLoader = ({ colSpan, itemsPerPage, rowHeight, type = 'linear' }: Props) => {
  return (
    <TableRow
      sx={{
        height: `${rowHeight * itemsPerPage}px`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <TableCell
        colSpan={colSpan}
        rowSpan={itemsPerPage}
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
        {type === 'circle' && <CircularProgress />}
        {type === 'linear' && (
          <LinearProgress sx={{ marginLeft: 'auto', marginRight: 'auto', width: '30%' }} />
        )}
      </TableCell>
    </TableRow>
  );
};

export { TableOverlayLoader };
