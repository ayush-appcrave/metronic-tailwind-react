import clsx from 'clsx';

import { MenuTogglePropsType } from './';

const MenuToggle = ({ className, children }: MenuTogglePropsType) => {
  return <div className={clsx('menu-toggle', className && className)}>{children}</div>;
};

export { MenuToggle };
