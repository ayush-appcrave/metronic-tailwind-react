import * as React from 'react';
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react';
import { throttle } from '@/utils';

interface ScrollSpyProps {
  children: ReactNode;

  // refs
  navContainerRef?: MutableRefObject<HTMLDivElement | null>;
  parentScrollContainerRef?: MutableRefObject<HTMLDivElement | null>;

  // throttle
  scrollThrottle?: number;

  // callback
  onUpdateCallback?: (id: string) => void;

  // offsets
  offsetTop?: number;
  offsetBottom?: number;

  // customize attributes
  dataAttribute?: string;
  activeClass?: string;

  useBoxMethod?: boolean;
  updateHistoryStack?: boolean;
}

const Scrollspy = ({
  children,

  // refs
  navContainerRef,
  parentScrollContainerRef,

  // throttle
  scrollThrottle = 300,

  // callback
  onUpdateCallback,

  // offsets
  offsetTop = 0,
  offsetBottom = 0,

  // customize attributes
  dataAttribute = 'to-scrollspy-id',
  activeClass = 'active',

  useBoxMethod = true,
  updateHistoryStack = true
}: ScrollSpyProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [navContainerItems, setNavContainerItems] = useState<NodeListOf<Element> | undefined>(); // prettier-ignore

  const prevIdTracker = useRef('');

  useEffect(() => {
    navContainerRef
      ? setNavContainerItems(navContainerRef.current!.querySelectorAll(`[data-${dataAttribute}]`))
      : setNavContainerItems(document.querySelectorAll(`[data-${dataAttribute}]`));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navContainerRef]);

  useEffect(() => {
    checkAndUpdateActiveScrollSpy();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navContainerItems]);

  const isVisible = (el: HTMLElement) => {
    const rectInView = el.getBoundingClientRect();

    if (useBoxMethod) {
      const useHeight = parentScrollContainerRef?.current
        ? parentScrollContainerRef.current!.offsetHeight
        : window.innerHeight;
      const hitbox_top = useHeight;
      const element_top = rectInView.top;
      const element_bottom = rectInView.top + useHeight;

      return hitbox_top < element_bottom + offsetBottom && hitbox_top > element_top - offsetTop;
    } else {
      const leniency = parentScrollContainerRef?.current
        ? parentScrollContainerRef.current!.offsetHeight * 0.5
        : window.innerHeight * 0.5;

      const useHeight = parentScrollContainerRef?.current
        ? parentScrollContainerRef?.current!.offsetHeight
        : window.innerHeight;

      return (
        rectInView.top + leniency + offsetTop >= 0 &&
        rectInView.bottom - leniency - offsetBottom <= useHeight
      );
    }
  };

  const checkAndUpdateActiveScrollSpy = () => {
    const scrollParentContainer = scrollContainerRef.current;

    if (!(scrollParentContainer && navContainerItems)) return;

    for (let i = 0; i < scrollParentContainer.children.length; i++) {
      // get child element
      const useChild = scrollParentContainer.children.item(i) as HTMLDivElement;

      const elementIsVisible = isVisible(useChild);

      if (elementIsVisible) {
        const changeHighlightedItemId = useChild.id;
        if (prevIdTracker.current === changeHighlightedItemId) return;
        navContainerItems.forEach((el) => {
          const attrId = el.getAttribute(`data-${dataAttribute}`);
          if (el.classList.contains(activeClass ?? 'active')) {
            el.classList.remove(activeClass ?? 'active');
          }
          if (
            attrId === changeHighlightedItemId &&
            !el.classList.contains(activeClass ?? 'active')
          ) {
            el.classList.add(activeClass ?? 'active');
            if (onUpdateCallback) {
              onUpdateCallback(changeHighlightedItemId);
            }
            prevIdTracker.current = changeHighlightedItemId;
            if (updateHistoryStack) {
              window.history.replaceState({}, '', `#${changeHighlightedItemId}`);
            }
          }
        });
        break;
      }
    }
  };

  useEffect(() => {
    parentScrollContainerRef
      ? parentScrollContainerRef.current!.addEventListener('scroll', () => {
          throttle(checkAndUpdateActiveScrollSpy, scrollThrottle);
          console.log(parentScrollContainerRef);
        })
      : window.addEventListener('scroll', throttle(checkAndUpdateActiveScrollSpy, scrollThrottle));
  });

  return <div ref={scrollContainerRef}>{children}</div>;
};

export default Scrollspy;
