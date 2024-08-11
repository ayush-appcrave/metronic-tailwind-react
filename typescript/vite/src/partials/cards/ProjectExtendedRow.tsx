import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { Avatars } from '../common';
import { IProjectExtendedRowItem, IProjectExtendedRowProps } from './interfaces';
import { Card2 } from '../dropdowns/general';

const ProjectExtendedRow = ({
  status,
  logo,
  title,
  description,
  team,
  statistics,
  url
}: IProjectExtendedRowProps) => {
  const renderItem = (statistic: IProjectExtendedRowItem, index: number) => {
    return (
      <div
        key={index}
        className="grid grid-cols-1 content-between gap-1.5 border border-dashed border-gray-300 shrink-0 rounded-md px-2.5 py-2 min-w-24 max-w-auto"
      >
        <span className="text-gray-900 text-2sm leading-none font-semibold">{statistic.total}</span>
        <span className="text-gray-600 text-xs font-medium">{statistic.description}</span>
      </div>
    );
  };

  return (
    <div className="card p-7.5">
      <div className="flex items-center flex-wrap justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center justify-center min-w-12">
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
              className="min-w-12 shrink-0"
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <a href={url} className="text-lg font-semibold text-gray-900 hover:text-primary">
              {title}
            </a>

            <div className="text-sm font-medium text-gray-600">{description}</div>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-5 lg:gap-12">
          <div className="flex items-center flex-wrap gap-5 lg:gap-14">
            <div className="flex items-center lg:justify-center flex-wrap gap-2 lg:gap-5">
              {statistics.map((statistic, index) => {
                return renderItem(statistic, index);
              })}
            </div>

            <div className="w-[125px] shrink-0">
              <span className={`badge badge-md ${status.variant} badge-outline`}>{status.label}</span>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:gap-14">
            <div className="grid justify-end  min-w-24">
              <Avatars group={team.group} size={team.size} />
            </div>

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
        </div>
      </div>
    </div>
  );
};

export { ProjectExtendedRow };
