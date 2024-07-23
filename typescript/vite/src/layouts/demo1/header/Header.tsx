import clsx from 'clsx';
import { useEffect } from 'react';

import { Container } from '@/components/container';
import { useResponsive } from '@/hooks';

import { HeaderLogo, HeaderTopbar, } from './';
import { Breadcrumbs, useDemo1Layout } from '../';

const Header = () => {
  const { headerSticky } = useDemo1Layout();
  const desktopMode = useResponsive('up', 'lg');

  useEffect(() => {
    if (headerSticky) {
      document.body.setAttribute('data-sticky-header', 'on');
    } else {
      document.body.removeAttribute('data-sticky-header');
    }
  }, [headerSticky]);

  return (
    <header
      className={clsx(
        'header fixed top-0 z-10 left-0 right-0 flex items-stretch shrink-0 bg-white',
        headerSticky && 'shadow-sm'
      )}
    >
      <Container className="flex justify-between items-stretch lg:gap-4">
        <HeaderLogo />
        {desktopMode && <Breadcrumbs />}
        <HeaderTopbar />
      </Container>
    </header>
  );
};

export { Header };
