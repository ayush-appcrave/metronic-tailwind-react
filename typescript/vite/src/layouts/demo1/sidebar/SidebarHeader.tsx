import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { getTotalHeight, toAbsoluteUrl } from '@/utils';

import { SidebarToggle } from './';
import { useDemo1Layout } from '../Demo1LayoutProvider';

interface Props {
  setHeaderHeight: Dispatch<SetStateAction<number>>;
}

const SidebarHeader = ({ setHeaderHeight }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { layout } = useDemo1Layout();

  useEffect(() => {
    if (elementRef.current) {
      setHeaderHeight(getTotalHeight(elementRef.current));
    }
  }, []);

  const lightLogo = () => {
    return (
      <a href="" className="dark:hidden">
				<img 
          src={toAbsoluteUrl('/media/app/default-logo.svg')}  
          className="default-logo min-h-[22px] max-w-none"
        />
				<img 
          src={toAbsoluteUrl('/media/app/mini-logo.svg')}
          className="small-logo min-h-[22px] max-w-none"
        />
			</a>
    );
  }

  const darkLogo = () => {
    return (
      <a href="{{ theme.getPageUrl('index.html') }}">
        <img 
          src={toAbsoluteUrl('/media/app/default-logo-dark.svg')}  
          className="default-logo min-h-[22px] max-w-none"
        />
				<img 
          src={toAbsoluteUrl('/media/app/mini-logo.svg')}
          className="small-logo min-h-[22px] max-w-none"
        />
      </a>
    );
  }

  return (
    <div
      ref={elementRef}
      className="sidebar-header hidden lg:flex items-center relative justify-between px-6 shrink-0"
    >
      {layout.options.sidebar.theme === 'light' ? lightLogo() : darkLogo()}
      <SidebarToggle />
    </div>
  );
};

export { SidebarHeader };
