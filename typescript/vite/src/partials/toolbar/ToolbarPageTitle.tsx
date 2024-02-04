import { useLocation } from 'react-router';

import { useActiveMenuItem } from '@/components/menu';
import { MENU_SIDEBAR } from '@/config/menu.config';

import { IToolbarPageTitleProps } from './types';

const ToolbarPageTitle = ({ text }: IToolbarPageTitleProps) => {
  const { pathname } = useLocation();
  const menuItem = useActiveMenuItem(pathname, MENU_SIDEBAR);

  return (
    <h1 className="text-xl font-semibold leading-none text-gray-900">{text ?? menuItem?.title}</h1>
  );
};

export { ToolbarPageTitle };
