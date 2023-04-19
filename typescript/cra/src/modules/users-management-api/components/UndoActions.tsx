import { Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import React, { SyntheticEvent } from 'react';
import { SnackbarKey, useSnackbar } from 'notistack';

interface Props {
  ids: string[];
  snackbarKey: SnackbarKey;
  undoAction: (ids: string[]) => Promise<void>;
}

const UndoActions = ({ snackbarKey, ids, undoAction }: Props) => {
  const { closeSnackbar } = useSnackbar();

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    closeSnackbar(snackbarKey);
  };

  return (
    <>
      <Button
        color="secondary"
        size="small"
        onClick={() => {
          handleClose();
          undoAction(ids);
        }}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
    </>
  );
};

export { UndoActions };
