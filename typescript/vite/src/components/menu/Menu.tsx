import clsx from 'clsx';
import { Children, cloneElement, isValidElement, memo } from 'react';

import { IMenuItemProps, IMenuProps } from './';

const MenuComponent = ({ className, children }: IMenuProps) => {
  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      // Return the child with modified props
      return cloneElement(child);
    }

    return child;
  });

  return <div className={clsx('menu', className && className)}>{modifiedChildren}</div>;
};

const Menu = memo(MenuComponent);
export { Menu };
