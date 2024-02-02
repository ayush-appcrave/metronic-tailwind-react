import { matchPath } from 'react-router';

import { MenuBreadcrumbsType, MenuConfigType, MenuItemPropsType } from '../types';

const useMenuBreadcrumbs = (pathname: string, items: MenuConfigType): MenuBreadcrumbsType => {
  const findParents = (items: MenuConfigType, parent?: MenuItemPropsType): MenuBreadcrumbsType => {
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
        const parents = findParents(item.children as MenuConfigType, item as MenuItemPropsType);

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
