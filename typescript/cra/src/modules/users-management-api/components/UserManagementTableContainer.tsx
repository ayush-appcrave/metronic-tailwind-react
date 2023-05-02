import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow
} from '@mui/material';
import { EnhancedTableHead } from './EnhancedTableHead';
import { toAbsoluteUrl } from 'utils';
import { headCells } from '../core/headCellConfiguration';
import React, { type ChangeEvent, useEffect, useMemo, useState } from 'react';
import { type User } from '../core/_models';
import { useListView } from '../core/ListViewProvider';
import { type Order } from '../@types/sort';
import {
  useQueryResponseData,
  useQueryResponseLoading,
  useQueryResponsePagination
} from '../core/QueryResponseProvider';
import { useQueryRequest } from '../core/QueryRequestProvider';
import { useSearchParams } from 'react-router-dom';
import qs from 'query-string';
import { initialQueryRequest } from '../helpers';
import { TableSkeleton } from './loading/TableSkeleton';
import { TableLoader } from './loading/TableLoader';

interface Props {
  denseKey: string;
  children: (id: string) => React.ReactNode;
}

const UserManagementTableContainer = (props: Props) => {
  const { updateState } = useQueryRequest();
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);

  const isLoading = useQueryResponseLoading();

  const pagination = useQueryResponsePagination();
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof User>('created_at');
  const [dense, setDense] = useState(
    localStorage.getItem(`DENSE_DEFAULT_${props.denseKey}_TABLE`) === 'true'
  );
  const { onSelectAll, selected, onSelect } = useListView();

  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.toString()) {
      console.log('query set', qs.parse(searchParams.toString()));
      updateState(qs.parse(searchParams.toString()));
      const sortParam = qs.parse(searchParams.toString()).sort;
      const orderParam = qs.parse(searchParams.toString()).order;

      if (sortParam && orderParam) {
        setOrderBy(sortParam as keyof User);
        setOrder(orderParam as Order);
      }
    }

    return () => {
      updateState(initialQueryRequest.state);
    };
  }, []);

  const isSelected = (id: string) => {
    return selected.includes(id);
  };

  const handleRequestSort = (event: React.FormEvent<unknown>, property: keyof User | null) => {
    if (property) {
      setOrderBy(property);
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      updateState({ sort: property, order: isAsc ? 'desc' : 'asc' }, true);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log('handle change');
    updateState({ page: newPage + 1 }, true);
  };
  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    updateState({ items_per_page: event.target.value as unknown as 5 | 10 | 25 }, true);
  };
  const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem(`DENSE_DEFAULT_${props.denseKey}_TABLE`, event.target.checked.toString());
    setDense(event.target.checked);
  };

  const formatDate = (date?: string) => {
    if (date) {
      const localDateTime = new Date(date);
      return `${localDateTime.getUTCDate()}/${localDateTime.getUTCMonth()}/${localDateTime.getFullYear()} at ${localDateTime.getHours()}:${localDateTime.getMinutes()}`;
    }
  };

  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}>
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={onSelectAll}
            onRequestSort={handleRequestSort}
            rowCount={pagination.total ? pagination.total : 0}
          />
          <TableBody
            sx={{
              position: 'relative'
            }}>
            {data.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  aria-checked={isSelected(row.id)}
                  tabIndex={-1}
                  key={row.id}
                  selected={isSelected(row.id)}>
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
                      }}>
                      {row.avatar && (
                        <Avatar alt={row.first_name} src={toAbsoluteUrl(row.avatar)} />
                      )}

                      <Box
                        sx={{
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
                    {props.children(row.id)}
                  </TableCell>
                </TableRow>
              );
            })}
            {isLoading &&
              (data.length ? (
                <TableLoader
                  itemsPerPage={pagination.items_per_page ? pagination.items_per_page : 10}
                  rowHeight={dense ? 49 : 69}></TableLoader>
              ) : (
                <TableSkeleton
                  itemsPerPage={
                    pagination.items_per_page ? pagination.items_per_page : 10
                  }></TableSkeleton>
              ))}
            {!pagination.total && !isLoading && (
              <TableRow>
                <TableCell colSpan={headCells.length}>No data found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: {
            sm: 1,
            lg: 2
          },
          px: {
            sm: 1,
            lg: 3
          }
        }}>
        <FormControlLabel
          label="Dense"
          control={<Switch checked={dense} onChange={handleChangeDense} />}
        />
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={pagination.total ? pagination.total : 0}
          rowsPerPage={Number(pagination.items_per_page)}
          page={pagination.current_page ? pagination.current_page - 1 : 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
};

export { UserManagementTableContainer };
