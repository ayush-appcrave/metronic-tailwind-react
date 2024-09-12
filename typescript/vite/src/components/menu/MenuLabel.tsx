import clsx from 'clsx';
import { forwardRef, memo } from 'react';

import { IMenuLabelProps } from './';

const MenuLabelComponent = forwardRef<HTMLDivElement | null, IMenuLabelProps>(
  function MenuLabelComponent(props, ref) {
    const {
      className,      
      children
    } = props;

    return (
      <div className={clsx('menu-label', className && className)}>
        {children}
      </div>
    );
  }
);

const MenuLabel = memo(MenuLabelComponent);
export { MenuLabel };
