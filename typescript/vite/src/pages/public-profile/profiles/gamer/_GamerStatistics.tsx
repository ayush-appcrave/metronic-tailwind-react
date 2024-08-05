import { toAbsoluteUrl } from '@/utils/Assets';

import { IGamerStatisticsItem, IGamerStatisticsProps } from './interfaces';

const GamerStatistics = ({ details }: IGamerStatisticsProps) => {
  const renderData = (item: IGamerStatisticsItem) => {
    return (
      <>
        <div className="grid flex-1">
          <div className="flex justify-self-center items-center gap-3">
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${item.image}`)}
              className="h-10 max-w-full"
              alt=""
            />

            <div className="grid grid-cols-1 place-content-center flex-1">
              <span className="text-gray-900 text-2xl lg:text-2.5xl font-semibold">
                {item.number}
              </span>
              <span className="text-gray-600 text-sm font-medium">{item.label}</span>
            </div>
          </div>
        </div>

        <span className="[&:not(:last-child)]:border-r border-r-gray-300 my-1"></span>
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="flex lg:px-10 py-1 gap-2">
          {details.map((item) => {
            return renderData(item);
          })}
        </div>
      </div>
    </div>
  );
};

export { GamerStatistics };
