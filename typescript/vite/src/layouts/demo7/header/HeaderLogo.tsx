import { Link, useLocation } from 'react-router-dom';
import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';
import { MegaMenu } from '../mega-menu';
import {
  Menu,
  MenuArrow,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuToggle
} from '@/components/menu';
import { MENU_ROOT } from '@/config';
import { useEffect, useState } from 'react';

const HeaderLogo = () => {
  const { pathname } = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState(MENU_ROOT[1]);

  useEffect(() => {
    MENU_ROOT.forEach((item) => {
      if (item.rootPath && pathname.includes(item.rootPath)) {
        setSelectedMenuItem(item);
      }
    });
  }, [pathname]);

  return (
    <div className="flex items-stretch gap-10 grow">
      <div className="flex items-center gap-2.5">
        <Link to="/" className="shrink-0">
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-circle-primary.svg')}
            className="dark:hidden min-h-[34px]"
            alt="logo"
          />
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-circle-primary-dark.svg')}
            className="hidden dark:inline-block min-h-[34px]"
            alt="logo"
          />
        </Link>
        <button className="lg:hidden btn btn-icon btn-light btn-clear btn-sm" data-drawer-toggle="#mega_menu_wrapper">
          <KeenIcon icon="burger-menu-2" />
        </button>
        <h3 className="text-gray-900 text-lg font-medium hidden md:block">Metronic</h3>
      </div>

      <MegaMenu />
    </div>
  );
};

export { HeaderLogo };
