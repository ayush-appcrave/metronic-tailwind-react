import { matchPath } from 'react-router';
const useMenuChildren = (pathname, items, level) => {
	const hasActiveChild = (items) => {
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			if (item.path && matchPath(pathname, item.path)) {
				return true;
			} else if (item.children) {
				if (hasActiveChild(item.children)) {
					return true;
				}
			}
		}
		return false;
	};
	const getChildren = (items, level = 0, currentLevel = 0) => {
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			if (item.children) {
				if (level === currentLevel && hasActiveChild(item.children)) {
					return item.children;
				} else {
					return getChildren(item.children, level, currentLevel++);
				}
			} else if (
				level === currentLevel &&
				item.path &&
				matchPath(pathname, item.path)
			) {
				return items;
			}
		}
		return null;
	};
	return getChildren(items, level);
};
export { useMenuChildren };
