import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import { MenuLinkPropsType } from './';

const MenuLink = ({
  path,
  newTab,
  hasItemSub = false,
  externalLink,
  collapse,
  expand,
  className,
  handleToggle,
  handleClick,
  onLinkClick,
  children
}: MenuLinkPropsType) => {

  console.log('ppp:' + handleToggle);
  
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
    const handleToggle2 = () => {
      console.log('wow');
    }
    return (
      <div className={clsx('menu-link', className && className)} onClick={handleToggle}>
        {children}
      </div>
    );
  }
};

export { MenuLink };
