import { Link } from '@mui/material';
import { memo, MouseEvent, useEffect, useMemo, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { useMatchPath } from '../../hooks/useMatchPath';
import { useResponsiveProp } from '../../hooks/useResponsiveProp';
import { matchPath } from '../../utils/Router';
import {
  BadgeStyled,
  DividerStyled,
  ListItemButtonStyled,
  ListItemIconStyled,
  ListItemTextStyled,
  type NavConfigType,
  NavItemArrow,
  NavItemBullet,
  NavItemSub,
  type NavItemType
} from '..';
import { KeenIcon } from '../keenicons';
import { PopoverStyled } from './';

const NavItemComponent = ({
  options,
  collapse = false,
  expand = false,
  styles,
  depth = 1
}: NavItemType) => {
  const {
    title,
    path = '',
    externalLink,
    newTab = false,
    divider,
    children,
    icon,
    bullet,
    badge
  } = options;

  const { pathname } = useLocation();

  const { match } = useMatchPath(path);

  const variant = useResponsiveProp(children?.variant);

  const direction = useResponsiveProp(children?.direction);

  const accordion = useResponsiveProp(children?.accordion, true);

  const hasChildren: boolean = useMemo(() => {
    return children?.items !== undefined && children.items.length > 0;
  }, [children]);

  const minimize: boolean = collapse && !expand;

  const here: boolean = children?.items ? hasActiveChild(pathname, children.items) : false;

  const active: boolean = match;

  const disabled: boolean = false;

  const [open, setOpen] = useState(here);

  useEffect(() => {
    if (match) {
      setOpen(true);
    }
  }, [pathname]);

  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleToggle = (event: MouseEvent<HTMLDivElement>) => {
    setOpen(!open);

    if (variant === 'dropdown') {
      setAnchorEl(event.currentTarget);
    }
  };

  const renderDivider = (
    <DividerStyled
      sx={{
        mx: styles.ITEM_PADDING_X
      }}
    />
  );

  const renderItem = (
    <ListItemButtonStyled
      onClick={handleToggle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      depth={depth}
      styles={styles}
      active={active}
      here={here}
      open={open}
      hover={hover}
      disabled={disabled}
      collapse={collapse}
      expand={expand}
      sx={{
        paddingTop: depth === 1 ? styles.ROOT_ITEM_PADDING_Y : styles.SUB_ITEM_PADDING_Y,
        paddingBottom: depth === 1 ? styles.ROOT_ITEM_PADDING_Y : styles.SUB_ITEM_PADDING_Y,
        paddingLeft:
          depth === 1 ? styles.ROOT_ITEM_PADDING_X : styles.SUB_ITEM_PADDING_X + styles.INDENTION,
        paddingRight:
          depth === 1 ? styles.ROOT_ITEM_PADDING_X : styles.SUB_ITEM_PADDING_X + styles.INDENTION,
        marginBottom: depth === 1 ? styles.ROOT_ITEM_GAP : styles.SUB_ITEM_GAP
      }}
    >
      {icon && (
        <ListItemIconStyled
          depth={depth}
          styles={styles}
          active={active}
          here={here}
          hover={hover}
          open={open}
          disabled={disabled}
          collapse={collapse}
        >
          {icon}
        </ListItemIconStyled>
      )}

      {bullet && (
        <NavItemBullet
          depth={depth}
          styles={styles}
          active={active}
          here={here}
          hover={hover}
          open={open}
          disabled={disabled}
          collapse={collapse}
        />
      )}

      {!minimize && title && (
        <ListItemTextStyled
          depth={depth}
          styles={styles}
          active={active}
          here={here}
          hover={hover}
          open={open}
          disabled={disabled}
          collapse={collapse}
          primary={title}
        />
      )}

      {!minimize && badge && (
        <BadgeStyled
          badgeContent={badge.content}
          color={badge.color}
          depth={depth}
          styles={styles}
          active={active}
          hover={hover}
          here={here}
          open={open}
          disabled={disabled}
          collapse={collapse}
        />
      )}

      {!minimize && hasChildren && (
        <NavItemArrow
          depth={depth}
          styles={styles}
          active={active}
          here={here}
          open={open}
          hover={hover}
          disabled={disabled}
          collapse={collapse}
          icon={<KeenIcon icon="down" />}
        />
      )}
    </ListItemButtonStyled>
  );

  const renderItemSub = (
    <NavItemSub
      variant={variant}
      direction={direction}
      accordion={accordion}
      open={open}
      hover={hover}
      expand={expand}
      depth={depth + 1}
      items={children?.items}
      styles={styles}
      collapse={collapse}
    />
  );

  const renderItemDropdown = () => {
    const handleClose = () => {
      setOpen(false);
      setAnchorEl(null);
    };

    return (
      <PopoverStyled
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        anchorEl={anchorEl}
        open={open}
        disableScrollLock={true}
      >
        {renderItemSub}
      </PopoverStyled>
    );
  };

  const renderContent = (
    <>
      {divider ? renderDivider : renderItem}

      {!minimize && hasChildren && (variant === 'dropdown' ? renderItemDropdown() : renderItemSub)}
    </>
  );

  const renderMain = () => {
    if (externalLink) {
      const target = newTab ? '_blank' : '_self';

      return (
        <Link href={path} target={target} rel="noopener" underline="none">
          {renderContent}
        </Link>
      );
    }

    if (hasChildren) {
      return renderContent;
    }

    return (
      <Link component={RouterLink} to={path} underline="none">
        {renderContent}
      </Link>
    );
  };

  return renderMain();
};

const hasActiveChild = (pathname: string, items: NavConfigType): boolean => {
  for (const item of items) {
    if (item.path && matchPath(item.path, pathname)) {
      return true;
    } else if (item.children?.items) {
      return hasActiveChild(pathname, item.children.items);
    }
  }

  return false;
};

const NavItem = memo(NavItemComponent);
export { NavItem };
