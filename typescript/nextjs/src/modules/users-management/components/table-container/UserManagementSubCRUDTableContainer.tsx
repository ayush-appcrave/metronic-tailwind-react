import { Box, LinearProgress, Table, TableContainer } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { memo, useEffect, useState } from 'react';

import { useQueryRequest, useQueryResponseLoading } from '../../core';
import { initialQueryRequest } from '../../helpers';
import { TableBodySubCRUDCustom } from '../table-content/TableBodySubCRUDCustom';
import { TableFooter } from '../table-footer/TableFooter';
import { EnhancedSubCRUDTableHeadWrapper } from '../table-head/EnhancedSubCRUDTableHeadWrapper';

const UserManagementSubCRUDTableContainerComponent = () => {
  const [dense, setDense] = useState(true);
  const isLoading = useQueryResponseLoading();

  const { updateState } = useQueryRequest();

  useEffect(() => {
    return () => {
      updateState(initialQueryRequest.state);
    };
  }, []);

  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: 750, position: 'relative' }}
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
        >
          <EnhancedSubCRUDTableHeadWrapper />
          {isLoading && (
            <Box
              sx={{
                position: 'absolute',
                zIndex: zIndex.modal + 1,
                top: 0,
                left: 0,
                right: 0
              }}
            >
              <LinearProgress color="primary" />
            </Box>
          )}
          <TableBodySubCRUDCustom dense={dense} />
        </Table>
      </TableContainer>
      <TableFooter dense={dense} setDense={setDense}></TableFooter>
    </>
  );
};

const UserManagementSubCRUDTableContainer = memo(UserManagementSubCRUDTableContainerComponent);

export { UserManagementSubCRUDTableContainer };
