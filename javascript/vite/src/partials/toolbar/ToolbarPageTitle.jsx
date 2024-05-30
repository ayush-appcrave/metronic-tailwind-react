import { useLocation } from 'react-router';
import { useActiveMenuItem } from '@/components/menu';
import { useMenu } from '@/providers';
const ToolbarPageTitle = ({
  text
}) => {
  const {
    pathname
  } = useLocation();
  const {
    getMenuConfig
  } = useMenu();
  const menuConfig = getMenuConfig('primary');
  const menuItem = menuConfig && useActiveMenuItem(pathname, menuConfig);
  return <h1 className="text-xl font-semibold leading-none text-gray-900">{text ?? menuItem?.title}</h1>;
};
export { ToolbarPageTitle };