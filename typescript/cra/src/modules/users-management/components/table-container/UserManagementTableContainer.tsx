import { Table, TableContainer } from '@mui/material';
import { memo, useState } from 'react';

import { TableBodyCustom } from '../table-content/TableBodyCustom';
import { TableFooter } from '../table-footer/TableFooter';
import { EnhancedTableHeadWrapper } from '../table-head/EnhancedTableHeadWrapper';

const UserManagementTableContainerComponent = () => {
  const [dense, setDense] = useState(true);

  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
        >
          <EnhancedTableHeadWrapper />
          <TableBodyCustom dense={dense} />
        </Table>
      </TableContainer>
      <TableFooter dense={dense} setDense={setDense}></TableFooter>
    </>
  );
};

const UserManagementTableContainer = memo(UserManagementTableContainerComponent);

export { UserManagementTableContainer };
