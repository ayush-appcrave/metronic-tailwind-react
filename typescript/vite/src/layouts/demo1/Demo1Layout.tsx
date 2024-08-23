import useBodyClasses from '@/hooks/useBodyClasses';
import { Demo1LayoutProvider, Main } from './';

const Demo1Layout = () => {
  useBodyClasses('bg-[#fefefe] dark:bg-coal-500');
  
  return (
    <Demo1LayoutProvider>
      <Main />
    </Demo1LayoutProvider>
  );
};

export { Demo1Layout };
