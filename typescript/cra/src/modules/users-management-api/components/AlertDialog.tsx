import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { deleteUser } from '../core/_requests';
import { QUERIES } from '../helpers';
import { useQueryResponse } from '../core/QueryResponseProvider';

interface AlertDialogProps {
  open: boolean;
  handleClose: (reason: string) => void;
  handleAgreeClose: (reason: string) => void;
  userId: string;
}

function AlertDialog(props: AlertDialogProps) {
  const { query } = useQueryResponse();
  const queryClient = useQueryClient();

  const deleteItem = useMutation(
    async () => {
      await deleteUser(props.userId);
    },
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: () => {
        props.handleAgreeClose('deleted');
        // ✅ update detail view directly
        queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
      }
    }
  );

  const deleteEvent = () => {
    deleteItem.mutateAsync();
  };

  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {`Are you sure you want to delete user with ID ${props.userId}?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={(e) => {
            props.handleClose('dissagree');
          }}>
          Disagree
        </Button>
        <Button onClick={deleteEvent} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export { AlertDialog };
