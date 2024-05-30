/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box, Link } from '@mui/material';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useMatchPath } from '../../hooks/useMatchPath';
import { useResponsiveProp } from '../../hooks/useResponsiveProp';
import { matchPath } from '../../utils/Router';
import { DividerStyled, NavDefaultStylesConfig, MenuItemButton, MenuItemSub } from '..';
const MenuItem = forwardRef(function MenuItem(props, ref) {
  const {
    depth = 1,
    menu = false,
    collapse = false,
    expand = false,
    disabled = false,
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
    tooltip,
    wrapper,
    color,
    styles = NavDefaultStylesConfig(),
    containerProps: ContainerPropsProp = {},
    sx,
    itemRef,
    onLinkClick,
    onLinksClick,
    handleParentMenuClose
  } = props;
  const {
    ref: containerRefProp,
    ...containerProps
  } = ContainerPropsProp;
  const [anchorEl, setAnchorEl] = useState(null);
  const menuItemRef = useRef(null);
  useImperativeHandle(ref, () => itemRef.current);
  useImperativeHandle(containerRefProp, () => containerRef.current);
  const containerRef = useRef(null);
  useImperativeHandle(itemRef, () => {
    return {
      closeMenu: () => {
        setSubOpen(false);
      }
    };
  });
  useImperativeHandle(containerRef, () => menuItemRef.current);
  const menuContainerRef = useRef(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const {
    pathname
  } = useLocation();
  const {
    match
  } = useMatchPath(path);
  const itemMenu = useResponsiveProp(sub?.menu, false);
  const direction = useResponsiveProp(sub?.direction, 'vertical');
  const menuProps = useResponsiveProp(sub?.menuProps);
  const menuWidth = useResponsiveProp(sub?.menuWidth);
  const accordion = useResponsiveProp(sub?.accordion, false);
  const toggle = useResponsiveProp(sub?.toggle, 'click');
  const arrow = sub?.arrow ?? true;
  const hasSub = useMemo(() => {
    return sub?.items !== undefined && sub.items.length > 0 || sub?.wrapper;
  }, [sub]);
  const minimize = collapse && !expand;
  const here = sub?.items ? hasActiveChild(pathname, sub.items) : false;
  const active = match;
  const [open, setOpen] = useState(accordion ? here : false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (match) {
      setOpen(true);
    }
  }, [pathname]);
  const handleMouseEnter = e => {
    setHover(true);
    if (toggle === 'hover') {
      setSubOpen(true);
      if (containerProps.onMouseEnter) {
        containerProps.onMouseEnter(e);
      }
    }
  };
  const handleMouseLeave = e => {
    setHover(false);
    if (toggle === 'hover') {
      setSubOpen(false);
      if (containerProps.onMouseLeave) {
        containerProps.onMouseLeave(e);
      }
    }
  };
  const handleToggle = e => {
    if (disabled) {
      return;
    }
    if (toggle === 'click') {
      setSubOpen(!open);
    }
  };
  const handleClick = e => {
    if (disabled) {
      return;
    }
    handleMenuClose(e);
    if (onLinksClick) {
      onLinksClick(e, props);
    }
    if (onLinkClick) {
      onLinkClick(e, props);
    }
  };
  const handleMenuClose = e => {
    if (itemMenu) {
      setSubOpen(false);
    }
    if (handleParentMenuClose) {
      handleParentMenuClose(e);
    }
  };
  const setSubOpen = open => {
    setOpen(open);
    setHover(open);
    if (itemMenu) {
      if (open) {
        setAnchorEl(menuItemRef.current);
        setIsSubMenuOpen(true);
      } else {
        setAnchorEl(null);
        setIsSubMenuOpen(false);
      }
    }
  };
  const renderDivider = <DividerStyled depth={depth} styles={styles} />;
  const renderItem = () => {
    if (wrapper) {
      if (hasSub) {
        return <Box tabIndex={tabIndex} ref={menuItemRef} onClick={handleToggle} sx={{
          ...sx
        }}>
            {wrapper}
          </Box>;
      } else {
        return wrapper;
      }
    } else {
      return <MenuItemButton depth={depth} menu={menu} itemMenu={itemMenu} direction={direction} toggle={toggle} accordion={accordion} active={active} here={here} hover={hover} open={open} disabled={disabled} collapse={collapse} expand={expand} color={color} styles={styles} tabIndex={tabIndex} menuItemRef={menuItemRef} handleToggle={handleToggle} minimize={minimize} icon={icon} bullet={bullet} badge={badge} title={title} tooltip={tooltip} arrow={arrow} hasSub={hasSub} />;
    }
  };
  const renderItemSub = <Box ref={menuContainerRef} style={{
    pointerEvents: 'auto'
  }}>
      <MenuItemSub depth={depth + 1} menu={itemMenu} accordion={accordion} open={open} hover={hover} expand={expand} scrollbar={sub?.scrollbar} scrollbarSx={sub?.scrollbarSx} wrapper={sub?.wrapper} items={sub?.items} styles={styles} collapse={collapse} onLinksClick={onLinksClick} handleParentMenuClose={handleMenuClose} />
    </Box>;
  const renderItemMenu = () => {
    const handleClose = e => {
      setSubOpen(false);
    };
    return <BaseMenu onClose={handleClose} sx={{
      pointerEvents: toggle === 'click' ? 'auto' : 'none',
      ...(menuWidth && {
        width: menuWidth
      })
    }} anchorEl={anchorEl} {...menuProps && menuProps} open={isSubMenuOpen} autoFocus={false} disableAutoFocus disableEnforceFocus disableScrollLock={true} disableRestoreFocus>
        {renderItemSub}
      </BaseMenu>;
  };
  const renderContent = <Box {...containerProps} component="div" ref={containerRef} tabIndex={tabIndex} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {divider ? renderDivider : renderItem()}

      {!minimize && hasSub && (itemMenu ? renderItemMenu() : renderItemSub)}
    </Box>;
  const renderMain = () => {
    if ((disabled || divider) ?? hasSub) {
      return renderContent;
    }
    if (externalLink) {
      const target = newTab ? '_blank' : '_self';
      return <Link href={path} target={target} rel="noopener" underline="none" onClick={handleClick}>
          {renderContent}
        </Link>;
    }
    return <Link to={path} component={RouterLink} underline="none" onClick={handleClick}>
        {renderContent}
      </Link>;
  };
  return renderMain();
});
const hasActiveChild = (pathname, children) => {
  return false;
  const childrenArray = Children.toArray(children);
  for (const child of childrenArray) {
    if (isValidElement(child) && child.type && child.props.path) {
      if (child.type == MenuItem && matchPath(child.props.path, pathname)) {
        return true;
      } else {
        return hasActiveChild(pathname, child);
      }
    }
  }
  return false;
};
export { MenuItem };