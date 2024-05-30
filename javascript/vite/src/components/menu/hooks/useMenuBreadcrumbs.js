import { matchPath } from 'react-router';
const useMenuBreadcrumbs = (pathname, items) => {
  const findParents = (items, parent) => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.path && matchPath(pathname, item.path)) {
        return [{
          title: item.title,
          path: item.path,
          active: true
        }];
      } else if (item.children) {
        const parents = findParents(item.children, item);
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