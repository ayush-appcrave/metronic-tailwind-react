import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { CommonAvatars } from '../common';
import { IProjectRowProps } from './types';
import { DropdownCard2 } from '../dropdowns/general';

const CardProjectRow = ({ logo, name, description, status, progress, team }: IProjectRowProps) => {
  return (
    <div className="card p-7">
      <div className="flex items-center flex-wrap justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center justify-center size-14 shrink-0 rounded-lg bg-gray-100">
            <img src={toAbsoluteUrl(`/media/brand-logos/${logo}`)} className="" alt="" />
          </div>

          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-semibold text-gray-800 hover:text-primary-active mb-px"
            >
              {name}
            </a>
            <span className="text-sm font-normal text-gray-600">{description}</span>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-5 lg:gap-20">
          <div className="flex items-center flex-wrap gap-5 lg:gap-14">
            <span className={`badge badge-md ${status.variant} badge-outline`}>{status.label}</span>

            <div className={`progress h-1.5 w-36 ${progress.variant}`}>
              <div className="progress-bar" style={{ width: `${progress.value}%` }}></div>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:gap-14">
            <CommonAvatars group={team.group} size={team.size} more={team.more} />

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
        </div>
      </div>
    </div>
  );
};

export { CardProjectRow };
