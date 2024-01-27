import { Dropdown } from '@mui/base';
import clsx from 'clsx';
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
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
  MenuHeading,
  MenuItemPropsType,
  MenuLink,
  MenuLinkPropsType,
  MenuSub,
  MenuSubPropsType,
  MenuToggleType,
  MenuTriggerType
} from './';

const MenuItem = forwardRef<HTMLDivElement | null, MenuItemPropsType>(
  function MenuItem(props, ref) {
    const {
      path = '',
      toggle = 'accordion',
      trigger = 'click',
      baseMenuProps,
      collapse,
      expand,
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

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => itemRef.current!);

    useImperativeHandle(containerRefProp, () => containerRef.current);

    const containerRef = useRef<HTMLDivElement | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    useImperativeHandle(itemRef, () => {
      return {
        closeMenu: () => {
          setSubOpen(false);
        }
      };
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(containerRef, () => menuItemRef.current!);

    const menuContainerRef = useRef<HTMLDivElement | null>(null);

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const hasSub = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === MenuSub
    );

    const { pathname } = useLocation();

    useEffect(() => {
      if (hasActiveChild(pathname, children)) {
        setShow(true);
        setHere(true);
      }
    }, [pathname]);

    const { match } = useMatchPath(path);

    const propToggle: MenuToggleType = useResponsiveProp(toggle, 'accordion');

    const propTrigger: MenuTriggerType = useResponsiveProp(trigger, 'click');

    const propBaseMenuProps = useResponsiveProp(baseMenuProps);

    const active: boolean = match;

    const [here, setHere] = useState(false);

    const [show, setShow] = useState(false);

    const [transitioning, setTransitioning] = useState(false);

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
      console.log('click!!!');

      if (disabled) {
        return;
      }

      if (propTrigger === 'click') {
        setSubOpen(!show);
      }
    };

    const handleClick = (e: MouseEvent<HTMLElement>) => {
      console.log('click!!!');

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

    const renderChildren = () => {
      const modifiedChildren = Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          if (child.type === MenuLink) {
            // Add some props to each child
            const modifiedProps: MenuLinkPropsType = {
              path,
              hasItemSub: hasSub,
              collapse,
              expand,
              tabIndex,
              onLinkClick,
              onLinksClick,
              handleToggle,
              handleClick,
              menuItemRef
            };

            // Return the child with modified props
            return cloneElement(child, modifiedProps);
          } else if (child.type === MenuHeading) {
            // Add some props to each child
            const modifiedProps: MenuLinkPropsType = {
              collapse,
              expand
            };

            // Return the child with modified props
            return cloneElement(child, modifiedProps);
          } else if (child.type === MenuSub) {
            if (propToggle === 'dropdown') {
              // Add some props to each child
              const modifiedProps: MenuSubPropsType = {
                collapse,
                expand,
                toggle: propToggle,
                handleClick,
                tabIndex,
                ref: menuItemRef
              };

              const modofiedChild = cloneElement(child, modifiedProps);

              const handleClose = (e: MouseEvent<HTMLElement>) => {
                setSubOpen(false);
              };

              return (
                <div
                  {...containerProps}
                  ref={containerRef}
                  tabIndex={tabIndex}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Dropdown
                    style={{ pointerEvents: trigger === 'click' ? 'auto' : 'none' }}
                    ref={menuContainerRef}
                    {...propBaseMenuProps}
                    onClose={handleClose}
                    anchorEl={anchorEl}
                    open={isSubMenuOpen}
                    autoFocus={false}
                    disableAutoFocus
                    disableEnforceFocus
                    disableScrollLock={true}
                    disableRestoreFocus
                  >
                    {modofiedChild}
                  </Dropdown>
                </div>
              );
            } else {
              const handleEnd = () => {
                setTransitioning(false);
              };

              // Add some props to each child
              const modifiedProps: MenuSubPropsType = {
                collapse,
                expand,
                tabIndex,
                show,
                toggle: propToggle,
                handleClick,
                handleEnd
              };

              return cloneElement(child, modifiedProps);
            }
          }
        }

        // Return the child as is if it's not a valid React element
        return child;
      });

      return modifiedChildren;
    };

    return (
      <div
        className={clsx(
          'menu-item',
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
  console.log('length:' + childrenArray.length);

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

export { MenuItem };
