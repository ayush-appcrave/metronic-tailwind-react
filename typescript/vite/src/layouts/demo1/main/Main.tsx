import clsx from 'clsx';
import { useEffect } from 'react';

import useIsMounted from '@/hooks/useIsMounted';

import { useDemo1Layout } from '../Demo1LayoutProvider';
import { Footer } from '../footer';
import { Header } from '../header';
import { Sidebar } from '../sidebar';
import { Wrapper } from '../wrapper';

const Main = () => {
  const { layout } = useDemo1Layout();
  const isMounted = useIsMounted();

  useEffect(() => {
    const bodyClass = document.body.classList;

    // Add a class to the body element
    bodyClass.add('demo1');

    if (layout.options.sidebar.fixed) bodyClass.add('sidebar-fixed');
    if (layout.options.sidebar.collapse) bodyClass.add('sidebar-collapse');
    if (layout.options.header.fixed) bodyClass.add('header-fixed');

    // Remove the class when the component is unmounted
    return () => {
      bodyClass.remove('demo1');
      bodyClass.remove('sidebar-fixed');
      bodyClass.remove('sidebar-collapse');
      bodyClass.remove('header-fixed');
    };
  }, [layout]);

  return (
    <div className={clsx('flex grow', !isMounted() && 'transition-none')}>
      <Sidebar />

      <div className="wrapper flex grow flex-col">
        <Header />

        <div className="grow content" role="content">
          <Wrapper />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export { Main };
