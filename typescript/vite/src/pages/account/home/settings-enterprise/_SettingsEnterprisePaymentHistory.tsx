import { KeenIcon } from '@/components';

import {
  ISettingsEnterprisePaymentHistoryItem,
  ISettingsEnterprisePaymentHistoryItems
} from './interfaces';
import { Crud2, CrudItem1 } from '@/partials/dropdowns/general';

const SettingsEnterprisePaymentHistory = () => {
  const tables: ISettingsEnterprisePaymentHistoryItems = [
    {
      date: '24 Aug, 2024',
      type: 'Subscription Fee',
      amount: '$24.00'
    },
    {
      date: '15 Sep, 2024',
      type: 'Product Purchase',
      amount: '$50.99'
    },
    {
      date: '05 Dec, 2024',
      type: 'Transaction Fee',
      amount: '$2.50'
    },
    {
      date: '30 May, 2025',
      type: 'Annual Maintenance',
      amount: '$40.20'
    }
  ];

  const renderItem = (table: ISettingsEnterprisePaymentHistoryItem, index: number) => {
    return (
      <tr key={index}>
        <td className="text-sm font-medium text-gray-700">{table.date}</td>

        <td className="text-sm font-medium text-gray-700 lg:text-right">{table.type}</td>

        <td className="text-sm font-medium text-gray-700 lg:text-right">{table.amount}</td>

        <td>
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

              <CrudItem1 />
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="card">
      <div className="card-header gap-2">
        <h3 className="card-title">Payment History</h3>

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

            <Crud2 />
          </div>
        </div>
      </div>
      <div className="card-table scrollable-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="min-w-40">Date</th>
              <th className="min-w-40 lg:text-right">Type</th>
              <th className="min-w-40 lg:text-right">Amount</th>
              <th className="w-8"></th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table, index) => {
              return renderItem(table, index);
            })}
          </tbody>
        </table>
      </div>
      <div className="card-footer justify-center">
        <a href="#" className="btn btn-link">View all Payments</a>
      </div>
    </div>
  );
};

export { SettingsEnterprisePaymentHistory };
