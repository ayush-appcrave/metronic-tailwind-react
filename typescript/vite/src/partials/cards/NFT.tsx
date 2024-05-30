import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { INFTProps } from './interfaces';

const NFT = ({ image, id, title, info, date }: INFTProps) => {
  return (
    <div className="card border-0 mb-5">
      <img
        src={toAbsoluteUrl(`/images/content/600x600/${image}`)}
        className="rounded-t-xl max-w-[270px] shrink-0"
        alt=""
      />

      <div className="card-border card-rounded-b px-3.5 h-full pt-5 pb-3.5">
        <div className="pb-6">
          <a
            href="#"
            className="font-semibold block text-gray-800 hover:text-primary text-md leading-4 mb-2"
          >
            {title}
          </a>
          <div className="text-sm font-medium text-gray-600">
            Token ID:
            <span className="text-sm font-semibold text-gray-800">{id}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col gap-2">
            <span className="text-2sm font-medium text-gray-600">Current bid</span>

            <div className="flex items-center gap-1">
              <KeenIcon icon="xmr" className="text-lg text-brand leading-none" />
              <span className="text-sm font-semibold text-gray-800 leading-none tracking-tight">
                {info}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-self-end text-right gap-2">
            <span className="text-2sm font-medium text-gray-600">Ending in</span>
            <span className="text-2sm font-semibold text-gray-800 leading-none tracking-tight">
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NFT };
