import { UpdateUserFormWrapper } from './UpdateUserFormWrapper';
import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';

function UpdateUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Typography>Update User Info Page</Typography>
      {id && (
        <UpdateUserFormWrapper
          userId={id}
          handleExit={() => {
            navigate('/users-management-api');
          }}></UpdateUserFormWrapper>
      )}
    </>
  );
}

export { UpdateUserPage };
