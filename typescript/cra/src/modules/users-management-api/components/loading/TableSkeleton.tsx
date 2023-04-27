import { Box, Skeleton, TableCell, TableRow } from '@mui/material';
import React from 'react';

interface Props {
  itemsPerPage: number;
}

const TableSkeleton = (props: Props) => {
  return (
    <>
      {new Array(props.itemsPerPage)
        .join()
        .split(',')
        .map(function (item, index) {
          return ++index;
        })
        .map((item) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={`skeleton-row-${item}`}>
              <TableCell width={'5%'}>
                <Box
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    verticalAlign: 'middle',
                    padding: '9px',
                    position: 'relative'
                  }}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      width: '1.3em',
                      height: '1.3em',
                      display: 'inline-block',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 1
                    }}
                  />
                </Box>
              </TableCell>
              <TableCell width={'20%'} component="th" scope="row" padding="none">
                <Box sx={{ display: 'flex', marginTop: '5px', marginBottom: '5px' }}>
                  <Skeleton variant="circular" width={40} height={40} />

                  <Skeleton
                    variant="text"
                    height={25.141}
                    width={'70%'}
                    sx={{
                      fontSize: '1rem',
                      verticalAlign: 'middle',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                      marginLeft: '5px'
                    }}
                  />
                </Box>
              </TableCell>
              <TableCell width={'15%'} align="left">
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              </TableCell>
              <TableCell width={'10%'} align="left">
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              </TableCell>
              <TableCell width={'10%'} align="left">
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              </TableCell>
              <TableCell width={'10%'} align="left">
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              </TableCell>
              <TableCell width={'20%'} align="left">
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              </TableCell>
              <TableCell width={'10%'} align="left">
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              </TableCell>
            </TableRow>
          );
        })}
    </>
  );
};

export { TableSkeleton };
