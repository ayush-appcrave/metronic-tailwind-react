import { Demo1LayoutProvider } from './Demo1LayoutProvider';
import { Main } from './main';

const Demo1Layout = () => {
  return (
    <Demo1LayoutProvider>
      <Main />
    </Demo1LayoutProvider>
  );
};

export { Demo1Layout };
