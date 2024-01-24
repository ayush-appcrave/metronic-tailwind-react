import clsx from 'clsx';
import { Menu as BaseMenu } from '@mui/base';
import { Children, cloneElement, forwardRef, isValidElement, MouseEvent, ReactElement, ReactNodeArray, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { matchPath } from '../../utils/Router';
import { MenuSub, MenuLink, MenuItemPropsType, MenuLinkPropsType, MenuSubPropsType } from './';
import { useLocation } from 'react-router';
import { useMatchPath } from '../../hooks/useMatchPath';
import useResponsiveProp from '@/hooks/useResponsiveProp';

const MenuItem = forwardRef<HTMLDivElement | null, MenuItemPropsType>(
  function MenuItem(props, ref) {
    const {
      path = ' ',
      toggle = 'accordion',
      trigger = 'click',
      baseMenuProps,
      collapse = false,
      expand = false,
      disabled,
      tabIndex,
      className,
      onLinkClick,
      onLinksClick,
      handleParentClose,
      containerProps: ContainerPropsProp = {},
      itemRef,
      children,
    } = props;

    const { ref: containerRefProp, ...containerProps } = ContainerPropsProp;

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const menuItemRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => itemRef.current!);

    useImperativeHandle(containerRefProp, () => containerRef.current);

    const containerRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(itemRef, () => {
      return {
        closeMenu: () => {
          setSubOpen(false);
        }
      };
    });

    useImperativeHandle(containerRef, () => menuItemRef.current!);

    const menuContainerRef = useRef<HTMLDivElement | null>(null);

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const hasSub = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === MenuSub
    );

    const { pathname } = useLocation();

    useEffect(() => {
      if (match) {
        setShow(true);
      }
    }, [pathname]);

    const { match } = useMatchPath(path);

    const propToggle = useResponsiveProp(toggle, 'dropdown');

    const propBaseMenuProps = useResponsiveProp(baseMenuProps);

    const propTrigger = useResponsiveProp(trigger, 'click');

    const minimize: boolean | undefined = collapse && !expand;

    const here: boolean = hasSub ? hasActiveChild(pathname, children) : false;

    const active: boolean = match;

    const [show, setShow] = useState(propToggle === 'accordion' ? here : false);

    const [hover, setHover] = useState(false);    

    const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
      setHover(true);

      if (propTrigger === 'hover') {
        setSubOpen(true);

        if (containerProps.onMouseEnter) {
          containerProps.onMouseEnter(e);
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
      setHover(false);

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
        setSubOpen(!show);
      }
    };

    const handleClick = (e: MouseEvent<HTMLElement>) => {
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

    const handleMenuClose = (e: MouseEvent<HTMLElement>) => {
      if (propToggle === 'dropdown') {
        setSubOpen(false);
      }

      if (handleParentClose) {
        handleParentClose(e);
      }
    };

    const setSubOpen = (show: boolean) => {
      setShow(show);
      setHover(show);

      if (propToggle === 'dropdown') {
        if (show) {
          setAnchorEl(menuItemRef.current);
          setIsSubMenuOpen(true);
        } else {
          setAnchorEl(null);
          setIsSubMenuOpen(false);
        }
      }
    };

    const renderChildren = () => {
      const modifiedChildren = Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          if (child.props.name === 'MenuLink') {
            // Add some props to each child
            const modifiedProps: MenuLinkPropsType = {
              collapse,
              expand,              
              onLinkClick,
              onLinksClick,
              tabIndex,
              handleToggle,
              menuItemRef
            };
      
            // Return the child with modified props
            return cloneElement(child, modifiedProps);
          } else if (child.props.name === 'MenuHeading') {
            // Add some props to each child
            const modifiedProps: MenuLinkPropsType = {
              collapse,
              expand,
            };
      
            // Return the child with modified props
            return cloneElement(child, modifiedProps);
          } else if (child.props.name === 'MenuSub') {
            if (toggle === 'dropdown') {
              // Add some props to each child
              const modifiedProps: MenuSubPropsType = {
                collapse,
                expand,
                show,
                tabIndex,
                ref={menuItemRef}
                onClick={handleToggle}
              };
        
              // Return the child with modified props
              const modofiedChild = cloneElement(child, modifiedProps);

              const handleClose = (e: MouseEvent<HTMLElement>) => {
                setSubOpen(false);
              };            

              return <div 
                {...containerProps} 
                ref={containerRef} 
                tabIndex={tabIndex} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>
                  <BaseMenu
                    onClose={handleClose}
                    style={{pointerEvents: toggle === 'click' ? 'auto' : 'none'}}
                    anchorEl={anchorEl}
                    {...(baseMenuProps && baseMenuProps)}
                    open={isSubMenuOpen}
                    autoFocus={false}
                    disableAutoFocus
                    disableEnforceFocus
                    disableScrollLock={true}
                    disableRestoreFocus
                  >
                    {modofiedChild}
                  </BaseMenu>                
              </div>
            } else {
              // Add some props to each child
              const modifiedProps: MenuSubPropsType = {
                collapse,
                expand,
                show,
                tabIndex,
                ref={menuItemRef}
                onClick={handleToggle}
              };
      
              // Return the child with modified props
              return cloneElement(child, modifiedProps);
            }            
          }
        }
    
        // Return the child as is if it's not a valid React element
        return child;
      });

      return modifiedChildren;
    };
  
    return <div className={clsx('menu-item', className && className, active && 'active', show && 'show', hover && 'hover', here && 'here')}>{renderChildren()}</div>;
  }
);

const hasActiveChild = (pathname: string, children: any): boolean => {
  const childrenArray = Children.toArray(children);
  for (const child of childrenArray) {
    if (isValidElement(child)) { 
      if (child.props.name === "MenuItem" && child.props.path && matchPath(child.props.path, pathname)) {
        return true;
      } else {
        return hasActiveChild(pathname, child);
      }
    }
  }

  return false;
};

export { MenuItem };
