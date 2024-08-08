import ApexChart from 'react-apexcharts';

import { KeenIcon } from '@/components';

import { IApexMediaUploadsOptions } from './interfaces';
import { Card2 } from '@/partials/dropdowns/general';

const DefaultMediaUploads = () => {
  const options: IApexMediaUploadsOptions = {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 6,
      colors: '#f2fcf6',
      strokeColor: '#17C653',
      hover: {
        sizeOffset: 1.5
      }
    },
    stroke: {
      width: 2,
      curve: 'smooth',
      colors: ['#17C653']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.1
      }
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: [
            '#8a919f',
            '#8a919f',
            '#8a919f',
            '#8a919f',
            '#8a919f',
            '#8a919f',
            '#8a919f',
            '#8a919f',
            '#8a919f',
            '#8a919f',
            '#8a919f',
            '#8a919f'
          ],
          fontSize: '11px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#8a919f'],
          fontSize: '11px'
        }
      }
    },
    series: [
      {
        name: 'series 1',
        data: [85, 65, 50, 70, 40, 45, 100, 55, 85, 60, 70, 90]
      }
    ],
    grid: {
      borderColor: '#EBEBEB',
      strokeDashArray: 5
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Media Uploads</h3>

          <div className="menu" data-menu="true">
            <div
              className="menu-item"
              data-menu-item-trigger="click|lg:click"
              data-menu-item-toggle="dropdown"
              data-menu-item-placement="bottom-end"
              data-menu-item-offset="0, 10px"
            >
              <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                <KeenIcon icon="dots-vertical" className="!text-xl" />
              </button>

              <Card2 />
            </div>
          </div>
        </div>
        <div className="px-3 py-1">
          <ApexChart
            id="media_uploads_chart"
            options={options}
            series={options.series}
            type="area"
            width="705"
            height="250"
          />
        </div>
      </div>
    </>
  );
};

export { DefaultMediaUploads };
