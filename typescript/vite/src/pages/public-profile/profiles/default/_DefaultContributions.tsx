import ApexChart from 'react-apexcharts';

import { KeenIcon } from '@/components';

import { IApexContributionsOptions, IDefaultContributionsProps } from './interfaces';
import { Card1 } from '@/partials/dropdowns/general';

const DefaultContributions = ({ title }: IDefaultContributionsProps) => {
  const options: IApexContributionsOptions = {
    labels: ['ERP', 'HRM', 'DMS', 'CRM', 'DAM'],
    series: [44, 55, 41, 17, 15],
    colors: ['#1B84FF', '#F8285A', '#17C653', '#7239EA', '#F6C000'],
    dataLabels: {
      enabled: false
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>

        <div className="menu" data-menu="true">
          <div
            className="menu-item"
            data-menu-item-trigger="click"
            data-menu-item-toggle="dropdown"
            data-menu-item-placement="bottom-end"
          >
            <button className="btn btn-icon btn-light btn-clear btn-xs menu-toggle">
              <KeenIcon icon="dots-vertical" className="!text-xl" />
            </button>
            
            <Card1 />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center grow px-3 py-1">
        <ApexChart
          id="contributions_chart"
          options={options}
          series={options.series}
          type="donut"
          width="300"
          height="178.7"
        />
      </div>
    </div>
  );
};

export { DefaultContributions };
