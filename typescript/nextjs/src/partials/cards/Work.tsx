import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { IWorkProps } from './interfaces';

const Work = ({ image, url, title, authorAvatar, authorName, likes, comments }: IWorkProps) => {
  return (
    <div className="card border-0">
      <img src={toAbsoluteUrl(`${image}`)} className="w-full h-auto" alt="" />

      <div className="card-border card-rounded-b flex flex-col gap-2 p-5">
        <a href={url} className="text-lg font-semibold text-gray-800 hover:text-primary">
          {title}
        </a>

        <div className="flex items-center justify-between grow">
          <div className="flex items-center grow">
            <img
              src={toAbsoluteUrl(`${authorAvatar}`)}
              className="rounded-full h-[28px] me-2"
              alt=""
            />

            <span className="text-sm font-medium text-gray-700 cursor-pointer hover:text-primary mb-px">
              {authorName}
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <KeenIcon icon="heart" className="text-base text-gray-500" />
              <span className="text-sm font-medium text-gray-700 py-2">{likes}</span>
            </div>

            <div className="flex gap-1 items-center">
              <KeenIcon icon="messages" className="text-base text-gray-500" />
              <span className="text-sm font-medium text-gray-700 py-2">{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Work };
