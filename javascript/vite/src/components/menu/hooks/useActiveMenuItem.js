import { matchPath } from 'react-router';
const useActiveMenuItem = (pathname, items) => {
  const findActiveItem = items => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.path && matchPath(pathname, item.path)) {
        return item ?? null;
      } else if (item.children) {
        const childItem = findActiveItem(item.children);
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