import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { CommonAvatars } from '../common';
import { IProjectExtendedItem, IProjectExtendedProps } from './types';
import { DropdownCard2 } from '../dropdowns/general';

const CardProjectExtended = ({
  status,
  logo,
  title,
  description,
  team,
  statistics,
  progress,
  url
}: IProjectExtendedProps) => {
  const renderItem = (statistic: IProjectExtendedItem, index: number) => {
    return (
      <div
        key={index}
        className="grid grid-cols-1 content-between gap-1.5 border border-dashed border-gray-300 shrink-0 rounded-md px-2.5 py-2 min-w-24 max-w-auto"
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

          <Menu className="items-stretch">
            <MenuItem 
              toggle="dropdown"
              trigger="click"
              dropdownProps={{
                placement: "bottom-end",
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 10] // [skid, distance]
                    }
                  }
                ]
              }}
            >
              <MenuToggle className="btn btn-sm btn-icon btn-light btn-clear mb-2.5-">
                <KeenIcon icon="dots-vertical"/>
              </MenuToggle>
              {DropdownCard2()}
            </MenuItem>
          </Menu>
        </div>

        <div className="flex justify-center mb-2">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
            className="min-w-12 shrink-0"
            alt=""
          />
        </div>

        <div className="text-center mb-7">
          <a href={url} className="text-lg font-semibold text-gray-900 hover:text-primary">
            {title}
          </a>

          <div className="text-sm font-medium text-gray-600">{description}</div>
        </div>

        <div className="grid justify-center gap-1.5 mb-7.5">
          <span className="text-2xs font-medium uppercase text-gray-500 text-center">team</span>
          <CommonAvatars group={team.group} size={team.size} />
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

export { CardProjectExtended };
