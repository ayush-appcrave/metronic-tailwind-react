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
  useLayoutEffect,
  useReducer,
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
      handleParentHide,
      onClick,
      containerProps: ContainerPropsProp = {},
      children
    } = props;

    const { ref: containerRefProp, ...containerProps } = ContainerPropsProp;

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const menuItemRef = useRef<HTMLDivElement | null>(null);
     
    const menuContainerRef = useRef<HTMLDivElement | null>(null);

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    
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
        handleHide();
      },
      isOpen: () => {
        return isSubMenuOpen;
      }
    }), [isSubMenuOpen]);

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

      if (hasSub && propToggle === 'dropdown' ) {
        setSubOpen(false);
      }
    }, [pathname]);

    const hasSub = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === MenuSub
    );

    const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
      if (propTrigger === 'hover') {
        setSubOpen(true);

        if (containerProps.onMouseEnter) {
          containerProps.onMouseEnter(e);
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
      if (propTrigger === 'hover') {
        setSubOpen(false);

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
        
        setSubOpen(!show);

        if (propToggle === 'dropdown' && !show && handleParentHide) {
          handleParentHide();
        }
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
    };

    const handleHide = () => {      
      if (hasSub && propToggle === 'dropdown' ) {
        setSubOpen(false);
      }

      if (handleParentHide) {
        handleParentHide();
      }
    };

    const setSubOpen = (state: boolean) => {
      setShow(state);      

      if (propToggle === 'dropdown') {
        if (state) {
          setAnchorEl(menuItemRef.current);
          setIsSubMenuOpen(true);
        } else {
          setAnchorEl(null);      
          setIsSubMenuOpen(false);          
        }
      } else {
        setTransitioning(true);
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
          anchorEl={anchorEl}
          open={isSubMenuOpen}
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
      const handleStart = () => {
        setTransitioning(true);
        setEnter(false);
      };

      const handleEnd = () => {
        setTransitioning(false);
        setEnter(false);
      };

      // Add some props to each child
      const modifiedProps: IMenuSubProps = {
        tabIndex,
        show,
        enter,
        toggle: propToggle,
        handleClick,
        handleStart,
        handleEnd
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