import { ClickAwayListener, Popper } from '@mui/base';
import clsx from 'clsx';
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  MouseEvent,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { useLocation } from 'react-router';

import useResponsiveProp from '@/hooks/useResponsiveProp';
import { matchPath } from '@/utils';

import { useMatchPath } from '../../hooks/useMatchPath';
import {
  IMenuItemRef,
  IMenuItemProps,
  IMenuLabelProps,
  IMenuLinkProps,
  IMenuSubProps,
  MenuHeading,
  MenuLabel,
  MenuLink,
  MenuSeparator,
  MenuSub,
  MenuToggleType,
  MenuTriggerType
} from './';

const MenuItemComponent = forwardRef<IMenuItemRef | null, IMenuItemProps>(
  function MenuItem(props, ref) {
    const {
      path = '',
      toggle,
      trigger,
      dropdownProps,
      dropdownZIndex = 100,
      disabled,
      tabIndex,
      className,
      onClick,
      handleParentHide,
      containerProps: ContainerPropsProp = {},
      children
    } = props;

    const { ref: containerRefProp, ...containerProps } = ContainerPropsProp;

    const menuItemRef = useRef<HTMLDivElement | null>(null);
     
    const menuContainerRef = useRef<HTMLDivElement | null>(null);

    const { pathname } = useLocation();

    const { match } = useMatchPath(path);

    const propToggle: MenuToggleType = useResponsiveProp(toggle, 'accordion');

    const propTrigger: MenuTriggerType = useResponsiveProp(trigger, 'click');

    const propDropdownProps = useResponsiveProp(dropdownProps);

    const active: boolean = match;

    const [here, setHere] = useState(false);

    const [show, setShow] = useState(false);

    const [transitioning, setTransitioning] = useState(false);

    const [enter, setEnter] = useState(false);
    
    useImperativeHandle(ref, () => ({      
      current: menuItemRef.current,
      show: () => {
        setShow(true);
      },      
      hide: () => {
        setShow(false);
        handleHide();
      },
      isOpen: () => {
        return show;
      }
    }), [show]);

    useEffect(() => {
      if (hasActiveChild(pathname, children)) {
        if (propToggle === 'accordion') {
          setShow(true);
        }        
        setHere(true);
      } else {
        if (propToggle === 'accordion') {
          setShow(false);
        }
        setHere(false);
      }
    }, [pathname]);

    const hasSub = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === MenuSub
    );

    const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
      if (propTrigger === 'hover') {
        setShow(true);

        if (containerProps.onMouseEnter) {
          containerProps.onMouseEnter(e);
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
      if (propTrigger === 'hover') {
        setShow(false);

        if (containerProps.onMouseLeave) {
          containerProps.onMouseLeave(e);
        }
      }
    };

    const handleToggle = (e: MouseEvent<HTMLElement>) => {
      if (disabled) {
        return;
      }

      if (propTrigger === 'click') {
        if (propToggle === 'accordion') {
          setEnter(true);
        }
        
        setShow(!show);
      }

      if (onClick) {
        onClick(e, props);
      }
    };

    const handleClick = (e: MouseEvent<HTMLElement>) => {
      if (disabled) {
        return;
      }     

      handleHide();

      if (onClick) {
        onClick(e, props);
      }

      console.log('click!');
    };

    const handleHide = () => {     
      console.log('propToggle:', propToggle); 

      if (propToggle === 'dropdown' ) {
        setShow(false);
      }

      if (handleParentHide) {
        console.log('parent hide'); 
        handleParentHide();
      }
    };

    const renderLink = (child: ReactElement) => {
      // Add some props to each child
      const modifiedProps: IMenuLinkProps = {
        path,
        hasItemSub: hasSub,
        tabIndex,
        handleToggle,
        handleClick
      };

      // Return the child with modified props
      return cloneElement(child, modifiedProps);
    };

    const renderLabel = (child: ReactElement) => {
      // Add some props to each child
      const modifiedProps: IMenuLabelProps = {
        hasItemSub: hasSub,
        tabIndex,
        handleToggle,
        handleClick
      };

      // Return the child with modified props
      return cloneElement(child, modifiedProps);
    };

    const renderHeading = (child: ReactElement) => {
      return cloneElement(child);
    };

    const renderSubDropdown = (child: ReactElement) => {
      // Add some props to each child
      const modifiedProps: IMenuSubProps = {
        toggle: propToggle,
        handleClick,
        handleParentHide: handleHide,
        tabIndex,
        menuItemRef:ref
      };

      const modofiedChild = cloneElement(child, modifiedProps);
      
      return (
        <Popper
          style={{ 
            zIndex: dropdownZIndex,
            pointerEvents: trigger === 'click' ? 'auto' : 'none',  
          }}
          {...propDropdownProps}
          anchorEl={show ? menuItemRef.current : null}
          open={show}
          autoFocus={false}
          className={clsx(child.props.rootClassName && child.props.rootClassName)} 
        >
          <ClickAwayListener onClickAway={handleHide}>
            <div 
              className={clsx('menu-container', child.props.baseClassName && child.props.baseClassName)} 
              ref={menuContainerRef} style={{ pointerEvents: 'auto' }}
            >
              {modofiedChild}
            </div>
          </ClickAwayListener>
        </Popper>
      );
    };

    const renderSubAccordion = (child: ReactElement) => {
      const handleEnd = () => {
        setTransitioning(false);
        setEnter(false);
      };

      const handleStart = () => {
        setTransitioning(true);
        setEnter(false);
      };

      // Add some props to each child
      const modifiedProps: IMenuSubProps = {
        tabIndex,
        show,
        enter,
        toggle: propToggle,
        handleClick,
        handleEnd,
        handleStart
      };

      return cloneElement(child, modifiedProps);
    };

    const renderChildren = () => {
      const modifiedChildren = Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          if (child.type === MenuLink) {
            return renderLink(child);
          } else if (child.type === MenuLabel) {
            return renderLabel(child);
          } else if (child.type === MenuHeading) {
            return renderHeading(child);
          } else if (child.type === MenuSub && propToggle === 'dropdown') {
            return renderSubDropdown(child);
          } else if (child.type === MenuSub && propToggle === 'accordion') {
            return renderSubAccordion(child);
          }
        }

        return child;
      });

      return modifiedChildren;
    };

    return (
      <div
        {...containerProps}
        ref={menuItemRef}
        tabIndex={tabIndex}
        {...(propToggle === 'dropdown' && {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        })}
        className={clsx(
          'menu-item',
          propToggle === 'dropdown' && 'menu-item-dropdown',
          className && className,
          active && 'active',
          show && 'show',
          here && 'here',
          transitioning && 'transitioning'
        )}
      >
        {renderChildren()}
      </div>
    );
  }
);

const hasActiveChild = (path: string, children: ReactNode): boolean => {
  const childrenArray: ReactNode[] = Children.toArray(children);

  for (const child of childrenArray) {
    if (isValidElement(child)) {
      if (
        child.type === MenuItem &&
        child.props.path &&
        matchPath(child.props.path as string, path)
      ) {
        return true;
      } else if (hasActiveChild(path, child.props.children as ReactNode)) {
        return true;
      }
    }
  }

  return false;
};

const MenuItem = memo(MenuItemComponent);

export { MenuItem };
