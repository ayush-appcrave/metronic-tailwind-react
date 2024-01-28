import { Collapse } from '@mui/material';
import clsx from 'clsx';
import { Children, cloneElement, forwardRef, isValidElement, memo } from 'react';

import { MenuItemPropsType, MenuSubPropsType } from './';

const MenuSubComponent = forwardRef<HTMLDivElement | null, MenuSubPropsType>(
  function MenuSub(props, ref) {
    const {
      show,
      enter,
      toggle = 'accordion',
      className,
      onLinksClick,
      handleParentClose,
      handleClick,
      handleEnd,
      children
    } = props;

    const modifiedChildren = Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        // Add some props to each child
        const modifiedProps: MenuItemPropsType = {
          handleParentClose,
          handleClick,
          onLinksClick
        };

        // Return the child with modified props
        return cloneElement(child, modifiedProps);
      }

      // Return the child as is if it's not a valid React element
      return child;
    });

    const renderContent = () => {
      if (toggle === 'accordion') {
        return (
          <Collapse
            in={show}
            onExited={handleEnd}
            onEntered={handleEnd}
            timeout="auto"
            enter={enter}
          >
            {modifiedChildren}
          </Collapse>
        );
      } else {
        return modifiedChildren;
      }
    };

    return (
      <div
        ref={ref}
        className={clsx(
          toggle === 'accordion' && 'menu-accordion',
          toggle === 'dropdown' && 'menu-dropdown',
          className && className
        )}
      >
        {renderContent()}
      </div>
    );
  }
);

const MenuSub = memo(MenuSubComponent);
export { MenuSub };
