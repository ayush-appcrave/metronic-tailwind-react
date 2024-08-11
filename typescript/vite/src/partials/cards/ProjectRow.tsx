import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { Avatars } from '../common';
import { IProjectRowProps } from './interfaces';
import { Card2 } from '../dropdowns/general';

const ProjectRow = ({ logo, name, description, status, progress, team }: IProjectRowProps) => {
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
            <Avatars group={team.group} size={team.size} more={team.more} />

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

                <Card2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectRow };
