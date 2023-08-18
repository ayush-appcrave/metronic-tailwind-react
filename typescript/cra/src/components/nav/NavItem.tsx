import { Box, Link } from '@mui/material';
import {
  FocusEvent,
  forwardRef,
  KeyboardEvent,
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
  DividerStyled,
  MenuStyled,
  type NavConfigType,
  NavDefaultStylesConfig,
  NavItemButton,
  type NavItemPropsType,
  NavItemSub
} from '..';

const NavItem = forwardRef<HTMLDivElement | null, NavItemPropsType>(function NavItem(props, ref) {
  const {
    depth = 1,
    menu,
    collapse = false,
    expand = false,
    title,
    path = '',
    tabIndex,
    externalLink,
    newTab = false,
    divider,
    sub,
    icon,
    bullet,
    badge,
    button,
    styles = NavDefaultStylesConfig(),
    containerProps: ContainerPropsProp = {},
    sx
  } = props;

  const { ref: containerRefProp, ...containerProps } = ContainerPropsProp;

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

      if (containerProps.onMouseEnter) {
        containerProps.onMouseEnter(e);
      }
    }
  };

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    setHover(false);

    if (toggle === 'hover') {
      setOpen(false);
      setIsSubMenuOpen(false);
      setAnchorEl(menuItemRef.current);

      if (containerProps.onMouseLeave) {
        containerProps.onMouseLeave(e);
      }
    }
  };

  const handleToggle = (event: MouseEvent<HTMLDivElement>) => {
    if (toggle === 'click') {
      setOpen(!open);
      if (itemMenu) {
        if (isSubMenuOpen) {
          setAnchorEl(null);
          setIsSubMenuOpen(false);
        } else {
          setAnchorEl(menuItemRef.current);
          setIsSubMenuOpen(true);
        }
      }
    }
  };

  const handleFocus = (e: FocusEvent<HTMLElement>) => {
    if (e.target === containerRef.current) {
      setAnchorEl(menuItemRef.current);
      setIsSubMenuOpen(true);
    }

    if (containerProps.onFocus) {
      containerProps.onFocus(e);
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

  // Check if any immediate sub are active
  const isSubmenuFocused = () => {
    const active = containerRef.current?.ownerDocument.activeElement ?? null;
    const subList = menuContainerRef.current?.children;

    if (subList && subList.length > 0) {
      for (const child of subList) {
        if (child === active) {
          return true;
        }
      }
    }

    return false;
  };

  const { pathname } = useLocation();

  const { match } = useMatchPath(path);

  const itemMenu = useResponsiveProp(sub?.menu, false);

  const direction = useResponsiveProp(sub?.direction, 'vertical');

  const menuProps = useResponsiveProp(sub?.menuProps);

  const menuWidth = useResponsiveProp(sub?.menuWidth);

  const accordion = useResponsiveProp(sub?.accordion, true);

  const toggle = useResponsiveProp(sub?.toggle, 'click');

  const arrow = sub?.arrow ?? true;

  const hasSub: boolean = useMemo(() => {
    return sub?.items !== undefined && sub.items.length > 0;
  }, [sub]);

  const minimize: boolean = collapse && !expand;

  const here: boolean = sub?.items ? hasActiveChild(pathname, sub.items) : false;

  const active: boolean = match;

  const [open, setOpen] = useState(here);

  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (match) {
      setOpen(true);
    }
  }, [pathname]);

  const renderDivider = <DividerStyled depth={depth} styles={styles} />;

  const renderItem = () => {
    if (button) {
      if (hasSub) {
        return (
          <Box tabIndex={tabIndex} ref={menuItemRef} onClick={handleToggle} sx={{ ...sx }}>
            {button}
          </Box>
        );
      } else {
        return button;
      }
    } else {
      return (
        <NavItemButton
          depth={depth}
          menu={menu}
          itemMenu={itemMenu}
          direction={direction}
          toggle={toggle}
          accordion={accordion}
          active={active}
          here={here}
          hover={hover}
          open={open}
          collapse={collapse}
          expand={expand}
          styles={styles}
          tabIndex={tabIndex}
          menuItemRef={menuItemRef}
          handleToggle={handleToggle}
          minimize={minimize}
          icon={icon}
          bullet={bullet}
          badge={badge}
          title={title}
          arrow={arrow}
          hasSub={hasSub}
        />
      );
    }
  };

  const renderItemSub = (
    <Box ref={menuContainerRef} style={{ pointerEvents: 'auto' }}>
      <NavItemSub
        depth={depth + 1}
        menu={itemMenu}
        accordion={accordion}
        open={open}
        hover={hover}
        expand={expand}
        items={sub?.items}
        styles={styles}
        collapse={collapse}
      />
    </Box>
  );

  const renderItemMenu = () => {
    const handleClose = (event: MouseEvent<HTMLDivElement>) => {
      setIsSubMenuOpen(false);

      if (toggle === 'click') {
        setOpen(false);
        setHover(false);
        setAnchorEl(null);
      }
    };

    return (
      <MenuStyled
        styles={styles}
        onClose={handleClose}
        sx={{
          pointerEvents: toggle === 'click' ? 'auto' : 'none',
          ...(menuWidth && { width: menuWidth })
        }}
        anchorEl={anchorEl}
        {...(menuProps && menuProps)}
        open={isSubMenuOpen}
        autoFocus={false}
        disableAutoFocus
        disableEnforceFocus
        disableScrollLock={true}
        disableRestoreFocus
      >
        {renderItemSub}
      </MenuStyled>
    );
  };

  const renderContent = (
    <Box
      {...containerProps}
      ref={containerRef}
      onFocus={handleFocus}
      tabIndex={tabIndex}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      {divider ? renderDivider : renderItem()}

      {!minimize && hasSub && (itemMenu ? renderItemMenu() : renderItemSub)}
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

    if (hasSub) {
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
    } else if (item.sub?.items) {
      return hasActiveChild(pathname, item.sub.items);
    }
  }

  return false;
};

export { NavItem };
