import { useLocation } from 'react-router';

import { useMenuCurrentItem } from '@/components/menu';
import { useMenu } from '@/providers';

import { IToolbarPageTitleProps } from './interfaces';

const ToolbarPageTitle = ({ text }: IToolbarPageTitleProps) => {
  const { pathname } = useLocation();
  const { getMenuConfig } = useMenu();
  const menuConfig = getMenuConfig('primary');
  const menuItem = menuConfig && useMenuCurrentItem(pathname, menuConfig);

  return (
    <h1 className="text-xl font-semibold leading-none text-gray-900">{text ?? menuItem?.title}</h1>
  );
};

export { ToolbarPageTitle };
