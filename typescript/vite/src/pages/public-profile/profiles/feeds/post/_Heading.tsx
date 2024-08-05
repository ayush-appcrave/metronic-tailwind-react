import { KeenIcon } from '@/components';
import { Avatar } from '@/partials/common';

import { IHeadingProps } from './interfaces';

const Heading = ({ author, avatar, date }: IHeadingProps) => {
  return (
    <div className="flex justify-between items-center mb-5 p-7.5 pb-0">
      <div className="flex items-center gap-3">
        <Avatar
          image={avatar.image}
          imageClass={avatar.imageClass}
          icon={avatar.icon}
          iconClass={avatar.iconClass}
          className={avatar.className}
        />

        <div className="flex flex-col">
          <a
            href="#"
            className="text-md font-semibold text-gray-900 hover:text-primary-active mb-1"
          >
            {author}
          </a>
          <time className="text-sm font-medium text-gray-600">{date}</time>
        </div>
      </div>

      <div className="menu" data-menu="true">
        <div
          className="menu-item"
          data-menu-item-trigger="click"
          data-menu-item-toggle="dropdown"
          data-menu-item-placement="bottom-end"
        >
          <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
            <KeenIcon icon="dots-vertical" />
          </button>

          <div className="menu-dropdown w-[175px] text-gray-700 px-3 py-3 text-2xs">
            Menu content
          </div>
        </div>
      </div>
    </div>
  );
};

export { Heading };
