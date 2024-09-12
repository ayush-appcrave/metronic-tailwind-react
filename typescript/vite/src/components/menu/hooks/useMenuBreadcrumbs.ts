import { matchPath } from 'react-router';

import { IMenuItemProps, MenuBreadcrumbsType, MenuConfigType } from '../types';

const useMenuBreadcrumbs = (pathname: string, items: MenuConfigType | null): MenuBreadcrumbsType => {
  pathname = pathname.trim();
  
  const findParents = (items: MenuConfigType | null, parent?: IMenuItemProps): MenuBreadcrumbsType => {
    if (!items) return [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.path && matchPath(pathname, item.path)) {
        return [
          {
            title: item.title,
            path: item.path,
            active: true
          }
        ];
      } else if (item.children) {
        const parents = findParents(item.children as MenuConfigType, item as IMenuItemProps);

        if (parents.length > 0) {
          return [item, ...parents];
        }
      }
    }

    return [];
  };

  return findParents(items);
};

export { useMenuBreadcrumbs };
