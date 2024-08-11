import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { ICampaignItem, ICampaignProps } from './interfaces';
import { Card2 } from '../dropdowns/general';

const Campaign = ({
  logo,
  logoSize,
  logoDark,
  title,
  description,
  status,
  statistics,
  progress,
  url
}: ICampaignProps) => {
  const renderItem = (statistic: ICampaignItem, index: number) => {
    return (
      <div
        key={index}
        className="flex flex-col gap-1.5 border border-dashed border-gray-300 rounded-md px-2.5 py-2"
      >
        <span className="text-gray-900 text-sm leading-none font-semibold">{statistic.total}</span>
        <span className="text-gray-600 text-xs font-medium">{statistic.description}</span>
      </div>
    );
  };

  return (
    <div className="card overflow-hidden grow justify-between">
      <div className="p-5 mb-5">
        <div className="flex items-center justify-between mb-5">
          <span className={`badge ${status.variant} badge-outline`}>{status.label}</span>

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

              <Card2 />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-[50px] mb-2">
          {logoDark ? (
            <>
              <img
                src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
                className={`dark:hidden size-[${logoSize}] shrink-0`}
                alt=""
              />
              <img
                src={toAbsoluteUrl(`/media/brand-logos/${logoDark}`)}
                className={`light:hidden size-[${logoSize}] shrink-0`}
                alt=""
              />
            </>
          ) : (
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
              className={`size-[${logoSize}] shrink-0`}
              alt=""
            />
          )}
        </div>

        <div className="text-center mb-7">
          <a href={url} className="text-lg font-semibold text-gray-900 hover:text-primary">
            {title}
          </a>

          <div className="text-sm font-medium text-gray-600">{description}</div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2 lg:gap-5">
          {statistics.map((statistic, index) => {
            return renderItem(statistic, index);
          })}
        </div>
      </div>

      <div className={`progress ${progress.variant}`}>
        <div className="progress-bar" style={{ width: `${progress.value}%` }}></div>
      </div>
    </div>
  );
};

export { Campaign };
