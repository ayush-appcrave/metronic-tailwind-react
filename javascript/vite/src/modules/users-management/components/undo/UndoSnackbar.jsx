import { Close } from '@mui/icons-material';
import { Button, IconButton, Snackbar } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { restoreUser, useQueryResponse } from '../../core';
const UndoSnackbar = props => {
  const {
    enqueueSnackbar
  } = useSnackbar();
  const {
    refetch
  } = useQueryResponse();
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const undoDelete = async () => {
    await restoreUser(props.userId);
    enqueueSnackbar('User was successfully restored.', {
      variant: 'success'
    });
    setOpen(false);
    props.onClose();
    refetch();
  };
  const action = <>
      <Button color="secondary" size="small" onClick={() => {
      undoDelete();
    }}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
    </>;
  return <Snackbar open={open} autoHideDuration={2000} message="User deleted" action={action} />;
};
export { UndoSnackbar };