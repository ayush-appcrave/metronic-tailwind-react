import { Avatars } from '@/partials/common';
import { toAbsoluteUrl } from '@/utils/Assets';

import { INowPlayingProps } from './interfaces';

const NowPlaying = ({ image, logo, title, date, statistics, team, label }: INowPlayingProps) => {
  return (
    <div className="card w-[280px] border-0">
      <img
        src={toAbsoluteUrl(`/images/content/stock/${image}`)}
        className="rounded-t-xl max-w-[280px] shrink-0"
        alt=""
      />

      <div className="card-border card-rounded-b grid h-full gap-6 px-5 py-3.5 mb-5">
        <div className="flex items-center gap-3">
          <img src={toAbsoluteUrl(`/images/content/logos/${logo}`)} className="" alt="" />

          <div className="grid grid-cols-1 gap-0.5">
            <a
              href="#"
              className="text-gray-800 hover:text-primary-active text-md font-semibold mb-px"
            >
              {title}
            </a>

            <span className="flex items-center gap-1.5 text-3xs font-medium text-gray-500">
              {date}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {statistics.map((statistic, index) => (
            <div key={index} className="grid grid-cols-1 gap-1.5 text-center">
              <span className="text-gray-800 text-2sm leading-none font-semibold">
                {statistic.number}%
              </span>
              <span className="text-gray-500 text-xs font-medium">{statistic.description}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center place-content-between gap-2">
          <Avatars group={team.group} more={team.more} />
          <span className="badge badge-xs badge-warning badge-outline">Rank {label}</span>
        </div>
      </div>
    </div>
  );
};

export { NowPlaying };
