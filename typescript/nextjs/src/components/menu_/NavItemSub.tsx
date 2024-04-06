import { Collapse, List } from '@mui/material';
import { forwardRef } from 'react';

import { useResponsiveProp } from '../../hooks/useResponsiveProp';
import { NavItem, type NavItemPropsType, type NavItemSubPropsType } from '..';

const NavItemSub = forwardRef<HTMLDivElement, NavItemSubPropsType>(function NavItemSub(props, ref) {
  const {
    depth,
    menu,
    accordion,
    collapse,
    expand,
    items,
    wrapper,
    styles,
    open,
    scrollbar,
    scrollbarSx,
    onLinksClick,
    handleParentMenuClose
  } = props;

  const renderChildren = () => {
    if (wrapper) {
      return (
        <List ref={ref} component="div" disablePadding>
          {wrapper}
        </List>
      );
    } else {
      return (
        <List ref={ref} component="div" disablePadding>
          {(items as readonly NavItemPropsType[]).map((item, index) => (
            <NavItem
              key={`${index}-${item.title}`}
              depth={depth}
              menu={menu}
              styles={styles}
              collapse={collapse}
              expand={expand}
              handleParentMenuClose={handleParentMenuClose}
              onLinksClick={onLinksClick}
              {...item}
            />
          ))}
        </List>
      );
    }
  };

  const renderScrollbar = () => {
    if (useResponsiveProp(scrollbar)) {
      return renderChildren();
    } else {
      return renderChildren();
    }
  };

  const renderContent = () => {
    if (accordion) {
      return (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {renderScrollbar()}
        </Collapse>
      );
    } else {
      return renderScrollbar();
    }
  };

  return renderContent();
});

export { NavItemSub };
