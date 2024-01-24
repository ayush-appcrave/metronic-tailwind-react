import clsx from 'clsx';

import { MenuHeadingPropsType } from './';

const MenuHeading = ({ collapse, expand, className, children }: MenuHeadingPropsType) => {
  return <div className={clsx('menu-heading', className && className)}>{children}</div>;
};

export { MenuHeading };
