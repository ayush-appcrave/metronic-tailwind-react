import { Table, TableContainer } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { useQueryRequest } from '../../core';
import { initialQueryRequest } from '../../helpers';
import { TableBodySkeletonLoadingCustom } from '../table-content/TableBodySkeletonLoadingCustom';
import { TableFooter } from '../table-footer/TableFooter';
import { EnhancedTableHeadWrapper } from '../table-head/EnhancedTableHeadWrapper';
const UserManagementSkeletonTableContainerComponent = () => {
  const [dense, setDense] = useState(true);
  const {
    updateState
  } = useQueryRequest();
  useEffect(() => {
    return () => {
      updateState(initialQueryRequest.state);
    };
  }, []);
  return <>
      <TableContainer>
        <Table sx={{
        minWidth: 750
      }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
          <EnhancedTableHeadWrapper />
          <TableBodySkeletonLoadingCustom dense={dense} />
        </Table>
      </TableContainer>
      <TableFooter dense={dense} setDense={setDense}></TableFooter>
    </>;
};
const UserManagementSkeletonTableContainer = memo(UserManagementSkeletonTableContainerComponent);
export { UserManagementSkeletonTableContainer };