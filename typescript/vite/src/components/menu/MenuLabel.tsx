import clsx from 'clsx';
import { forwardRef, memo } from 'react';

import { IMenuLabelProps } from './';

const MenuLabelComponent = forwardRef<HTMLDivElement | null, IMenuLabelProps>(
  function MenuLabelComponent(props, ref) {
    const {
      className,
      hasItemSub = false,
      menuItemRef,
      handleToggle,
      handleClick,
      children
    } = props;

    if (!hasItemSub) {
      return (
        <div
          className={clsx('menu-label', className && className)}
          onClick={handleToggle}
        >
        {children}
      </div>
      );
    } else {
      return (
        <div
          className={clsx('menu-label', className && className)}
          ref={menuItemRef}
          onClick={handleToggle}
        >
          {children}
        </div>
      );
    }
  }
);

const MenuLabel = memo(MenuLabelComponent);
export { MenuLabel };
