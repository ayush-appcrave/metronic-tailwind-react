import { KeenIcon } from '@/components';

import { ICRMRecentInvoicesItem, ICRMRecentInvoicesItems } from './interfaces';
import { Card2, CardItem2 } from '@/partials/dropdowns/general';

const CRMRecentInvoices = () => {
  const items: ICRMRecentInvoicesItems = [
    {
      icon: 'cheque',
      number: 'INV-2023-001',
      date: '15 Nov, 2023',
      ammount: '500.00'
    },
    {
      icon: 'tag',
      number: 'INV-2023-002',
      date: '30 Nov, 2023',
      ammount: '750.00'
    },
    {
      icon: 'discount',
      number: 'INV-2023-003',
      date: '10 Dec, 2023',
      ammount: '1,200.00'
    },
    {
      icon: 'purchase',
      number: 'INV-2023-004',
      date: '05 Dec, 2023',
      ammount: '300.00'
    },
    {
      icon: 'shop',
      number: 'INV-2023-005',
      date: '20 Nov, 2023',
      ammount: '950.00'
    }
  ];

  const renderItem = (item: ICRMRecentInvoicesItem, index: number) => {
    return (
      <div key={index} className="flex justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center size-7.5 shrink-0 bg-gray-100 rounded-lg border border-gray-300">
            <KeenIcon icon={item.icon} className="text-base text-gray-600" />
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-2sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
              {item.number}
            </span>
            <span className="text-2xs font-medium text-gray-600">{item.date}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="text-sm font-medium text-gray-700">${item.ammount}</span>

          <div className="menu" data-menu="true">
            <div
              className="menu-item"
              data-menu-item-trigger="click|lg:click"
              data-menu-item-toggle="dropdown"
              data-menu-item-placement="bottom-end"
              data-menu-item-offset="0, 10px"
            >
              <button className="btn btn-sm btn-icon btn-icon-md text-primary hover:text-primary-active">
                <KeenIcon icon="exit-down" />
              </button>
              
              <CardItem2 />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Recent Invoices</h3>

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

            <Card2 />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="grid gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export { CRMRecentInvoices };
