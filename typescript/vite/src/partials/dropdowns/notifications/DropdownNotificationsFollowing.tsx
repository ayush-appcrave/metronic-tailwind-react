import { ChangeEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getHeight, toAbsoluteUrl } from '@/utils';
import { Link } from 'react-router-dom'; 
import { useViewport } from '@/hooks';
import { 
  DropdownNotificationsItem12,  
} from './items';

const DropdownNotificationsFollowing = () => {   
  const footerRef = useRef<HTMLDivElement>(null);
  const [listHeight, setListHeight] = useState<number>(0);
  const [viewportHeight] = useViewport();
  const offset = 300;

  useEffect(() => {
    if (footerRef.current) {
      const footerHeight = getHeight(footerRef.current);
      const availableHeight = viewportHeight - footerHeight - offset;
      setListHeight(availableHeight);
    }
  }, [viewportHeight]);

  const buildList = () => {
    return (
      <div className="flex flex-col gap-5 pt-3 pb-4 divider-y divider-gray-200">
        <DropdownNotificationsItem12/>

        <div className="border-b border-b-gray-200"></div>
      </div>
    );
  }

  const buildFooter = () => {
    return (
      <>
        <div className="border-b border-b-gray-200"></div>
        <div className="grid grid-cols-2 p-5 gap-2.5">
          <button className="btn btn-sm btn-light justify-center">Archive all</button>
          <button className="btn btn-sm btn-light justify-center">Mark all as read</button>
        </div>
      </>      
    )
  }

  return (
    <div className="grow">
      <div className="scrollable-y-auto" style={{ maxHeight: `${listHeight}px` }}>
        {buildList()}        
      </div>
      <div ref={footerRef}>
        {buildFooter()}        
      </div>
    </div>
  );
};

export { DropdownNotificationsFollowing };
