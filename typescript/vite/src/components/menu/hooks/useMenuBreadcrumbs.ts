import { useMatchPath } from '../../../hooks';
import { NavBreadcrumbsPropsType, NavConfigType, NavItemPropsType } from '../types';

const useNavBreadcrumbs = (items: NavConfigType): NavBreadcrumbsPropsType => {
  const findParents = (
    items: NavConfigType,
    parent?: NavItemPropsType
  ): NavBreadcrumbsPropsType => {
    for (let i = 0; i < items.length; i++) {
      const obj = items[i];
      const path = obj.path ? obj.path : '';
      const { match } = useMatchPath(path);

      if (match) {
        if (parent) {
          return [
            {
              title: obj.title,
              path: obj.path,
              active: true
            }
          ];
        } else {
          const parents = findParents(items, parent);
          return [obj, ...parents];
        }
      } else if (obj.children?.items) {
        const parents = findParents(obj.children.items, obj);

        if (parents.length > 0) {
          return [obj, ...parents];
        }
      }
    }

    return [];
  };

  return findParents(items);
};

export { useNavBreadcrumbs };
