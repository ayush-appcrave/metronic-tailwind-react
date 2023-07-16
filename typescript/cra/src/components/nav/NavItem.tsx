import { Box, Link } from '@mui/material';
import {
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  memo,
  MouseEvent,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';
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
import { MenuStyled } from './';

const NavItemComponent = forwardRef<HTMLDivElement | null, NavItemType>(function NavItemComponent(
  props,
  ref
) {
  const {
    options,
    collapse = false,
    expand = false,
    styles,
    depth = 1,
    ContainerProps: ContainerPropsProp = {},
    MenuProps
  } = props;

  const {
    title,
    path = '',
    tabIndex: tabIndexProp,
    externalLink,
    newTab = false,
    divider,
    children,
    icon,
    bullet,
    badge
  } = options;

  const { ref: containerRefProp, ...ContainerProps } = ContainerPropsProp;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const menuItemRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => menuItemRef.current!); // eslint-disable-line @typescript-eslint/no-non-null-assertion

  const containerRef = useRef<HTMLDivElement | null>(null);
  useImperativeHandle(containerRefProp, () => containerRef.current);

  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    setHover(true);

    if (toggle === 'hover') {
      setOpen(true);
      setIsSubMenuOpen(true);
      setAnchorEl(menuItemRef.current);

      if (ContainerProps.onMouseEnter) {
        ContainerProps.onMouseEnter(e);
      }
    }
  };

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    setHover(false);

    if (toggle === 'hover') {
      setOpen(false);
      setIsSubMenuOpen(false);
      setAnchorEl(menuItemRef.current);

      if (ContainerProps.onMouseLeave) {
        ContainerProps.onMouseLeave(e);
      }
    }
  };

  const handleToggle = (event: MouseEvent<HTMLDivElement>) => {
    setOpen(!open);

    if (variant === 'dropdown' && toggle === 'click') {
      setHover(false);
      if (isSubMenuOpen) {
        setAnchorEl(null);
        setIsSubMenuOpen(false);
      } else {
        setAnchorEl(menuItemRef.current);
        setIsSubMenuOpen(true);
      }
    }
  };

  const handleFocus = (e: FocusEvent<HTMLElement>) => {
    if (e.target === containerRef.current) {
      setAnchorEl(menuItemRef.current);
      setIsSubMenuOpen(true);
    }

    if (ContainerProps.onFocus) {
      ContainerProps.onFocus(e);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      return;
    }

    if (isSubmenuFocused()) {
      e.stopPropagation();
    }

    const active = containerRef.current?.ownerDocument.activeElement;

    if (e.key === 'ArrowLeft' && isSubmenuFocused()) {
      containerRef.current?.focus();
    }

    if (e.key === 'ArrowRight' && e.target === containerRef.current && e.target === active) {
      const firstChild = menuContainerRef.current?.children[0] as HTMLDivElement;
      firstChild?.focus();
    }
  };

  // Check if any immediate children are active
  const isSubmenuFocused = () => {
    const active = containerRef.current?.ownerDocument.activeElement ?? null;
    const childrenList = menuContainerRef.current?.children;

    if (childrenList && childrenList.length > 0) {
      for (const child of childrenList) {
        if (child === active) {
          return true;
        }
      }
    }

    return false;
  };

  // Root element must have a `tabIndex` attribute for keyboard navigation
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  const { pathname } = useLocation();

  const { match } = useMatchPath(path);

  const variant = useResponsiveProp(children?.variant, 'inline');

  const direction = useResponsiveProp(children?.direction, 'vertical');

  const accordion = useResponsiveProp(children?.accordion, true);

  const toggle = useResponsiveProp(children?.toggle, 'click');

  const hasChildren: boolean = useMemo(() => {
    return children?.items !== undefined && children.items.length > 0;
  }, [children]);

  const minimize: boolean = collapse && !expand;

  const here: boolean = children?.items ? hasActiveChild(pathname, children.items) : false;

  const active: boolean = match;

  const disabled: boolean = false;

  const [open, setOpen] = useState(here);

  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (match) {
      setOpen(true);
    }
  }, [pathname]);

  const renderDivider = (
    <DividerStyled
      sx={{
        mx: styles.ITEM_PADDING_X
      }}
    />
  );

  const renderItem = (
    <ListItemButtonStyled
      ref={menuItemRef}
      onClick={handleToggle}
      depth={depth}
      styles={styles}
      active={active}
      here={here}
      open={open}
      hover={hover}
      disabled={disabled}
      collapse={collapse}
      expand={expand}
      tabIndex={tabIndex}
      sx={{
        paddingTop: depth === 1 ? styles.ROOT_ITEM_PADDING_Y : styles.SUB_ITEM_PADDING_Y,
        paddingBottom: depth === 1 ? styles.ROOT_ITEM_PADDING_Y : styles.SUB_ITEM_PADDING_Y,
        paddingLeft:
          depth === 1 ? styles.ROOT_ITEM_PADDING_X : styles.SUB_ITEM_PADDING_X * styles.INDENTION,
        paddingRight:
          depth === 1 ? styles.ROOT_ITEM_PADDING_X : styles.SUB_ITEM_PADDING_X * styles.INDENTION,
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
          toggle={toggle}
          variant={variant}
          direction={direction}
          accordion={accordion}
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
    <Box ref={menuContainerRef} style={{ pointerEvents: 'auto' }}>
      <NavItemSub
        accordion={accordion}
        open={open}
        hover={hover}
        expand={expand}
        depth={depth + 1}
        items={children?.items}
        styles={styles}
        collapse={collapse}
      />
    </Box>
  );

  const renderItemDropdown = () => {
    const handleClose = (event: MouseEvent<HTMLDivElement>) => {
      setIsSubMenuOpen(false);

      if (toggle === 'click') {
        setOpen(false);
        setAnchorEl(null);
      }
    };

    console.log('wow:' + menuItemRef.current);

    return (
      <MenuStyled
        onClose={handleClose}
        sx={{
          pointerEvents: toggle === 'click' ? 'auto' : 'none'
        }}
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top'
        }}
        open={isSubMenuOpen}
        autoFocus={false}
        disableAutoFocus
        disableEnforceFocus
        disableScrollLock={true}
        disableRestoreFocus
        {...MenuProps}
      >
        {renderItemSub}
      </MenuStyled>
    );
  };

  const renderContent = (
    <Box
      {...ContainerProps}
      ref={containerRef}
      onFocus={handleFocus}
      tabIndex={tabIndex}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      {divider ? renderDivider : renderItem}

      {!minimize && hasChildren && (variant === 'dropdown' ? renderItemDropdown() : renderItemSub)}
    </Box>
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
});

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
