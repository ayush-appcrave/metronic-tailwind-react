import {
  alpha,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { type SxProps, type Theme } from '@mui/material/styles';
import React, { type ChangeEvent, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQueryRequest } from '../core/QueryRequestProvider';
import { useListView } from '../core/ListViewProvider';
import { useMutation, useQueryClient } from 'react-query';
import { deleteSelectedUsers, restoreMultipleUsers } from '../core/_requests';
import { QUERIES } from '../helpers';
import { UndoActions } from './UndoActions';
import { useQueryResponse } from '../core/QueryResponseProvider';
import { useSnackbar } from 'notistack';

interface EnhancedTableToolbarProps {
  sx?: SxProps<Theme>;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { updateState } = useQueryRequest();
  const [roleFilter, setRoleFilter] = useState<'user' | 'admin' | undefined>(undefined);
  const [nameFilter, setNameFilter] = useState<string>('');

  const { clearSelected, selected } = useListView();
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { query, refetch } = useQueryResponse();

  const deleteSelectedItems = useMutation(
    async () => {
      await deleteSelectedUsers(selected as string[]);
    },
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: () => {
        // ✅ update detail view directly
        queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
        enqueueSnackbar(`${selected.length} users was deleted.`, {
          action: (snackbarKey) => (
            <UndoActions
              ids={selected as string[]}
              snackbarKey={snackbarKey}
              undoAction={undoAction}></UndoActions>
          ),
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 7000
        });
        clearSelected();
      }
    }
  );

  const undoAction: (ids: string[]) => Promise<void> = async (ids: string[]) => {
    await restoreMultipleUsers(ids);
    refetch();
  };

  const handleRoleFilterChange: (event: SelectChangeEvent) => void = (e: SelectChangeEvent) => {
    if (e.target.value !== 'all') {
      setRoleFilter(e.target.value as 'user' | 'admin');
      updateState({ role: e.target.value as 'user' | 'admin', page: 1 }, true);
    } else {
      setRoleFilter(undefined);
      updateState({ role: undefined, page: 1 }, true);
    }
  };
  const handleNameFilterChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setNameFilter(e.target.value);
    updateState({ search: e.target.value, page: 1 }, true);
  };

  return (
    <Toolbar
      sx={{
        px: { xs: 1, sm: 2 },
        ...(selected.length &&
          selected.length && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
          }),
        ...props.sx
      }}>
      {selected.length ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {selected.length} selected
        </Typography>
      ) : (
        <FormControl
          size="small"
          sx={{
            width: '50%'
          }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={roleFilter ?? 'all'}
            sx={{
              margin: '10px'
            }}
            defaultValue={'all'}
            onChange={handleRoleFilterChange}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>
      )}
      {!selected.length ? (
        <TextField
          size="small"
          onChange={handleNameFilterChange}
          value={nameFilter}
          sx={{
            margin: '10px',
            width: '50%'
          }}
          id="search"
          label="Search name"
          variant="outlined"
        />
      ) : (
        <Tooltip title="Delete">
          <IconButton
            onClick={() => {
              deleteSelectedItems.mutateAsync();
            }}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

export { EnhancedTableToolbar };
