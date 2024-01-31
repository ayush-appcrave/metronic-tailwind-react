import { ReactNode } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { KeenIcon, MenuBreadcrumbsType } from '@/components';
import { useMenuBreadcrumbs } from '@/components/menu/hooks/useMenuBreadcrumbs';

import { MENU_SIDEBAR } from '../../../config/menu.config';

const Breadcrumbs = (customItems?: MenuBreadcrumbsType) => {
  const { pathname } = useLocation();
  const items = customItems ?? useMenuBreadcrumbs(pathname, MENU_SIDEBAR);

  const renderItems = (): ReactNode => {
    return items.map((item, index) => {
      const last = index === items.length - 1;
      const separator = (
        <KeenIcon icon="right" className="text-gray-500 text-xs" key={`separator-${index}`} />
      );

      if (item.path) {
        return (
          <>
            <RouterLink
              key={`item-${index}`}
              to={item.path}
              className="flex items-center gap-1 text-gray-600 hover:text-primary"
            >
              {item.title}
            </RouterLink>
            {!last && separator}
          </>
        );
      } else {
        return (
          <>
            <span key={`item-${index}`} className="text-gray-700">
              {item.title}
            </span>
            {!last && separator}
          </>
        );
      }
    });
  };

  const render = () => {
    return (
      <div className="flex [.header_&]:below-lg:hidden items-center gap-1 text-xs lg:text-sm font-normal mb-2.5 lg:mb-0">
        {renderItems()}
      </div>
    );
  };

  return render();
};

export { Breadcrumbs };
