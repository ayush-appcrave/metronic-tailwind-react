import { ICreatorStatisticsItem, ICreatorStatisticsProps } from './interfaces';

const CreatorStatistics = ({ data }: ICreatorStatisticsProps) => {
  const renderData = (item: ICreatorStatisticsItem, index: number) => {
    return (
      <>
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-900 text-2xl font-semibold">{item.value}</span>
          <span className="text-gray-500 text-sm font-medium">{item.title}</span>
        </div>

        {index === 0 && <span className="sm:ml-8 sm:pl-8 border-l border-l-gray-200"></span>}
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="flex flex-wrap justify-center gap-2">
          {data.map((item, index) => {
            return renderData(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export default  CreatorStatistics ;
