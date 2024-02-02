import clsx from 'clsx';
import { Fragment } from 'react';
import { useLocation } from 'react-router';

import { KeenIcon } from '@/components';
import { useMenuBreadcrumbs } from '@/components/menu/hooks/useMenuBreadcrumbs';

import { MENU_SIDEBAR } from '../../../config/menu.config';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const items = useMenuBreadcrumbs(pathname, MENU_SIDEBAR);

  const renderItems = () => {
    return items.map((item, index) => {
      const last = index === items.length - 1;

      return (
        <Fragment key={`root-${index}`}>
          <span
            className={clsx(item.active ? 'text-gray-700' : 'text-gray-600')}
            key={`item-${index}`}
          >
            {item.title}
          </span>
          {!last && (
            <KeenIcon icon="right" className="text-gray-500 text-xs" key={`separator-${index}`} />
          )}
        </Fragment>
      );
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
