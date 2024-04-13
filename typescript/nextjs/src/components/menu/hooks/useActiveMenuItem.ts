import { useRouter } from 'next/router';
import { IMenuItemConfig, MenuConfigType } from '../types';

const useActiveMenuItem = (items: MenuConfigType): IMenuItemConfig | null => {
  const router = useRouter();
  const pathname = router.pathname;

  const findActiveItem = (items: MenuConfigType): IMenuItemConfig | null => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.path && pathname.startsWith(item.path)) {
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
