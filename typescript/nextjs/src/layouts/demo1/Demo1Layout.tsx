import { Demo1LayoutProvider, Main } from './';
import {PropsWithChildren} from "react";

const Demo1Layout = ({ children }: PropsWithChildren) => {
  return (
    <Demo1LayoutProvider>
        <Main>{children}</Main>
    </Demo1LayoutProvider>
  );
};

export { Demo1Layout };
