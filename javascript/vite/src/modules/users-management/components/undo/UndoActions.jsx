import { Close } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
const UndoActions = ({
  snackbarKey,
  ids,
  undoAction
}) => {
  const {
    closeSnackbar
  } = useSnackbar();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    closeSnackbar(snackbarKey);
  };
  return <>
      <Button color="secondary" size="small" onClick={() => {
      handleClose();
      undoAction(ids);
    }}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
    </>;
};
export { UndoActions };