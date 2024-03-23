import { Button, Card } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavBreadcrumbs } from '@/components/nav';
import { PageContainer } from '@/components/page-container';
import { NAV_VERTICAL } from '@/config';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { CreateUserDrawer, EnhancedTableToolbar, UserManagementTableContainer } from '../components';
function UsersManagementDrawersPage() {
  const [openCreateUserDrawerState, setOpenCreateUserDrawerState] = useState(false);
  const breadcrumbs = useNavBreadcrumbs(NAV_VERTICAL);
  return <>
      <Helmet>
        <title>Users Management Drawers Page</title>
      </Helmet>

      <Toolbar>
        <Intro title={`Users Management Drawers Page`} breadcrumbs={breadcrumbs} />
        <Button onClick={e => {
        setOpenCreateUserDrawerState(true);
      }}>
          Add new user
        </Button>
      </Toolbar>

      <Content>
        <PageContainer>
          <Card sx={{
          mb: 2,
          paddingTop: '5px'
        }}>
            <EnhancedTableToolbar />
            <UserManagementTableContainer></UserManagementTableContainer>
          </Card>
        </PageContainer>
        <CreateUserDrawer open={openCreateUserDrawerState} handleClose={() => {
        setOpenCreateUserDrawerState(false);
      }}></CreateUserDrawer>
      </Content>
    </>;
}
export { UsersManagementDrawersPage };