import { ViewUser } from '../components/view/ViewUser';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';
import { PageContainer } from '@components/page-container';
import { Card } from '@mui/material';

function ViewUserPage() {
  const { id } = useParams();
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);

  return (
    <>
      <Helmet>
        <title>View user {id}</title>
      </Helmet>

      <Toolbar>
        <Intro title="View User" breadcrumbs={breadcrumbs} />
      </Toolbar>

      <Content>
        <PageContainer>
          <Card
            sx={{
              padding: '20px'
            }}>
            {id && <ViewUser userId={id}></ViewUser>}
          </Card>
        </PageContainer>
      </Content>
    </>
  );
}

export { ViewUserPage };
