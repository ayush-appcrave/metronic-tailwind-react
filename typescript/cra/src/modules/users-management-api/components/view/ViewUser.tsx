import { useSnackbar } from 'notistack';
import { useQueryResponse } from '../../core/QueryResponseProvider';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { User } from '../../core/_models';
import { deleteUser, getUserById } from '../../core/_requests';
import { QUERIES } from '../../helpers';
import { Avatar, Box, Button, Typography, Skeleton } from '@mui/material';
import { toAbsoluteUrl } from 'utils';

type Props = {
  userId: string;
};

function ViewUser(props: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const { query } = useQueryResponse();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    role: 'user',
    two_steps_auth: false
  });

  const deleteItem = useMutation(() => deleteUser(props.userId as string), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
      enqueueSnackbar('User Successfully Deleted', { variant: 'success' });
      navigate(`/users-management-api`);
    }
  });

  const navigateUserEditPage = () => {
    navigate(`/edit/user/${props.userId}`);
  };

  useEffect(() => {
    if (props.userId) {
      setLoading(true);
      getUserById(props.userId).then((user) => {
        setCurrentUser(user as User);
        setLoading(false);
      });
    }
  }, []);
  return (
    <>
      {!loading ? (
        <Box>
          <Typography>User</Typography>

          <Typography>{currentUser.id}</Typography>
          <Avatar alt={currentUser.first_name} src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />
          <Typography>
            {currentUser.first_name} {currentUser.last_name}
          </Typography>
          <Typography>{currentUser.role}</Typography>
          <Typography>{currentUser.created_at}</Typography>
          <Typography>{currentUser.email}</Typography>

          <Button variant="outlined" color="info" onClick={navigateUserEditPage}>
            Edit User
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={async () => await deleteItem.mutateAsync()}
          >
            Delete
          </Button>
        </Box>
      ) : (
        <Box>
          <Skeleton variant="text" width={'30%'} sx={{ fontSize: '1rem' }} />

          <Skeleton variant="text" width={'5%'} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={'50%'} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={'15%'} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={'60%'} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={'55%'} sx={{ fontSize: '1rem' }} />

          <Button variant="outlined" color="info" onClick={navigateUserEditPage}>
            Edit User
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={async () => await deleteItem.mutateAsync()}
          >
            Delete
          </Button>
        </Box>
      )}
    </>
  );
}

export { ViewUser };
