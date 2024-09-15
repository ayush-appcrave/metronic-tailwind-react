/* eslint-disable react-hooks/exhaustive-deps */
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
  MenuSub,
  MenuToggleType,
  MenuTriggerType,
  IMenuToggleProps,
  MenuToggle,
  useMenu
} from './';

const MenuItemComponent = forwardRef<IMenuItemRef | null, IMenuItemProps>(
  function MenuItem(props, ref) {
    const {
      toggle,
      trigger,
      dropdownProps,
      dropdownZIndex = 100,
      disabled,
      tabIndex,
      className,
      handleParentHide,
      onShow,
      onHide,
      onClick,
      containerProps: ContainerPropsProp = {},
      children,
      level = 0,
      index = 0
    } = props;

    const {...containerProps} = ContainerPropsProp;

    const menuItemRef = useRef<HTMLDivElement | null>(null);

    const path = props.path || getLinkPath(children);

    const {disabled: isMenuDisabled, highlight, multipleExpand, setOpenAccordion, isOpenAccordion } = useMenu();
     
    const menuContainerRef = useRef<HTMLDivElement | null>(null);
    
    const { pathname } = useLocation();

    const { match } = useMatchPath(path);

    const propToggle: MenuToggleType = useResponsiveProp(toggle, 'accordion');

    const propTrigger: MenuTriggerType = useResponsiveProp(trigger, 'click');

    const propDropdownProps = useResponsiveProp(dropdownProps);

    const active: boolean = highlight ? (path.length > 0 && match) : false;

    const [here, setHere] = useState(false);

    const [show, setShow] = useState(false);

    const accordionShow = isOpenAccordion(level, index);

    const [transitioning, setTransitioning] = useState(false);

    const [accordionEnter, setAccordionEnter] = useState(false);

    const hasSub = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === MenuSub
    );
    const handleHide = () => { 
      if (hasSub) {
        setShow(false);
      }

      if (hasSub && propToggle === 'accordion' && multipleExpand === false) {
        setOpenAccordion(level, -1);
      } 

      if (handleParentHide) {
        handleParentHide();
      }
    };

    const handleShow = () => {
      if (hasSub) {
        setShow(true);
      }

      if (hasSub && propToggle === 'accordion' && multipleExpand === false) {    
        setOpenAccordion(level, index);      
      }
    }

    const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
      if (isMenuDisabled) return;

      if (propTrigger === 'hover') {
        setShow(true);

        if (containerProps.onMouseEnter) {
          containerProps.onMouseEnter(e);
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
      if (isMenuDisabled) return;

      if (propTrigger === 'hover') {
        setShow(false);

        if (containerProps.onMouseLeave) {
          containerProps.onMouseLeave(e);
        }
      }
    };

    const handleToggle = (e: MouseEvent<HTMLElement>) => {
      if (isMenuDisabled) return;

      if (disabled) return;
      
      if (show) {
        if (propToggle === 'accordion') {
          setAccordionEnter(true);
        }

        handleHide();
        
      } else {
        if (propToggle === 'accordion') {
          setAccordionEnter(true);
        }
        handleShow();        
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
    };

    const renderLink = (child: ReactElement) => {
      // Add some props to each child
      const modifiedProps: IMenuLinkProps = {
        hasItemSub: hasSub,
        tabIndex,
        handleToggle,
        handleClick
      };

      // Return the child with modified props
      return cloneElement(child, modifiedProps);
    };

    const renderToggle = (child: ReactElement) => {
      // Add some props to each child
      const modifiedProps: IMenuToggleProps = {
        hasItemSub: hasSub,
        tabIndex,
        handleToggle
      };

      // Return the child with modified props
      return cloneElement(child, modifiedProps);
    };

    const renderLabel = (child: ReactElement) => {
      // Add some props to each child
      const modifiedProps: IMenuLabelProps = {
        tabIndex
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
        level: level+1,
        toggle: propToggle,
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
      const handleEntered = () => {
        setTransitioning(true);
      };

      const handleExited = () => {
        setTransitioning(true);
        setAccordionEnter(true);
      };

      // Add some props to each child
      const modifiedProps: IMenuSubProps = {
        level: level+1,
        tabIndex,
        show,
        enter: accordionEnter,
        toggle: propToggle,
        handleClick,
        handleEntered,
        handleExited
      };

      return cloneElement(child, modifiedProps);
    };

    const renderChildren = () => {
      const modifiedChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
          if (child.type === MenuLink) {
            return renderLink(child);
          } else if (child.type === MenuToggle) {
            return renderToggle(child);
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

    useImperativeHandle(ref, () => ({      
      current: menuItemRef.current,
      show: () => {
        handleShow();
      },
      hide: () => {
        handleHide();
      },
      isOpen: () => {
        return show;
      }
    }), [show]);

    useEffect(() => {
      if (show) {
        if (onShow) {
          onShow();
        }
      } else {
        if (onHide) {
          onHide();
        }
      }
    }, [show]);

    useEffect(() => {
      if (propToggle === 'accordion' && multipleExpand === false) {
        setShow(accordionShow);
      } 
    }, [accordionShow]);

    useEffect(() => {            
      if (highlight) {
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
      };     

      if (hasSub && propToggle === 'dropdown' ) {
        handleHide();
      }
    }, [pathname]);

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

const getLinkPath = (children: ReactNode): string  => {
  let path = '';

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === MenuLink && child.props.path) {
      path = child.props.path; // Assign the path when found
    }
  });

  return path;
};

const hasActiveChild = (path: string, children: ReactNode): boolean => {
  const childrenArray: ReactNode[] = Children.toArray(children);

  for (const child of childrenArray) {
    if (isValidElement(child)) {      
      if (child.type === MenuLink && child.props.path) {
        if (path === '/') {
          if (child.props.path === path) {
            return true;
          }          
        } else {
          if (matchPath(child.props.path as string, path)) {
            return true;
          }          
        }        
      } else if (hasActiveChild(path, child.props.children as ReactNode)) {
        return true;
      }
    }
  }

  return false;
};

const MenuItem = memo(MenuItemComponent);
export { MenuItem };