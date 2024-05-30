import clsx from 'clsx';
import { forwardRef, memo } from 'react';
import Link from 'next/link';

import { IMenuLinkProps } from './';

const MenuLinkComponent = forwardRef<HTMLDivElement | null, IMenuLinkProps>(
  function MenuLinkComponent(props, ref) {
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
          <Link
            href={path}
            onClick={handleClick}
            className={clsx('menu-link', className && className)}
          >
            {children}
          </Link>
        );
      }
    } else {
      return (
        <div
          className={clsx('menu-link', className && className)}
          ref={menuItemRef}
          onClick={handleToggle}
        >
          {children}
        </div>
      );
    }
  }
);

const MenuLink = memo(MenuLinkComponent);
export { MenuLink };
