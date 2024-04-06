import { ICompanyStatisticsItem, ICompanyStatisticsProps } from './interfaces';

const CompanyStatistics = ({ items }: ICompanyStatisticsProps) => {
  const renderItems = (item: ICompanyStatisticsItem, index: number) => {
    return (
      <>
        <div className="grid grid-cols-1 place-content-center flex-1 gap-2 text-center">
          <span className="text-gray-800 text-2x lg:text-2.5xl leading-none font-semibold">
            {item.number}
          </span>
          <span className="text-gray-600 text-sm font-medium">{item.label}</span>
        </div>

        {index !== items.length - 1 && <span className="border-r border-r-gray-300 my-1"></span>}
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="flex lg:px-10 lg:py-4 gap-2">
          {items.map((item, index) => {
            return renderItems(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export default  CompanyStatistics ;
