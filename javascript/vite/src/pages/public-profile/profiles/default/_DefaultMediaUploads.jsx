import ApexChart from 'react-apexcharts';
import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { DropdownCard2 } from '@/partials/dropdowns/general';
const DefaultMediaUploads = () => {
  const data = [85, 65, 50, 70, 40, 45, 100, 55, 85, 60, 70, 90];
  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const options = {
    series: [{
      name: 'series1',
      data: data
    }],
    chart: {
      height: 250,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: ['var(--tw-primary)']
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: 'var(--tw-gray-500)',
          fontSize: '12px'
        }
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: 'var(--tw-primary)',
          width: 1,
          dashArray: 3
        }
      },
      tooltip: {
        enabled: false,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: 'var(--tw-gray-500)',
          fontSize: '12px'
        },
        formatter: defaultValue => `$${defaultValue}K`
      }
    },
    tooltip: {
      enabled: true,
      custom: ({
        series,
        seriesIndex,
        dataPointIndex,
        w
      }) => {
        const number = parseInt(series[seriesIndex][dataPointIndex]) * 1000;
        const month = w.globals.seriesX[seriesIndex][dataPointIndex];
        const monthName = categories[month];
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        });
        const formattedNumber = formatter.format(number);
        return `
          <div class="flex flex-col gap-2 p-3.5">
            <div class="font-medium text-2sm text-gray-600">${monthName}, 2024 Sales</div>
            <div class="flex items-center gap-1.5">
              <div class="font-semibold text-md text-gray-900">${formattedNumber}</div>
              <span class="badge badge-outline badge-success badge-xs">+24%</span>
            </div>
          </div>
        `;
      }
    },
    markers: {
      size: 0,
      colors: 'var(--tw-primary-light)',
      strokeColors: 'var(--tw-primary)',
      strokeWidth: 4,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      shape: 'circle',
      radius: 2,
      showNullDataPoints: true,
      hover: {
        size: 8,
        sizeOffset: 0
      }
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.25,
        opacityTo: 0
      }
    },
    grid: {
      borderColor: 'var(--tw-gray-200)',
      strokeDashArray: 5,
      clipMarkers: false,
      yaxis: {
        lines: {
          show: true
        }
      },
      xaxis: {
        lines: {
          show: false
        }
      }
    }
  };
  return <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Media Uploads</h3>

          <Menu className="items-stretch">
            <MenuItem toggle="dropdown" trigger="click" dropdownProps={{
            placement: 'bottom-end',
            modifiers: [{
              name: 'offset',
              options: {
                offset: [0, 10] // [skid, distance]
              }
            }]
          }}>
              <MenuToggle className="btn btn-sm btn-icon btn-light btn-clear mb-2.5-">
                <KeenIcon icon="dots-vertical" />
              </MenuToggle>
              {DropdownCard2()}
            </MenuItem>
          </Menu>
        </div>
        <div className="px-3 py-1">
          <ApexChart id="media_uploads_chart" options={options} series={options.series} type="area" width="694" height="250" />
        </div>
      </div>
    </>;
};
export { DefaultMediaUploads };