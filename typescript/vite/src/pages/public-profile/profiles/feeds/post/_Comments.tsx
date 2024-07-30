import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { ICommentsItem, ICommentsProps } from './interfaces';

const Comments = ({ items, url }: ICommentsProps) => {
  const renderItem = (item: ICommentsItem, index: number) => {
    return (
      <div key={index} className="flex items-start gap-2.5">
        <img
          src={toAbsoluteUrl(`/media/avatars/${item.avatar}`)}
          className="rounded-full w-9 h-9 lg:w-[50px] lg:h-[50px] mt-1"
          alt=""
        />

        <div className="grid gap-2.5 grow">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <a href="#" className="text-md font-semibold text-gray-800 hover:text-primary-active">
                {item.author}
              </a>
              <span className="text-sm font-medium text-gray-500">{item.date}</span>
            </div>

            <div className="justify-center">
              <a href={url} className="btn btn-link">
                Reply
              </a>
            </div>
          </div>

          <p className="text-sm font-medium text-gray-700 heading-5.5">{item.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="grid gap-2 lg:gap-5">
      {items.map((item, index) => {
        return renderItem(item, index);
      })}

      <div className="flex gap-2.5">
        <img
          src={toAbsoluteUrl('/media/avatars/300-3.jpg')}
          className="rounded-full size-10 shrink-0"
          alt=""
        />
        <div className="relative grow">
          <input type="text" className="input w-full" placeholder="your comment.." value="" />
          <button className="btn btn-clear btn-icon btn-sm absolute right-0 top-2/4 -translate-y-2/4 me-1.5">
            <KeenIcon icon="picture" className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Comments };
