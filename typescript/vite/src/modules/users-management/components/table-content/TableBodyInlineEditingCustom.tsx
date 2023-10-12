import { TableBody } from '@mui/material';
import { useMemo } from 'react';

import { useQueryResponseData } from '../../core';
import { EmptyTable } from '../empty-table/EmptyTable';
import { UserManagementInlineEditingTableRow } from '../rows/UserManagementInlineEditingTableRow';
import { TableLoader } from '../table-loader/TableLoader';

interface TableBodyInlineEditingCustomProps {
  dense: boolean;
}

function TableBodyInlineEditingCustom(props: TableBodyInlineEditingCustomProps) {
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);

  return (
    <TableBody
      sx={{
        position: 'relative'
      }}
    >
      {data.map((row, index) => {
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <UserManagementInlineEditingTableRow
            key={labelId}
            row={row}
            labelId={labelId}
          ></UserManagementInlineEditingTableRow>
        );
      })}
      <TableLoader dense={props.dense}></TableLoader>
      <EmptyTable></EmptyTable>
    </TableBody>
  );
}

export { TableBodyInlineEditingCustom };
