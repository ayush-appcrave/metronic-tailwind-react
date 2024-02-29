import { KeenIcon } from '@/components';

import { IGetStartedContentItem, IGetStartedOptionsProps } from './interfaces';

const GetStartedOptions = ({ items }: IGetStartedOptionsProps) => {
  const renderProject = (item: IGetStartedContentItem, index: number) => {
    return (
      <div key={index} className="card p-5 lg:p-7.5 lg:pt-7">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <KeenIcon
              icon={item.icon}
              className="text-2xl text-primary hover:text-primary-active"
            />

            <div className="menu" data-menu="true">
              <div
                className="menu-item"
                data-menu-item-trigger="click"
                data-menu-item-toggle="dropdown"
                data-menu-item-placement="bottom-end"
              >
                <button className="btn btn-icon btn-light btn-clear btn-xs menu-toggle">
                  <KeenIcon icon="dots-vertical" className="!text-xl" />
                </button>

                <div className="menu-dropdown w-[175px] text-gray-700 px-3 py-3 text-2xs">
                  Menu content
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="{{ theme.getUrl(item['path']) }}"
              className="text-base font-semibold leading-none text-gray-900 hover:text-primary-active"
            >
              {item.title}
            </a>
            <span className="text-2sm font-medium text-gray-600">{item.desc}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
      {items.map((item, index) => {
        return renderProject(item, index);
      })}
    </div>
  );
};

export { GetStartedOptions };
