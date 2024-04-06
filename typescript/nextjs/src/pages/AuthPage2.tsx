import {ReactElement} from "react";
import {Demo1Layout} from "@/layouts/demo1";
import AuthPage1 from "@/pages/AuthPage1";

const AuthPage2 = () => {
  return <>Auth page 2 content (registration)</>;
};

AuthPage2.getLayout = (page: ReactElement) => <Demo1Layout>{page}</Demo1Layout>;

export default  AuthPage2 ;
