import { Card } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router';
import { useNavBreadcrumbs } from '@/components/nav';
import { PageContainer } from '@/components/page-container';
import { NAV_VERTICAL } from '@/config';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { UpdateUserFormWrapper } from '../components';
function UpdateUserPage() {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);
  return <>
      <Helmet>
        <title>Update user {id}</title>
      </Helmet>

      <Toolbar>
        <Intro title="Update User" breadcrumbs={breadcrumbs} />
      </Toolbar>

      <Content>
        <PageContainer>
          <Card sx={{
          padding: '20px'
        }}>
            {id && <UpdateUserFormWrapper userId={id} handleExit={() => {
            navigate('/users-management/default');
          }}></UpdateUserFormWrapper>}
          </Card>
        </PageContainer>
      </Content>
    </>;
}
export { UpdateUserPage };