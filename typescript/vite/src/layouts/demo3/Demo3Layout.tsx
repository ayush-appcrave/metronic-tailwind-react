import useBodyClasses from '@/hooks/useBodyClasses';
import { Demo3LayoutProvider, Main } from '.';
import { useEffect } from 'react';
import { useSettings } from '@/providers';

const Demo3Layout = () => {
  const { updateSettings } = useSettings();

  // Using the custom hook to set multiple CSS variables and class properties
  useBodyClasses(
    `[--tw-page-bg:var(--tw-light)] [--tw-page-bg-dark:var(--tw-coal-500)] [--tw-header-height-default:58px] [[data-sticky-header=on]&]:[--tw-header-height:60px] [--tw-header-height:--tw-header-height-default] bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark]`
  );

  useEffect(() => {
    updateSettings({
      container: 'fluid'
    });
  }, [updateSettings]);

  return (
    // Providing layout context and rendering the main content
    <Demo3LayoutProvider>
      <Main />
    </Demo3LayoutProvider>
  );
};

export { Demo3Layout };
