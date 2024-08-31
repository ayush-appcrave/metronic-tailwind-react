import { KeenIcon } from '@/components';

import { IGetStartedContentItem, IGetStartedOptionsProps } from './interfaces';
import { DropdownCrud2 } from '@/partials/dropdowns/general';
import { Link } from 'react-router-dom';

const GetStartedOptions = ({ items, dropdown }: IGetStartedOptionsProps) => {
  const renderProject = (item: IGetStartedContentItem, index: number) => {
    return (
      <div key={index} className="card p-5 lg:p-7.5 lg:pt-7">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <KeenIcon icon={item.icon} className="text-2xl link" />

            {dropdown && (
              <div className="menu" data-menu="true">
                <div
                  className="menu-item"
                  data-menu-item-trigger="click|lg:click"
                  data-menu-item-toggle="dropdown"
                  data-menu-item-placement="bottom-end"
                  data-menu-item-offset="0, 10px"
                >
                  <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                    <KeenIcon icon="dots-vertical" />
                  </button>

                  <DropdownCrud2 />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Link 
              to={`/${item.path}`} 
              className="text-base font-semibold leading-none text-gray-900 hover:text-primary-active"
            >
              {item.title}
            </Link>
            <span className="text-2sm font-medium text-gray-600 leading-5">{item.desc}</span>
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
