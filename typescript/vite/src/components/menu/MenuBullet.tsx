import clsx from 'clsx';

import { MenuBulletPropsType } from './';

const MenuBullet = ({ className, children }: MenuBulletPropsType) => {
  return <div className={clsx('menu-bullet', className && className)}>{children}</div>;
};

export { MenuBullet };
