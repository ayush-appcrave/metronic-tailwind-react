import clsx from 'clsx';
import { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { MenuLinkPropsType } from './';

const MenuLinkComponent = ({
  path,
  newTab,
  hasItemSub = false,
  externalLink,
  className,
  handleToggle,
  handleClick,
  onLinkClick,
  children
}: MenuLinkPropsType) => {
  if (!hasItemSub && path) {
    if (externalLink) {
      const target = newTab ? '_blank' : '_self';

      return (
        <a
          href={path}
          target={target}
          rel="noopener"
          onClick={handleClick}
          className={clsx('menu-link', className && className)}
        >
          {children}
        </a>
      );
    } else {
      return (
        <RouterLink
          to={path}
          onClick={handleClick}
          className={clsx('menu-link', className && className)}
        >
          {children}
        </RouterLink>
      );
    }
  } else {
    return (
      <div className={clsx('menu-link', className && className)} onClick={handleToggle}>
        {children}
      </div>
    );
  }
};

const MenuLink = memo(MenuLinkComponent);
export { MenuLink };
