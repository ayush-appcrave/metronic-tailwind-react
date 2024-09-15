import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { ICampaignRowItem, ICampaignRowProps } from './types';
import { DropdownCard2 } from '../dropdowns/general';

const CardCampaignRow = ({
  logo,
  logoSize,
  logoDark,
  title,
  description,
  status,
  statistics,
  url
}: ICampaignRowProps) => {
  const renderItem = (statistic: ICampaignRowItem, index: number) => {
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
    <div className="card p-5 lg:p-7.5">
      <div className="flex items-center flex-wrap justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center justify-center w-[50px]">
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

          <div className="">
            <a href={url} className="text-lg font-semibold text-gray-900 hover:text-primary">
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

          <div className="flex justify-center w-20">
            <span className={`badge ${status.variant} badge-outline`}>{status.label}</span>

            <Menu className="items-stretch">
              <MenuItem
                toggle="dropdown"
                trigger="click"
                dropdownProps={{
                  placement: 'bottom-end',
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
                  <KeenIcon icon="dots-vertical" />
                </MenuToggle>
                {DropdownCard2()}
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardCampaignRow };
