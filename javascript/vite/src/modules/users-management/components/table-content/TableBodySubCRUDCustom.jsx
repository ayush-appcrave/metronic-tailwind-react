import { TableBody } from '@mui/material';
import { useMemo } from 'react';
import { useQueryResponseData } from '../../core';
import { EmptyTable } from '../empty-table/EmptyTable';
import { UserManagementSubCRUDTableRow } from '../rows/UserManagementSubCRUDTableRow';
import { TableLoader } from '../table-loader/TableLoader';
function TableBodySubCRUDCustom(props) {
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);
  return <TableBody sx={{
    position: 'relative'
  }}>
      {data.map((row, index) => {
      const labelId = `enhanced-table-checkbox-${row.id}`;
      return <UserManagementSubCRUDTableRow key={labelId} row={row}></UserManagementSubCRUDTableRow>;
    })}
      <TableLoader dense={props.dense}></TableLoader>
      <EmptyTable></EmptyTable>
    </TableBody>;
}
export { TableBodySubCRUDCustom };