import { Scrollspy } from '@/components';
import { useRef } from 'react';

export interface IScrollspyMenuItem {
  title: string;
  target?: string;
  active?: boolean;
  children?: IScrollspyMenuItem[];
}
export interface IScrollspyMenuItems extends Array<IScrollspyMenuItem> {}

export interface IScrollspyMenuProps {
  items: IScrollspyMenuItem[];
  offset?: string;
}

const ScrollspyMenu = ({ items }: IScrollspyMenuProps) => {
  const buildAnchor = (item: IScrollspyMenuItem, indent: boolean = false) => {
    return (
      <a
        data-scrollspy-anchor={true}
        data-scrollspy={item.target}
        href={`#${item.target}`}
        className={`flex items-center rounded-lg pl-2.5 pr-2.5 py-2.5 border border-transparent text-gray-800 hover:text-primary scrollspy-active:bg-secondary-active scrollspy-active:text-primary scrollspy-active:font-medium dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg dark:scrollspy-active:bg-coal-300 dark:scrollspy-active:border-gray-100 ${
          indent ? 'gap-3.5' : 'gap-1.5'
        } ${item.active ? 'active' : ''} text-2sm font-medium hover:text-primary`}
      >
        <span className="flex w-1.5 relative before:absolute before:top-0 before:left-px before:size-1.5 before:rounded-full before:-translate-x-2/4 before:-translate-y-2/4 scrollspy-active:before:bg-primary"></span>
        {item.title}
      </a>
    );
  };

  const buildSubAnchors = (items: IScrollspyMenuItems) => {
    return items.map((item) => {
      return buildAnchor(item, true);
    });
  };

  const renderChildren = (items: IScrollspyMenuItems) => {
    return items.map((item, index) => {
      if (item.children) {
        return (
          <div key={index} className="flex flex-col">
            <div className="pl-5 pr-2.5 py-2.5 text-2sm font-semibold text-gray-900">
              {item.title}
            </div>
            <div className="flex flex-col">{buildSubAnchors(item.children)}</div>
          </div>
        );
      } else {
        return buildAnchor(item);
      }
    });
  };

  const navRef = useRef<HTMLDivElement | null>(null);

  return (
    <Scrollspy
      offsetTop={110}
      navContainerRef={navRef}
      parentScrollContainerRef={useRef(document.body)}
      className="flex flex-col grow relative before:absolute before:left-[10px] before:top-0 before:bottom-0 before:border-l before:border-gray-200"
    >
      <div ref={navRef}>{renderChildren(items)}</div>
    </Scrollspy>
  );
};

export { ScrollspyMenu };
