import clsx from 'clsx';

import { MenuLinkPropsType } from './';

const MenuLink = ({ collapse, expand, className, onLinkClick, children }: MenuLinkPropsType) => {
  return <div className={clsx('menu-link', className && className)}>{children}</div>;
};

export { MenuLink };
