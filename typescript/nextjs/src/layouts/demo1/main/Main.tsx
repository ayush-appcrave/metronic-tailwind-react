import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';

import { useMenuCurrentItem } from '@/components/menu';
import { MENU_SIDEBAR } from '@/config/menu.config';

import { Content, Footer, Header, Sidebar, useDemo1Layout } from '../';

const Main = () => {
  const { layout } = useDemo1Layout();
  const pathname = useRouter().asPath;
  const menuItem = useMenuCurrentItem(pathname, MENU_SIDEBAR);

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
    <>
      <Helmet>
        <title>{menuItem?.title}</title>
      </Helmet>

      <div className="flex grow">
        <Sidebar />

        <div className="wrapper flex grow flex-col">
          <Header />

          <Content />

          <Footer />
        </div>
      </div>
    </>
  );
};

export { Main };
