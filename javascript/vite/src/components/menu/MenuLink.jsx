import clsx from 'clsx';
import { forwardRef, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
const MenuLinkComponent = forwardRef(function MenuLinkComponent(props, ref) {
  const {
    path,
    newTab,
    hasItemSub = false,
    externalLink,
    className,
    menuItemRef,
    handleToggle,
    handleClick,
    children
  } = props;
  if (!hasItemSub && path) {
    if (externalLink) {
      const target = newTab ? '_blank' : '_self';
      return <a href={path} target={target} rel="noopener" onClick={handleClick} className={clsx('menu-link', className && className)}>
            {children}
          </a>;
    } else {
      return <RouterLink to={path} onClick={handleClick} className={clsx('menu-link', className && className)}>
            {children}
          </RouterLink>;
    }
  } else {
    return <div className={clsx('menu-link', className && className)} ref={menuItemRef} onClick={handleToggle}>
          {children}
        </div>;
  }
});
const MenuLink = memo(MenuLinkComponent);
export { MenuLink };