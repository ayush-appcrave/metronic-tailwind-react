import {ReactElement} from "react";
import {Demo1Layout} from "@/layouts/demo1";
import WorksPage from "@/pages/public-profile/works/WorksPage";

const AuthPage1 = () => {
  return <>Auth page 1 conent (login)</>;
};


AuthPage1.getLayout = (page: ReactElement) => <Demo1Layout>{page}</Demo1Layout>;

export default  AuthPage1 ;
