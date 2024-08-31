import ApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { KeenIcon } from '@/components';

import { IApexContributionsOptions, IDefaultContributionsProps } from './interfaces';
import { DropdownCard1 } from '@/partials/dropdowns/general';

const DefaultContributions = ({ title }: IDefaultContributionsProps) => {
  const data: number[] = [44, 55, 41, 17, 15];
  const labels: string[] = ['ERP', 'HRM', 'DMS', 'CRM', 'DAM'];
  const colors: string[] = ['var(--tw-primary)', 'var(--tw-brand)', 'var(--tw-success)', 'var(--tw-info)', 'var(--tw-warning)'];

  const options: IApexContributionsOptions = {
    series: data,
    labels: labels,
    colors: colors,
    fill: {
      colors: colors,
    },
    chart: {
      type: 'donut',
    },
    stroke: {
      show: true,
      width: 2,
      colors: 'var(--tw-light)'
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      }
    },
    legend: {
      offsetY: -10,
      offsetX: -10,
      fontSize: '13px',
      fontWeight: '500',
      itemMargin: {
        vertical: 1
      },
      labels: {
        colors: 'var(--tw-gray-700)',
        useSeriesColors: false
      },
      markers: {
        width: 8,
        height: 8
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>

        <div className="menu" data-menu="true">
          <div
            className="menu-item"
            data-menu-item-trigger="click|lg:click"
            data-menu-item-toggle="dropdown"
            data-menu-item-placement="bottom-end"
            data-menu-item-offset="0, 10px"
          >
            <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
              <KeenIcon icon="dots-vertical" />
            </button>
            
            <DropdownCard1 />
          </div>
        </div>
      </div>

      <div className="card-body flex justify-center items-center px-3 py-1">
        <ApexChart
          id="contributions_chart"
          options={options as ApexOptions}
          series={options.series}
          type="donut"
          width="100%"
          height="178.7"
        />
      </div>
    </div>
  );
};

export { DefaultContributions };
