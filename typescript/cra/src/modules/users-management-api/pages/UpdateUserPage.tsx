import { UpdateUserFormWrapper } from '../components/edit-user/UpdateUserFormWrapper';
import { Card } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';
import { PageContainer } from '@components/page-container';

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
        <PageContainer>
          <Card
            sx={{
              padding: '20px'
            }}
          >
            {id && (
              <UpdateUserFormWrapper
                userId={id}
                handleExit={() => {
                  navigate('/users-management/default');
                }}
              ></UpdateUserFormWrapper>
            )}
          </Card>
        </PageContainer>
      </Content>
    </>
  );
}

export { UpdateUserPage };
