import { useEffect } from 'react';

import { Settings } from '@/components/settings';

import { Demo1LayoutProvider } from './Demo1LayoutProvider';
import { Footer } from './footer';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { Wrapper } from './wrapper';

const Demo1Layout = () => {
  useEffect(() => {
    // Add a class to the body element
    document.body.classList.add('demo1');
    document.body.classList.add('sidebar-fixed');
    document.body.classList.add('header-fixed');

    // Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('demo1');
      document.body.classList.remove('sidebar-fixed');
      document.body.classList.remove('header-fixed');
    };
  }, []);

  return (
    <Demo1LayoutProvider>
      <div className="flex grow">
        <Sidebar />

        <div className="wrapper flex grow flex-col">
          <Header />

          <div className="grow content" role="content">
            <Wrapper />
          </div>

          <Footer />
        </div>
      </div>
    </Demo1LayoutProvider>
  );
};

export { Demo1Layout };
