import { KeenIcon } from '@/components';

import { ICRMDealsItem, ICRMDealsItems } from './interfaces';

const CRMDeals = () => {
  const items: ICRMDealsItems = [
    {
      name: 'Acme Software License',
      ammount: '5,000',
      date: 30,
      label: 'Ongoing',
      color: 'badge-primary'
    },
    {
      name: 'Strategic Partnership Deal',
      ammount: '12,500',
      date: 45,
      label: 'Closed',
      color: 'badge-success'
    },
    {
      name: 'Client Onboarding',
      ammount: '18,000',
      date: 60,
      label: 'On Hold',
      color: 'badge-warning'
    },
    {
      name: 'Widget Supply Agreement',
      ammount: '3,500',
      date: 10,
      label: 'Canceled',
      color: 'badge-danger'
    },
    {
      name: 'Project X Redesign',
      ammount: '8,200',
      date: 15,
      label: 'Closed',
      color: 'badge-success'
    }
  ];

  const renderItem = (item: ICRMDealsItem, index: number) => {
    return (
      <tr key={index}>
        <td className="text-left">
          <a href="#" className="text-sm font-semibold text-gray-800 hover:text-primary">
            {item.name}
          </a>
        </td>

        <td className="text-sm text-gray-700 font-medium">${item.ammount}</td>

        <td>
          <div className={`badge badge-sm ${item.color} badge-light`}>{item.label}</div>
        </td>

        <td className="text-sm font-medium text-gray-700">{item.date} days</td>

        <td>
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

              <div className="menu-dropdown w-[175px] text-gray-700 px-3 py-3 text-2xs">
                Menu content
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Deals</h3>

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

            <div className="menu-dropdown w-[175px] text-gray-700 px-3 py-3 text-2xs">
              Menu content
            </div>
          </div>
        </div>
      </div>
      <div className="card-table scrollable-x-auto">
        <table className="table text-right">
          <thead>
            <tr>
              <th className="text-left min-w-[150px]">Deal Name</th>
              <th className="min-w-[100px]">Amount</th>
              <th className="min-w-[100px]">Status</th>
              <th className="min-w-[110px]">Duration</th>
              <th className="w-[30px]"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </tbody>
        </table>
      </div>
      <div className="card-footer justify-center">
        <a href="#" className="btn btn-link">
          All Deals
        </a>
      </div>
    </div>
  );
};

export { CRMDeals };
