import { formatDate } from '@/components/table';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  MenuItem,
  Select,
  TableCell,
  TableRow,
  TextField
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';

import { toAbsoluteUrl } from '../../../../utils/Assets';
import { updateUser, useListView, useQueryResponse, User } from '../../core';

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

export { UserManagementInlineEditingTableRow };
