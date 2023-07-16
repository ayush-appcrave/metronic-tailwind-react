import { Collapse, List } from '@mui/material';
import { forwardRef, memo, useRef } from 'react';

import { NavItem, type NavItemOptionsType, type NavType } from '..';

const NavItemSubComponent = forwardRef<HTMLDivElement, NavType>(function NavItemSubComponent(
  props,
  ref
) {
  const { 
    accordion = true,
    height = 'auto',
    maxHeight = 0,
    collapse,
    expand,
    items,
    styles,
    depth = 1,
    open
   } = props;

  const renderChildren = () => {
    return (
      <List ref={ref} component="div" disablePadding>
        {(items as readonly NavItemOptionsType[]).map((item, index) => (
          <NavItem
            key={`${index}-${item.title}`}
            depth={depth + 1}
            options={item}
            styles={styles}
            collapse={collapse}
            expand={expand}
          />
        ))}
      </List>
    );
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
});

const NavItemSub = memo(NavItemSubComponent);
export { NavItemSub };
