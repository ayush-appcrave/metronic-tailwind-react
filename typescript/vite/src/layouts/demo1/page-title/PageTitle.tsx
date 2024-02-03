import { useLocation } from 'react-router';

import { useMenuTitle } from '@/components/menu/hooks/useMenuTitle';

import { MENU_SIDEBAR } from '../../../config/menu.config';
import { IPageTitleProps } from './types';

const PageTitle = ({ text }: IPageTitleProps) => {
  const { pathname } = useLocation();
  const title = useMenuTitle(pathname, MENU_SIDEBAR);

  return <h1 className="text-xl font-semibold leading-none text-gray-900">{text ?? title}</h1>;
};

export { PageTitle };
