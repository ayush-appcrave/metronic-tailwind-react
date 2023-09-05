import { Collapse, List } from '@mui/material';
import { forwardRef } from 'react';

import { useResponsiveProp } from '../../hooks/useResponsiveProp';
import { NavItem, type NavItemPropsType, type NavItemSubPropsType } from '..';
import Scrollbar from '../scrollbar';

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
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
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
      return <Scrollbar sx={scrollbarSx}>{renderChildren()}</Scrollbar>;
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

    const renderContent = () => {
      if (accordion) {
        return (
          <Collapse in={open} timeout="auto" unmountOnExit>
            {renderChildren()}
          </Collapse>
        );
      } else {
        return renderChildren();
      }
    };

    return renderContent();
  }
);

export { NavItemSub };
