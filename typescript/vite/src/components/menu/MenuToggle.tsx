import clsx from 'clsx';
import { forwardRef, memo } from 'react';

import { IMenuToggleProps } from './';

const MenuToggleComponent = forwardRef<HTMLDivElement | null, IMenuToggleProps>(
  function MenuToggleComponent(props, ref) {
    const {
      className,
      menuItemRef,
      handleToggle,
      handleClick,
      children
    } = props;

    return (
      <div
        className={clsx('menu-toggle', className && className)}
        ref={menuItemRef}
        onClick={handleToggle}
      >
        {children}
      </div>
    );
  }
);

const MenuToggle = memo(MenuToggleComponent);
export { MenuToggle };
