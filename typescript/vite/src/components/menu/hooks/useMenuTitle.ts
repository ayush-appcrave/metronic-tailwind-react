import { matchPath } from 'react-router';

import { type MenuConfigType } from '../types';

const useMenuTitle = (pathname: string, items: MenuConfigType): string => {
  const findActiveItem = (items: MenuConfigType): string => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.path && matchPath(pathname, item.path)) {
        return item.title ?? '';
      } else if (item.children) {
        return findActiveItem(item.children as MenuConfigType);
      }
    }

    return '';
  };

  return findActiveItem(items);
};

export { useMenuTitle };
