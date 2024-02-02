import clsx from 'clsx';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useIsMounted from '@/hooks/useIsMounted';

import { useDemo1Layout } from '../Demo1LayoutProvider';
import { Footer } from '../footer';
import { Header } from '../header';
import { Sidebar } from '../sidebar';

const Main = () => {
  const { layout } = useDemo1Layout();

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
    <div className="flex grow">
      <Sidebar />

      <div className="wrapper flex grow flex-col">
        <Header />

        <div className="grow content" role="content">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export { Main };
