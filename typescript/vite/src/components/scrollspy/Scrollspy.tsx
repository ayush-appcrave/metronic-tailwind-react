import * as React from 'react';
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react';

type ScrollSpyProps = {
  children: ReactNode;
  navContainerRef?: MutableRefObject<HTMLElement | null>;
  parentScrollContainerRef?: MutableRefObject<HTMLElement | null>;
  scrollThrottle?: number;
  onUpdateCallback?: (id: string) => void;
  offsetTop?: number;
  offsetBottom?: number;
  className?: string;
  dataAttribute?: string;
  activeClass?: string;
  updateHistoryStack?: boolean;
};

const Scrollspy = ({
  children,
  navContainerRef,
  parentScrollContainerRef,
  scrollThrottle = 0,
  onUpdateCallback,
  className,
  offsetTop = 0,
  offsetBottom = 0,
  dataAttribute = 'scrollspy',
  activeClass = 'active',
  updateHistoryStack = true
}: ScrollSpyProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [navContainerItems, setNavContainerItems] = useState<NodeListOf<Element> | null>(null);
  const prevIdTracker = useRef<string | null>(null);

  const throttle = (fn: Function, wait: number) => {
    let timeout: any;
    return (...args: any[]) => {
      if (!timeout) {
        fn(...args);
        timeout = setTimeout(() => {
          timeout = null;
        }, wait);
      }
    };
  };

  useEffect(() => {
    if (navContainerRef?.current) {
      const items = navContainerRef.current.querySelectorAll(`[data-${dataAttribute}]`);
      setNavContainerItems(items);
    }
  }, [navContainerRef, dataAttribute]);

  const isVisible = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();

    const elementTop = rect.top - (offsetTop || 0);
    const elementBottom = rect.bottom - (offsetBottom || 0);

    return elementTop <= 0 && elementBottom >= offsetTop;
  };

  const checkAndUpdateActiveScrollSpy = () => {
    const scrollParent = scrollContainerRef.current;
    if (!scrollParent || !navContainerItems) return;

    let foundActive = false;

    // Iterate through each child section to find the first visible one
    for (let i = 0; i < scrollParent.children.length; i++) {
      const child = scrollParent.children[i] as HTMLElement;
      const id = child.id || child.querySelector('[id]')?.id;

      if (id && isVisible(child)) {
        foundActive = true;

        if (prevIdTracker.current !== id) {
          // Update nav item classes
          navContainerItems.forEach((navItem) => {
            const attrId = navItem.getAttribute(`data-${dataAttribute}`);
            navItem.classList.toggle(activeClass, attrId === id);
          });

          prevIdTracker.current = id;

          if (onUpdateCallback) {
            onUpdateCallback(id);
          }

          if (updateHistoryStack) {
            window.history.replaceState({}, '', `#${id}`);
          }
        }
        break;
      }
    }

    if (!foundActive && prevIdTracker.current) {
      navContainerItems.forEach((navItem) => {
        navItem.classList.remove(activeClass);
      });
      prevIdTracker.current = null;
    }
  };

  useEffect(() => {
    const scrollElement = parentScrollContainerRef?.current || window;
    const throttledScroll = throttle(checkAndUpdateActiveScrollSpy, scrollThrottle);

    scrollElement.addEventListener('scroll', throttledScroll);

    return () => {
      scrollElement.removeEventListener('scroll', throttledScroll);
    };
  }, [parentScrollContainerRef, scrollThrottle, navContainerItems]);

  return (
    <div className={className} ref={scrollContainerRef}>
      {children}
    </div>
  );
};

export { Scrollspy };
