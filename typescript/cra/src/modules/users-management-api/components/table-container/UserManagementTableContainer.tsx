import { formatDate } from '@components/table';
import {
  Avatar,
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import { memo, ReactNode, useMemo, useState } from 'react';
import { toAbsoluteUrl } from 'utils';

import { UsersManagementActionsCell } from '../../components';
import { useListView, useQueryResponseData } from '../../core';
import { EmptyTable } from '../empty-table/EmptyTable';
import { TableFooter } from '../table-footer/TableFooter';
import { EnhancedTableHeadWrapper } from '../table-head/EnhancedTableHeadWrapper';
import { TableLoader } from '../table-loader/TableLoader';

interface Props {
  children?: (id: string) => ReactNode;
}

const UserManagementTableContainerComponent = (props: Props) => {
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);
  const { selected, onSelect } = useListView();
  const [dense, setDense] = useState(true);

  const isSelected = (id: string) => {
    return selected.includes(id);
  };

  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
        >
          <EnhancedTableHeadWrapper />
          <TableBody
            sx={{
              position: 'relative'
            }}
          >
            {data.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  aria-checked={isSelected(row.id)}
                  tabIndex={-1}
                  key={row.id}
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
                        <Avatar
                          alt={row.first_name ?? 'user avatar'}
                          src={toAbsoluteUrl(row.avatar)}
                        />
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
                    {!props.children ? (
                      <UsersManagementActionsCell id={row.id} />
                    ) : (
                      props.children(row.id)
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
            <TableLoader dense={dense}></TableLoader>
            <EmptyTable></EmptyTable>
          </TableBody>
        </Table>
      </TableContainer>
      <TableFooter dense={dense} setDense={setDense}></TableFooter>
    </>
  );
};

const UserManagementTableContainer = memo(UserManagementTableContainerComponent);

export { UserManagementTableContainer };
