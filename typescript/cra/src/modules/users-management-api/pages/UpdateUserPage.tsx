import { UpdateUserFormWrapper } from '../components/edit-user/UpdateUserFormWrapper';
import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';

function UpdateUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  return (
    <>
      <Helmet>
        <title>Update user {id}</title>
      </Helmet>

      <Toolbar>
        <Intro title="Update User" breadcrumbs={breadcrumbs} />
      </Toolbar>

      <Content>
        <Typography>Update User Info Page</Typography>
        {id && (
          <UpdateUserFormWrapper
            userId={id}
            handleExit={() => {
              navigate('/users-management/default');
            }}></UpdateUserFormWrapper>
        )}
      </Content>
    </>
  );
}

export { UpdateUserPage };
