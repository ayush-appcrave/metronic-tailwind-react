import clsx from 'clsx';
import { forwardRef, memo } from 'react';
const MenuToggleComponent = forwardRef(function MenuToggleComponent(props, ref) {
  const {
    className,
    hasItemSub = false,
    menuItemRef,
    handleToggle,
    children
  } = props;
  if (!hasItemSub) {
    return <div className={clsx('menu-toggle', className && className)} onClick={handleToggle}>
          {children}
        </div>;
  } else {
    return <div className={clsx('menu-toggle', className && className)} ref={menuItemRef} onClick={handleToggle}>
          {children}
        </div>;
  }
});
const MenuToggle = memo(MenuToggleComponent);
export { MenuToggle };