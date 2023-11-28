import { Avatar, Box, Button, Skeleton, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';

import { toAbsoluteUrl } from '@/utils';

import { deleteUser, getUserById, useQueryResponse } from '../../core';
import { type User } from '../../core';
import { QUERIES } from '../../helpers';

interface Props {
  userId: string;
}

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

  const deleteItem = useMutation(
    async () => {
      await deleteUser(props.userId);
    },
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: () => {
        // ✅ update detail view directly
        queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
        enqueueSnackbar('User Successfully Deleted', { variant: 'success' });
        navigate(`/users-management/default`);
      }
    }
  );

  const deleteEvent = () => {
    deleteItem.mutateAsync();
  };

  const navigateUserEditPage = () => {
    navigate(`/users-management/edit/user/${props.userId}`);
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
          {currentUser.avatar && (
            <Avatar alt={currentUser.first_name} src={toAbsoluteUrl(currentUser.avatar)} />
          )}
          <Typography>
            {currentUser.first_name} {currentUser.last_name}
          </Typography>
          <Typography>{currentUser.role}</Typography>
          <Typography>{currentUser.created_at}</Typography>
          <Typography>{currentUser.email}</Typography>
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
        </Box>
      )}
      <Button variant="outlined" color="info" onClick={navigateUserEditPage}>
        Edit User
      </Button>
      <Button variant="outlined" color="error" onClick={deleteEvent}>
        Delete
      </Button>
    </>
  );
}

export { ViewUser };
