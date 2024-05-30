import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { ICampaignRowItem, ICampaignRowProps } from './interfaces';

const CampaignRow = ({ logo, title, description, status, statistics, url }: ICampaignRowProps) => {
  const renderItem = (statistic: ICampaignRowItem, index: number) => {
    return (
      <div
        key={index}
        className="grid grid-cols-1 gap-1.5 border border-dashed border-gray-300 rounded-md px-2.5 py-2"
      >
        <span className="text-gray-800 text-2sm leading-none font-semibold">{statistic.total}</span>
        <span className="text-gray-500 text-xs font-medium">{statistic.description}</span>
      </div>
    );
  };

  return (
    <div className="card p-5 lg:p-7.5">
      <div className="flex items-center flex-wrap justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <img
            src={toAbsoluteUrl(`/images/content/brand-logos/${logo}`)}
            className="size-[50px] shrink-0"
            alt=""
          />

          <div className="">
            <a href={url} className="text-lg font-semibold text-gray-800 hover:text-primary">
              {title}
            </a>

            <div className="flex items-center text-sm font-medium text-gray-600">{description}</div>
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between gap-5 lg:gap-12">
          <div className="flex items-center flex-wrap gap-2 lg:gap-5">
            {statistics.map((statistic, index) => {
              return renderItem(statistic, index);
            })}
          </div>

          <div className="flex items-center gap-5 lg:gap-12">
            <span className={`badge badge-md ${status.variant} badge-outline`}>{status.label}</span>

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
        </div>
      </div>
    </div>
  );
};

export { CampaignRow };
