import {
  Avatar,
  Box,
  Collapse,
  FormControlLabel,
  IconButton,
  LinearProgress,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { EnhancedSubCRUDTableHead } from './EnhancedSubCRUDTableHead';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { StaticDataTableCRUD } from './static-table/StaticDataTableCRUD';
import { useSearchParams } from 'react-router-dom';
import qs from 'query-string';
import { initialQueryRequest } from '../helpers';
import { TableOverlay } from './loading/TableOverlay';
import zIndex from '@mui/material/styles/zIndex';

interface Props {
  children: (id: string) => React.ReactNode;
}

interface RowProps {
  row: User;
  children: (id: string) => React.ReactNode;
}

const UserManagementSubCRUDTableRow = (props: RowProps) => {
  const [subCRUDVisibilityState, setSubCRUDVisibilityState] = useState(false);

  const formatDate = (date?: string) => {
    if (date) {
      const localDateTime = new Date(date);
      return `${localDateTime.getUTCDate()}/${localDateTime.getUTCMonth()}/${localDateTime.getFullYear()} at ${localDateTime.getHours()}:${localDateTime.getMinutes()}`;
    }
  };

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} key={props.row.id}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setSubCRUDVisibilityState(!subCRUDVisibilityState);
            }}>
            {subCRUDVisibilityState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" padding="none">
          <Box
            sx={{
              display: 'flex'
            }}>
            {props.row.avatar && (
              <Avatar alt={props.row.first_name} src={toAbsoluteUrl(props.row.avatar)} />
            )}

            <Box
              sx={{
                verticalAlign: 'middle',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: '5px'
              }}>
              {props.row.first_name}
            </Box>
          </Box>
        </TableCell>
        <TableCell align="left">{props.row.last_name}</TableCell>
        <TableCell align="left">{props.row.role}</TableCell>
        <TableCell align="left">{props.row.status}</TableCell>
        <TableCell align="left">{props.row.two_steps_auth ? 'enabled' : 'disabled'}</TableCell>
        <TableCell align="left">{formatDate(props.row.created_at)}</TableCell>
        <TableCell align="left">{props.children(props.row.id)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={subCRUDVisibilityState} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <StaticDataTableCRUD></StaticDataTableCRUD>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const UserManagementSubCRUDTableContainer = (props: Props) => {
  const { updateState } = useQueryRequest();
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);

  const isLoading = useQueryResponseLoading();
  const pagination = useQueryResponsePagination();
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof User>('created_at');
  const [dense, setDense] = useState(localStorage.getItem('DENSE_INLINE_SUB_CRUD') === 'true');
  const { onSelectAll, selected } = useListView();

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

  const handleRequestSort = (event: React.FormEvent<unknown>, property: keyof User | null) => {
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
    localStorage.setItem('DENSE_INLINE_SUB_CRUD', event.target.checked.toString());
    setDense(event.target.checked);
  };

  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: 750, position: 'relative' }}
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}>
          <EnhancedSubCRUDTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={onSelectAll}
            onRequestSort={handleRequestSort}
            rowCount={pagination.total ? pagination.total : 0}
          />
          {isLoading && (
            <Box
              sx={{
                position: 'absolute',
                zIndex: zIndex.modal + 1,
                top: 0,
                left: 0,
                right: 0
              }}>
              <LinearProgress color="primary" />
            </Box>
          )}
          <TableBody
            sx={{
              position: 'relative'
            }}>
            {data.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${row.id}`;

              return (
                <UserManagementSubCRUDTableRow key={labelId} row={row}>
                  {props.children}
                </UserManagementSubCRUDTableRow>
              );
            })}
            {isLoading && (
              <TableOverlay
                itemsPerPage={pagination.items_per_page ? pagination.items_per_page : 10}
                rowHeight={dense ? 49 : 69}></TableOverlay>
            )}
            {!pagination.total && !isLoading && (
              <TableRow>
                <TableCell colSpan={headCells.length}>No data found</TableCell>
              </TableRow>
            )}
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

export { UserManagementSubCRUDTableContainer };
