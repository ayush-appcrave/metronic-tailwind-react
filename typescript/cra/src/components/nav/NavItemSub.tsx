import { Collapse, List } from '@mui/material';
import { forwardRef, memo } from 'react';

import { NavItem, type NavItemPropsType, type NavItemSubPropsType } from '..';

const NavItemSubComponent = forwardRef<HTMLDivElement, NavItemSubPropsType>(
  function NavItemSubComponent(props, ref) {
    const { depth, menu, accordion, collapse, expand, items, styles, open } = props;

    const renderChildren = () => {
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
              {...item}
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
  }
);

const NavItemSub = memo(NavItemSubComponent);
export { NavItemSub };
