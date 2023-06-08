import { ProgressBarLoader } from '@components/loaders';
import { formatDate, QueryState, TableNoData } from '@components/table';
import { TableOverlayLoader } from '@components/table/loading/TableOverlayLoader';
import { TableSkeletonLoader } from '@components/table/loading/TableSkeletonLoader';
import { Order } from '@components/table/types';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField
} from '@mui/material';
import { useSnackbar } from 'notistack';
import qs from 'qs';
import React, { type ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toAbsoluteUrl } from 'utils';

import {
  updateUser,
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

interface RowProps {
  row: User;
  labelId: string;
}

const UserManagementInlineEditingTableRow = (props: RowProps) => {
  const [editState, setEditState] = useState(false);
  const { refetch } = useQueryResponse();
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState<Partial<User>>({
    role: undefined
  });

  const saveChanges = async () => {
    try {
      await updateUser(formData);
      refetch();
      enqueueSnackbar('User general info was successfully updated.', { variant: 'success' });
      setEditState(false);
    } catch (err) {
      enqueueSnackbar('Ups! Something went wrong!', { variant: 'error' });
    }
  };

  useEffect(() => {
    setFormData((prevState: Partial<User>) => {
      return { ...prevState, ...props.row };
    });

    return () => {
      refetch();
    };
  }, []);

  const { selected, onSelect } = useListView();

  const isSelected = (id: string) => {
    return selected.includes(id);
  };

  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={isSelected(props.row.id)}
      tabIndex={-1}
      key={props.labelId}
      selected={isSelected(props.row.id)}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          onInput={() => {
            onSelect(props.row.id);
          }}
          checked={isSelected(props.row.id)}
          inputProps={{
            'aria-labelledby': props.labelId
          }}
        />
      </TableCell>
      <TableCell component="th" id={props.labelId} scope="row" padding="none">
        <Box
          sx={{
            display: 'flex'
          }}
        >
          {props.row.avatar && (
            <Avatar alt={props.row.first_name as string} src={toAbsoluteUrl(props.row.avatar)} />
          )}

          {editState ? (
            <TextField
              value={formData.first_name}
              onChange={(e) => {
                setFormData({ ...formData, ...{ first_name: e.target.value } });
              }}
              id="outlined-basic"
              label="First name"
              variant="outlined"
              size={'small'}
            />
          ) : (
            <Box
              sx={{
                verticalAlign: 'middle',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: '5px'
              }}
            >
              {props.row.first_name}
            </Box>
          )}
        </Box>
      </TableCell>
      <TableCell align="left">
        {' '}
        {editState ? (
          <TextField
            value={formData.last_name}
            onChange={(e) => {
              setFormData({ ...formData, ...{ last_name: e.target.value } });
            }}
            id="outlined-basic"
            label="Last Name name"
            variant="outlined"
            size={'small'}
          />
        ) : (
          props.row.last_name
        )}
      </TableCell>
      <TableCell align="left">
        {editState ? (
          <>
            <Select
              labelId="kt-role-select-label"
              id="kt-role-select"
              name="role"
              value={props.row.role}
              onChange={(event) => {
                setFormData((prevObject) => ({
                  ...prevObject,
                  role: event.target.value as 'admin' | 'user' | undefined
                }));
              }}
              size={'small'}
            >
              <MenuItem value={undefined}></MenuItem>
              <MenuItem value={'user'}>User</MenuItem>
              <MenuItem value={'admin'}>Admin</MenuItem>
            </Select>
          </>
        ) : (
          props.row.role
        )}
      </TableCell>
      <TableCell align="left">
        {editState ? (
          <Select
            labelId="kt-status-select-label"
            id="kt-status-select"
            name="status"
            value={''}
            onChange={(event) => {
              setFormData((prevObject) => ({
                ...prevObject,
                status: event.target.value
              }));
            }}
            size={'small'}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="deactivated">Deactivated</MenuItem>
          </Select>
        ) : (
          formData.status
        )}
      </TableCell>
      <TableCell width={'10%'} align="left">
        {props.row.two_steps_auth ? 'enabled' : 'disabled'}
      </TableCell>
      <TableCell width={'20%'} align="left">
        {formatDate(props.row.created_at)}
      </TableCell>
      <TableCell align="left">
        {editState && (
          <Button
            onClick={() => {
              saveChanges();
            }}
          >
            Save
          </Button>
        )}
        {!editState && (
          <Box
            sx={{
              display: 'flex'
            }}
          >
            <Button
              onClick={(e) => {
                setEditState(true);
              }}
            >
              Update
            </Button>
            <Button
              onClick={(e) => {
                console.log(props.row.id);
              }}
            >
              Delete
            </Button>
          </Box>
        )}
      </TableCell>
    </TableRow>
  );
};

const UserManagementInlineEditingTableContainer = () => {
  const { updateState } = useQueryRequest();
  const users = useQueryResponseData();
  const data = useMemo(() => users, [users]);

  const isLoading = useQueryResponseLoading();

  const pagination = useQueryResponsePagination();
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof User>('created_at');
  const [dense, setDense] = useState(localStorage.getItem('DENSE_INLINE_EDITING_TABLE') === 'true');
  const { onSelectAll, selected } = useListView();

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
    }

    return () => {
      updateState(initialQueryRequest.state);
    };
  }, []);

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
    localStorage.setItem('DENSE_INLINE_EDITING_TABLE', event.target.checked.toString());
    setDense(event.target.checked);
  };

  return (
    <>
      {isLoading && <ProgressBarLoader></ProgressBarLoader>}
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
            {isLoading &&
              (data.length ? (
                <TableOverlayLoader
                  colSpan={8}
                  type="circle"
                  itemsPerPage={pagination.items_per_page ? pagination.items_per_page : 10}
                  rowHeight={dense ? 49 : 69}
                ></TableOverlayLoader>
              ) : (
                <TableSkeletonLoader
                  itemsPerPage={pagination.items_per_page ? pagination.items_per_page : 10}
                ></TableSkeletonLoader>
              ))}
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

export { UserManagementInlineEditingTableContainer };
