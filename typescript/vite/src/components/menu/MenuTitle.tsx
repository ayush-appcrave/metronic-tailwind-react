import clsx from 'clsx';
import { memo } from 'react';

import { MenuTitlePropsType } from './';

const MenuTitleComponent = ({ className, children }: MenuTitlePropsType) => {
  return <div className={clsx('menu-title', className && className)}>{children}</div>;
};

const MenuTitle = memo(MenuTitleComponent);
export { MenuTitle };
