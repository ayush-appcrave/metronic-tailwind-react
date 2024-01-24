import clsx from 'clsx';

import { MenuTitlePropsType } from './';

const MenuSub = ({ collapse, expand, className, children }: MenuTitlePropsType) => {
  return <div className={clsx('menu-title', className && className)}>{children}</div>;
};

export { MenuSub };
