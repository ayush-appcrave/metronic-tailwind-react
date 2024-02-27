import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { IWorkRowProps } from './interfaces';

const WorkRow = ({
  image,
  description,
  title,
  authorAvatar,
  authorName,
  likes,
  comments
}: IWorkRowProps) => {
  return (
    <div className="card p-5">
      <div className="flex flex-wrap justify-between items-center gap-7">
        <div className="flex flex-wrap items-center gap-5">
          <img
            src={toAbsoluteUrl(`${image}`)}
            className="rounded-md max-h-[80px] max-w-full shrink-0"
            alt=""
          />

          <div className="grid grid-col gap-2">
            <a
              href="#"
              className="text-lg font-semibold text-gray-800 hover:text-primary-active mb-px"
            >
              {title}
            </a>
            <span className="text-sm font-medium text-gray-600">{description}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-7.5">
          <div className="flex items-center gap-1.5">
            <img src={toAbsoluteUrl(`${authorAvatar}`)} className="rounded-full h-[28px]" alt="" />

            <a
              href="#"
              className="text-2sm font-medium text-gray-700 hover:text-primary-active mb-px"
            >
              {authorName}
            </a>
          </div>

          <div className="flex gap-1 items-center">
            <KeenIcon icon="heart" className="text-base text-gray-500" />
            <span className="text-sm font-medium text-gray-700 py-2">{likes}</span>
            <span className="text-2sm font-medium text-gray-700">Likes</span>
          </div>

          <div className="flex gap-1 items-center">
            <KeenIcon icon="messages" className="text-base text-gray-500" />
            <span className="text-sm font-medium text-gray-700 py-2">{comments}</span>
            <span className="text-2sm font-medium text-gray-700">Comments</span>
          </div>

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
  );
};

export { WorkRow };
