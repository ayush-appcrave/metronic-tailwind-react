import clsx from 'clsx';
import { Children, cloneElement, isValidElement } from 'react';

import { MenuItemPropsType, MenuPropsType } from './';

const Menu = ({ collapse, expand, className, onLinksClick, children }: MenuPropsType) => {
  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      // Add some props to each child
      const modifiedProps: MenuItemPropsType = {
        collapse,
        expand,
        onLinksClick
      };

      // Return the child with modified props
      return cloneElement(child, modifiedProps);
    }

    // Return the child as is if it's not a valid React element
    return child;
  });

  return <div className={clsx('menu', className && className)}>{modifiedChildren}</div>;
};

export { Menu };
