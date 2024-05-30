import { Card } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { useNavBreadcrumbs } from '@/components/nav';
import { PageContainer } from '@/components/page-container';
import { NAV_VERTICAL } from '@/config';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { ViewUser } from '../components';
function ViewUserPage() {
  const {
    id
  } = useParams();
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);
  return <>
      <Helmet>
        <title>View Test user {id}</title>
      </Helmet>

      <Toolbar>
        <Intro title="View Test User" breadcrumbs={breadcrumbs} />
      </Toolbar>

      <Content>
        <PageContainer>
          <Card sx={{
          padding: '20px'
        }}>
            {id && <ViewUser userId={id}></ViewUser>}
          </Card>
        </PageContainer>
      </Content>
    </>;
}
export { ViewUserPage };