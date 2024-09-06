import { type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';

import { useDemo1Layout } from '../';

const HeaderLogo = () => {
  const { setMobileSidebarOpen } = useDemo1Layout();

  const handleSidebarOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileSidebarOpen(true);
  };

  return (
    <div className="flex gap-1 lg:hidden items-center">
      <button className="btn btn-icon btn-light btn-clear btn-sm -ms-2" onClick={handleSidebarOpen}>
        <KeenIcon icon="abstract-14" className="text-2xl" />
      </button>

      <Link to="/">
        <img src={toAbsoluteUrl('/media/app/mini-logo.svg')} className="h-6 dark:hidden" />
        <img src={toAbsoluteUrl('/media/app/mini-logo-dark.svg')} className="h-6 light:hidden" />
      </Link>
    </div>
  );
};

export { HeaderLogo };
