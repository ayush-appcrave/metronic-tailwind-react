import { matchPath } from 'react-router';

import { IMenuItemConfig, type MenuConfigType } from '../types';

const useActiveMenuItem = (pathname: string, items: MenuConfigType): IMenuItemConfig | null => {
  const findActiveItem = (items: MenuConfigType): IMenuItemConfig | null => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.path && matchPath(pathname, item.path)) {
        return item ?? null;
      } else if (item.children) {
        const childItem = findActiveItem(item.children as MenuConfigType);
        if (childItem) {
          return childItem;
        }
      }
    }

    return null;
  };

  return findActiveItem(items);
};

export { useActiveMenuItem };
