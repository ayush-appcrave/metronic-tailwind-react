import clsx from 'clsx';
import { IMenuLabelProps } from './';

const MenuLabel = (props: IMenuLabelProps) => {
  const { className, children } = props;

  return <div className={clsx('menu-label', className && className)}>{children}</div>;
};

export { MenuLabel };
