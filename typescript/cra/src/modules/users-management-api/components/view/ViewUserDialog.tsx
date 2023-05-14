import { type ReactElement } from 'react';
import { Box, Button, Dialog, Typography } from '@mui/material';
import { ViewUser } from './ViewUser';
import { Close } from '@mui/icons-material';

interface CreateUserDialogProps {
  userId: string;
  open: boolean;
  handleClose: () => void;
}

function ViewUserDialog(props: CreateUserDialogProps): ReactElement {
  return (
    <Dialog
      fullWidth
      maxWidth={'lg'}
      open={props.open}
      onClose={props.handleClose}
      sx={{
        padding: '70px',
        maxHeight: 'auto'
      }}
    >
      <Button
        onClick={() => {
          props.handleClose();
        }}
        sx={{
          position: 'absolute',
          right: 5,
          top: 5
        }}
      >
        <Close></Close>
      </Button>
      <Box sx={{ marginTop: '40px' }}>
        <Typography>View User Dialog</Typography>
        <ViewUser userId={props.userId}></ViewUser>
      </Box>
    </Dialog>
  );
}

export { ViewUserDialog };
