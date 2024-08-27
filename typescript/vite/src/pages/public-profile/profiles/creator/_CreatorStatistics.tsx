import React from 'react';
import { ICreatorStatisticsItem, ICreatorStatisticsProps } from './interfaces';

const CreatorStatistics = ({ data }: ICreatorStatisticsProps) => {
  const renderData = (item: ICreatorStatisticsItem, index: number) => {
    return (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-gray-900 text-2xl lg:text-2.5xl font-semibold">{item.value}</span>
          <span className="text-gray-600 text-sm font-medium">{item.title}</span>
        </div>

        {index === 0 && <span className="sm:ml-8 sm:pl-8 border-l border-l-gray-200"></span>}
      </React.Fragment>
    );
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="flex flex-wrap justify-center gap-2 py-1">
          {data.map((item, index) => {
            return renderData(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export { CreatorStatistics };
