import clsx from 'clsx';

import { IMenuToggleProps } from './';

const MenuToggle = ({ className, children }: IMenuToggleProps) => {
  return <div className={clsx('menu-toggle', className && className)}>{children}</div>;
};

export { MenuToggle };
