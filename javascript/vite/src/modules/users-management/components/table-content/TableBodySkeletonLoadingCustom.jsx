import { Avatar, Box, Checkbox, TableBody, TableCell, TableRow } from '@mui/material';
import { useMemo } from 'react';
import { formatDate, TableSkeletonLoader } from '@/components/table';
import { toAbsoluteUrl } from '../../../../utils/Assets';
import { useListView, useQueryResponseData, useQueryResponseLoading, useQueryResponsePagination } from '../../core';
import { UsersManagementActionsCell } from '../cells';
import { EmptyTable } from '../empty-table/EmptyTable';
function TableBodySkeletonLoadingCustom(props) {
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);
  const {
    selected,
    onSelect
  } = useListView();
  const isSelected = id => {
    return selected.includes(id);
  };
  const pagination = useQueryResponsePagination();
  const isLoading = useQueryResponseLoading();
  return <TableBody sx={{
    position: 'relative'
  }}>
      {isLoading ? <TableSkeletonLoader itemsPerPage={pagination.items_per_page ? pagination.items_per_page : 10}></TableSkeletonLoader> : data.map((row, index) => {
      const labelId = `enhanced-table-checkbox-${index}`;
      return <TableRow hover role="checkbox" aria-checked={isSelected(row.id)} tabIndex={-1} key={row.id} selected={isSelected(row.id)}>
              <TableCell width={'5%'} padding="checkbox">
                <Checkbox color="primary" onInput={event => {
            onSelect(row.id);
          }} checked={isSelected(row.id)} inputProps={{
            'aria-labelledby': labelId
          }} />
              </TableCell>
              <TableCell width={'20%'} component="th" id={labelId} scope="row" padding="none">
                <Box sx={{
            display: 'flex'
          }}>
                  {row.avatar && <Avatar alt={row.first_name ?? 'user avatar'} src={toAbsoluteUrl(row.avatar)} />}

                  <Box sx={{
              verticalAlign: 'middle',
              marginTop: 'auto',
              marginBottom: 'auto',
              marginLeft: '5px'
            }}>
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
                <UsersManagementActionsCell id={row.id} />
              </TableCell>
            </TableRow>;
    })}
      <EmptyTable />
    </TableBody>;
}
export { TableBodySkeletonLoadingCustom };