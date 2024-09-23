import React from 'react';

interface IProfileCompanyStatisticsItem {
  number: string;
  label: string;
}

interface IProfileCompanyStatisticsItems extends Array<IProfileCompanyStatisticsItem> {}

interface IProfileCompanyStatisticsProps {
  items: IProfileCompanyStatisticsItem[];
}

const ProfileCompanyStatisticsBlock = ({ items }: IProfileCompanyStatisticsProps) => {
  const renderItems = (item: IProfileCompanyStatisticsItem, index: number) => {
    return (
      <React.Fragment key={index}>
        <div className="grid grid-cols-1 place-content-center flex-1 gap-1 text-center">
          <span className="text-gray-900 text-2xl lg:text-2.5xl leading-none font-semibold">
            {item.number}
          </span>
          <span className="text-gray-600 text-sm font-medium">{item.label}</span>
        </div>

        {index !== items.length - 1 && (
          <span className="[&:not(:last-child)]:border-r border-r-gray-300 my-1"></span>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="flex lg:px-10 py-1.5 gap-2">
          {items.map((item, index) => {
            return renderItems(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export { ProfileCompanyStatisticsBlock, type IProfileCompanyStatisticsItems };
