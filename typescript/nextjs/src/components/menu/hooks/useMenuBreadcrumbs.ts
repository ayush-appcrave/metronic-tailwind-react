import { useRouter } from 'next/router';
import { IMenuItemProps, MenuBreadcrumbsType, MenuConfigType } from '../types';

const useMenuBreadcrumbs = (items: MenuConfigType): MenuBreadcrumbsType => {
  const router = useRouter();

  const findParents = (items: MenuConfigType, parent?: IMenuItemProps): MenuBreadcrumbsType => {
    const pathname = router.pathname;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.path && item.path === pathname) {
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
