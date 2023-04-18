import { memo } from 'react';
import { Collapse, List } from '@mui/material';
import { NavItem, type NavType, type NavItemOptionsType } from '..';

const NavItemSubComponent = ({
  variant = 'popper',
  direction = 'vertical',
  accordion = true,
  height = 'auto',
  maxHeight = 0,
  collapse,
  expand,
  items,
  styles,
  depth = 1,
  open
}: NavType) => {
  const renderChildren = () => {
    return (
      <>
        <List component="div" disablePadding>
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
      </>
    );
  };

  const renderContent = () => {
    if (accordion) {
      return (
        <>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {renderChildren()}
          </Collapse>
        </>
      );
    } else {
      return <>{renderChildren()}</>;
    }
  };

  const renderInline = () => {
    return <>{renderContent()}</>;
  };

  const renderPopper = () => {
    return <>{renderContent()}</>;
  };

  const renderMain = () => {
    if (variant === 'popper') {
      return renderPopper();
    } else {
      return renderInline();
    }
  };

  return renderMain();
};

const NavItemSub = memo(NavItemSubComponent);
export { NavItemSub };
