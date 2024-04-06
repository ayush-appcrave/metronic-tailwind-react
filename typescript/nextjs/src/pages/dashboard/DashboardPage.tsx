import { Helmet } from 'react-helmet';

import { Container } from '@/components/container';
import {ReactElement} from "react";
import {Demo1Layout} from "@/layouts/demo1";
import UserProfilePage from "@/pages/account/home/user-profile/UserProfilePage";

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>

      <Container>Dashboard page</Container>
    </>
  );
};

DashboardPage.getLayout = (page: ReactElement) => <Demo1Layout>{page}</Demo1Layout>;

export default  DashboardPage ;
