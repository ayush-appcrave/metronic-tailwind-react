import useBodyClasses from '@/hooks/useBodyClasses';
import { Demo2LayoutProvider, Main } from './';

const Demo2Layout = () => {
  useBodyClasses(
    '[--tw-page-bg:#fefefe] [--tw-page-bg-dark:var(--tw-coal-500)] bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark]'
  );

  return (
    <Demo2LayoutProvider>
      <Main />
    </Demo2LayoutProvider>
  );
};

export { Demo2Layout };
