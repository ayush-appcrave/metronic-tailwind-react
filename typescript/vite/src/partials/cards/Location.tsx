import { toAbsoluteUrl } from '@/utils/Assets';

import { ILocationProps } from './interfaces';

const Location = ({ image, title, description }: ILocationProps) => {
  return (
    <div className="card w-[280px] border-0 mb-5">
      <img
        src={toAbsoluteUrl(`/images/content/stock/${image}`)}
        className="rounded-t-xl max-w-[280px] shrink-0"
        alt=""
      />
      <div className="card-border card-rounded-b px-3.5 h-full pt-3 pb-1.5">
        <a href="#" className="font-semibold block text-gray-800 hover:text-primary text-md mb-2">
          {title}
        </a>
        <p className="text-sm font-medium text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export { Location };
