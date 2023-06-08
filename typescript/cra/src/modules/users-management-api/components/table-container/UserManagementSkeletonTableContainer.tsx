import { formatDate, QueryState, TableNoData } from '@components/table';
import { TableSkeletonLoader } from '@components/table/loading/TableSkeletonLoader';
import { type Order } from '@components/table/types';
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
import qs from 'qs';
import React, { type ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toAbsoluteUrl } from 'utils';

import {
  useListView,
  useQueryRequest,
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseLoading,
  useQueryResponsePagination,
  type User
} from '../../core';
import { initialQueryRequest } from '../../helpers';
import { EnhancedTableHead } from '../table-head';

interface Props {
  denseKey: string;
  children: (id: string) => React.ReactNode;
}

const UserManagementSkeletonTableContainer = (props: Props) => {
  const { updateState } = useQueryRequest();
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);
  const { refetch } = useQueryResponse();

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
      updateState(qs.parse(searchParams.toString()) as Partial<QueryState>);
      const sortParam = qs.parse(searchParams.toString()).sort;
      const orderParam = qs.parse(searchParams.toString()).order;

      if (sortParam && orderParam) {
        setOrderBy(sortParam as keyof User);
        setOrder(orderParam as Order);
      }
    } else {
      refetch();
    }

    return () => {
      updateState(initialQueryRequest.state);
    };
  }, []);

  const isSelected = (id: string) => {
    return selected.includes(id);
  };

  const handleRequestSort = (property: keyof User | null) => {
    if (property) {
      setOrderBy(property);
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      updateState({ sort: property, order: isAsc ? 'desc' : 'asc' }, true);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    updateState({ page: newPage + 1 }, true);
  };
  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    updateState({ items_per_page: event.target.value as unknown as 5 | 10 | 25 }, true);
  };
  const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem(`DENSE_DEFAULT_${props.denseKey}_TABLE`, event.target.checked.toString());
    setDense(event.target.checked);
  };

  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
        >
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
            }}
          >
            {isLoading ? (
              <TableSkeletonLoader
                itemsPerPage={pagination.items_per_page ? pagination.items_per_page : 10}
              ></TableSkeletonLoader>
            ) : (
              data.map((row, index) => {
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
                    <TableCell width={'5%'} padding="checkbox">
                      <Checkbox
                        color="primary"
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
                      {props.children(row.id)}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
            {!pagination.total && !isLoading && <TableNoData colSpan={8}></TableNoData>}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ position: 'relative' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={pagination.total ? pagination.total : 0}
          rowsPerPage={Number(pagination.items_per_page)}
          page={pagination.current_page ? pagination.current_page - 1 : 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <FormControlLabel
          sx={{
            display: 'inline-flex',
            position: 'absolute',
            marginTop: '9px',
            marginLeft: '0',
            top: 0
          }}
          label="Dense"
          control={<Switch checked={dense} onChange={handleChangeDense} />}
        />
      </Box>
    </>
  );
};

export { UserManagementSkeletonTableContainer };
