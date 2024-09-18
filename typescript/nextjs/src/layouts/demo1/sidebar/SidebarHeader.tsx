import React, { forwardRef } from 'react';
import Link from 'next/link';
import { useDemo1Layout } from '../';
import { toAbsoluteUrl } from '@/utils';
import { SidebarToggle } from './';

const SidebarHeader = forwardRef<HTMLDivElement>((props, ref) => {
  const { layout } = useDemo1Layout();

  const lightLogo = () => (
    <>
      <Link to="/" className="dark:hidden">
        <img
          src={toAbsoluteUrl('/media/app/default-logo.svg')}
          className="default-logo min-h-[22px] max-w-none"
        />
        <img
          src={toAbsoluteUrl('/media/app/mini-logo.svg')}
          className="small-logo min-h-[22px] max-w-none"
        />
      </Link>
      <Link to="/" className="hidden dark:block">
        <img
          src={toAbsoluteUrl('/media/app/default-logo-dark.svg')}
          className="default-logo min-h-[22px] max-w-none"
        />
        <img
          src={toAbsoluteUrl('/media/app/mini-logo.svg')}
          className="small-logo min-h-[22px] max-w-none"
        />
      </Link>
    </>
  );

  const darkLogo = () => (
    <Link to="/">
      <img
        src={toAbsoluteUrl('/media/app/default-logo-dark.svg')}
        className="default-logo min-h-[22px] max-w-none"
      />
      <img
        src={toAbsoluteUrl('/media/app/mini-logo.svg')}
        className="small-logo min-h-[22px] max-w-none"
      />
    </Link>
  );

  return (
    <div
      ref={ref}
      className="sidebar-header hidden lg:flex items-center relative justify-between px-6 shrink-0"
    >
      {layout.options.sidebar.theme === 'light' ? lightLogo() : darkLogo()}
      <SidebarToggle />
    </div>
  );
});

export { SidebarHeader };
