import { User } from '@auth0/auth0-spa-js';
import { Avatar, Box, Checkbox, TableBody, TableCell, TableRow } from '@mui/material';
import { useMemo } from 'react';

import { formatDate } from '@/components/table';

import { toAbsoluteUrl } from '../../../../utils/Assets';
import { useListView, useQueryResponseData } from '../../core';
import { UserManagementActionCellByPath } from '../cells/UserManagementActionCellByPath';
import { EmptyTable } from '../empty-table/EmptyTable';
import { TableLoader } from '../table-loader/TableLoader';

interface TableBodyCustomProps {
  dense: boolean;
}

function TableBodyCustom(props: TableBodyCustomProps) {
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);
  const { selected, onSelect } = useListView();
  const isSelected = (id: string) => {
    return selected.includes(id);
  };

  return (
    <TableBody
      sx={{
        position: 'relative'
      }}
    >
      {data.map((row: User, index: number) => {
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            hover
            role="checkbox"
            aria-checked={isSelected(row.id)}
            tabIndex={-1}
            key={`enhanced-table-row-${row.id}`}
            selected={isSelected(row.id)}
          >
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                size="small"
                onInput={(event) => {
                  onSelect(row.id);
                }}
                checked={isSelected(row.id)}
                inputProps={{
                  'aria-labelledby': labelId
                }}
              />
            </TableCell>
            <TableCell width={'20%'} component="th" id={labelId} scope="row" padding="none">
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                {row.avatar && (
                  <Avatar alt={row.first_name ?? 'user avatar'} src={toAbsoluteUrl(row.avatar)} />
                )}

                <Box
                  sx={{
                    verticalAlign: 'middle',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginLeft: '5px'
                  }}
                >
                  {row.first_name}
                </Box>
              </Box>
            </TableCell>
            <TableCell width={'15%'} align="left">
              {row.last_name}
            </TableCell>
            <TableCell width={'10%'} align="left">
              {row.role}
            </TableCell>
            <TableCell width={'10%'} align="left">
              {row.status}
            </TableCell>
            <TableCell width={'10%'} align="left">
              {row.two_steps_auth ? 'enabled' : 'disabled'}
            </TableCell>
            <TableCell width={'20%'} align="left">
              {formatDate(row.created_at)}
            </TableCell>
            <TableCell width={'10%'} align="left">
              <UserManagementActionCellByPath id={row.id} />
            </TableCell>
          </TableRow>
        );
      })}
      <TableLoader dense={props.dense}></TableLoader>
      <EmptyTable></EmptyTable>
    </TableBody>
  );
}

export { TableBodyCustom };
