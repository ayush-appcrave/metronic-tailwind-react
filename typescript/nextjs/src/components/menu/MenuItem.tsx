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
import { useRouter } from 'next/router';

import useResponsiveProp from '@/hooks/useResponsiveProp';
import { matchPath } from '@/utils';

import { useMatchPath } from '@/hooks';
import {
  IMenuItemProps,
  IMenuLinkProps,
  IMenuSubProps,
  MenuHeading,
  MenuLink,
  MenuSub,
  MenuToggleType,
  MenuTriggerType
} from './';

const MenuItemComponent = forwardRef<HTMLDivElement | null, IMenuItemProps>(
  function MenuItem(props, ref) {
    const {
      path = '',
      toggle = 'accordion',
      trigger = 'click',
      dropdownProps,
      disabled,
      tabIndex,
      className,
      onLinkClick,
      onLinksClick,
      handleParentClose,
      containerProps: ContainerPropsProp = {},
      itemRef,
      children
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

    const pathname = useRouter().asPath;

    useEffect(() => {
      if (hasActiveChild(pathname, children)) {
        if (propToggle === 'accordion') {
          setShow(true);
        }

        setHere(true);
      }
    }, [pathname]);

    const { match } = useMatchPath(path);

    const propToggle: MenuToggleType = useResponsiveProp(toggle, 'accordion');

    const propTrigger: MenuTriggerType = useResponsiveProp(trigger, 'click');

    const propDropdownProps = useResponsiveProp(dropdownProps);

    const active: boolean = match;

    const [here, setHere] = useState(false);

    const [show, setShow] = useState(false);

    const [transitioning, setTransitioning] = useState(false);

    const [enter, setEnter] = useState(false);

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

      console.log('clicked!!!');
    };

    const handleMenuClose = (e: MouseEvent<HTMLElement>) => {
      if (propToggle === 'dropdown') {
        setSubOpen(false);
      }

      if (handleParentClose) {
        handleParentClose(e);
      }
    };

    const setSubOpen = (state: boolean) => {
      setShow(state);

      if (propToggle === 'dropdown') {
        console.log('state:2' + state);

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
        onLinkClick,
        onLinksClick,
        handleToggle,
        handleClick,
        menuItemRef
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
        tabIndex
      };

      const modofiedChild = cloneElement(child, modifiedProps);

      const handleClose = () => {
        setSubOpen(false);
      };

      return (
        <Popper
          style={{ pointerEvents: trigger === 'click' ? 'auto' : 'none' }}
          {...propDropdownProps}
          anchorEl={anchorEl}
          open={isSubMenuOpen}
          autoFocus={false}
        >
          <div className="menu-container" ref={menuContainerRef} style={{ pointerEvents: 'auto' }}>
            <ClickAwayListener onClickAway={handleClose}>{modofiedChild}</ClickAwayListener>
          </div>
        </Popper>
      );
    };

    const renderSubAccordion = (child: ReactElement) => {
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
        handleEnd
      };

      return cloneElement(child, modifiedProps);
    };

    const renderChildren = () => {
      const modifiedChildren = Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          if (child.type === MenuLink) {
            return renderLink(child);
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
        ref={containerRef}
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
