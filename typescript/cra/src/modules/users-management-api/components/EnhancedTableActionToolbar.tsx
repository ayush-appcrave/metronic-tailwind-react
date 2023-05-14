import { IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { type SxProps, type Theme } from '@mui/material/styles';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
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

function EnhancedTableActionToolbar(props: EnhancedTableToolbarProps) {
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
              undoAction={undoAction}
            ></UndoActions>
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

  return (
    <Toolbar
      sx={{
        px: { xs: 1, sm: 2 },
        ...props.sx
      }}
    >
      <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
        {selected.length} selected
      </Typography>
      <Tooltip title="Delete">
        <IconButton
          onClick={() => {
            deleteSelectedItems.mutateAsync();
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

export { EnhancedTableActionToolbar };
