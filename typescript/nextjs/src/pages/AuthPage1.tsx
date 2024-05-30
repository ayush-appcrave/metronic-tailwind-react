import {Demo1Layout} from "@/layouts/demo1";

const AuthPage1 = () => {
  return <>Auth page 1 conent (login)</>;
};

AuthPage1.getLayout = (page: React.ReactElement) => <Demo1Layout>{page}</Demo1Layout>;

export default  AuthPage1 ;
