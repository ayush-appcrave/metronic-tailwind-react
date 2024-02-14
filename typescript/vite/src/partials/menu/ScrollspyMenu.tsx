import clsx from 'clsx';

import { Scrollspy } from '@/components/scrollspy';

import { IScrollspyMenuItem, IScrollspyMenuItems, IScrollspyMenuProps } from './';

const ScrollspyMenu = ({ items }: IScrollspyMenuProps) => {
  const buildAnchor = (item: IScrollspyMenuItem, indent: boolean = false) => {
    return (
      <div
        className={clsx(
          'flex items-center rounded-lg cursor-pointer pl-2.5 pr-2.5 py-2.5 text-2sm font-medium text-gray-700 hover:text-primary scrollspy-active:bg-secondary-active scrollspy-active:text-primary',
          indent ? 'gap-3.5' : 'gap-1.5'
        )}
      >
        <span className="flex w-1.5 relative before:absolute before:top-0 before:left-px before:size-1.5 before:rounded-full before:-translate-x-2/4 before:-translate-y-2/4 scrollspy-active:before:bg-primary"></span>
        {item.title}
      </div>
    );
  };

  const buildSubAnchors = (items: IScrollspyMenuItems) => {
    return items.map((item, index) => {
      return buildAnchor(item, true);
    });
  };

  const renderChildren = (items: IScrollspyMenuItems) => {
    // eslint-disable-next-line no-unreachable-loop
    return items.map((item, index) => {
      if (item.children) {
        return (
          <div key={`item-${index}`} className="flex flex-col">
            <div className="pl-5 pr-2.5 py-2.5 text-2sm font-semibold text-gray-900">
              {item?.title}
            </div>
            <div className="flex flex-col">{buildSubAnchors(item.children)}</div>
          </div>
        );
      } else {
        return buildAnchor(item);
      }
    });
  };

  return (
    <Scrollspy
      className="flex flex-col grow relative before:absolute before:left-[10px] before:top-0 before:bottom-0 before:border-l before:border-gray-200"
      target={''}
    >
      {renderChildren(items)}
    </Scrollspy>
  );
};

export { ScrollspyMenu };
