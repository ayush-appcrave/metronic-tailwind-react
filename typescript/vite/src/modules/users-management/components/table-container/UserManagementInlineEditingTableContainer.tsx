import { ProgressBarLoader } from '@/components/loaders';
import { Table, TableContainer } from '@mui/material';
import { memo, useEffect, useState } from 'react';

import { useQueryRequest, useQueryResponseLoading } from '../../core';
import { initialQueryRequest } from '../../helpers';
import { TableBodyInlineEditingCustom } from '../table-content/TableBodyInlineEditingCustom';
import { TableFooter } from '../table-footer/TableFooter';
import { EnhancedTableHeadWrapper } from '../table-head/EnhancedTableHeadWrapper';

const UserManagementInlineEditingTableContainerComponent = () => {
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
      {isLoading && <ProgressBarLoader></ProgressBarLoader>}
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
        >
          <EnhancedTableHeadWrapper />
          <TableBodyInlineEditingCustom dense={dense} />
        </Table>
      </TableContainer>
      <TableFooter dense={dense} setDense={setDense}></TableFooter>
    </>
  );
};

const UserManagementInlineEditingTableContainer = memo(
  UserManagementInlineEditingTableContainerComponent
);

export { UserManagementInlineEditingTableContainer };
