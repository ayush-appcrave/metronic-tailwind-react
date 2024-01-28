import clsx from 'clsx';

import { MenuIconPropsType } from './';

const MenuIcon = ({ className, children }: MenuIconPropsType) => {
  return <div className={clsx('menu-icon', className && className)}>{children}</div>;
};

export { MenuIcon };
