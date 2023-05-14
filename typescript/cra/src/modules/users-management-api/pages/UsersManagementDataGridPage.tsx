import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { PageContainer } from '@components/page-container';
import { UsersManagementGridContainer } from '../components/UsersManagementGridContainer';
import { Card } from '@mui/material';

function UsersManagementDataGridPage() {
  return (
    <>
      <Helmet>
        <title>Users Management Data Grid Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Data Grid Page`} />
      </Toolbar>

      <Content>
        <PageContainer>
          <Card
            sx={{
              mb: 2,
              paddingTop: '5px'
            }}
          >
            <UsersManagementGridContainer></UsersManagementGridContainer>
          </Card>
        </PageContainer>
      </Content>
    </>
  );
}

export { UsersManagementDataGridPage };
