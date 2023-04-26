import { ViewUser } from '../components/view/ViewUser';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { Content, Intro, Toolbar } from '../../../layouts/default';
import { useNavBreadcrumbs } from '@components/nav';
import { NAV_VERTICAL } from '../../../config/navs.config';

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

      <Content>{id && <ViewUser userId={id}></ViewUser>}</Content>
    </>
  );
}

export { ViewUserPage };
