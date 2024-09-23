import { CrudDatatableToolbar } from '@/partials/crud';
import { KeenIcon } from '@/components';

interface IAccountApiIntegrationsItem {
  integration: string;
  apiKey: string;
  dailyCalls: string;
  actions: React.ReactNode;
}

interface IAccountApiIntegrationsItems extends Array<IAccountApiIntegrationsItem> {}

const AccountApiKeysIntegrationsBlock = () => {
  const data: IAccountApiIntegrationsItems = [
    {
      integration: 'Quick Pay Service',
      apiKey: 'a1b2Xc3dY4ZxQvPlQp',
      dailyCalls: '10,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'User Auth System',
      apiKey: 'f6g7Z8h9R0TfUaSdTf',
      dailyCalls: '15,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Data Analytics',
      apiKey: 'k1V2m3N4L5CvPbDvDa',
      dailyCalls: '5,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'CRM Connector',
      apiKey: 'p6qM7rS8tK9BnHjCcR',
      dailyCalls: '8,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Inventory Manager',
      apiKey: 'u1vP2wF3xJ4KlYnIlM',
      dailyCalls: '12,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Inventory Manager',
      apiKey: 'z6G7bT8cQ9WxEcEdEs',
      dailyCalls: '20,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Order Tracking Sys',
      apiKey: 'e1E2gH3hB4iYtUvOtS',
      dailyCalls: '9,500',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Feedback Loop',
      apiKey: 'j6k7l8m9n0QaWsFlFb',
      dailyCalls: '7,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Payment Gateway',
      apiKey: '1p2q3r4s5DfGhPgPy',
      dailyCalls: '25,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Shipping Coordinator',
      apiKey: 't6u7v8w9x0CvBnNlSc',
      dailyCalls: '14,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Accounting Tool',
      apiKey: 'a9b8c7d6e5f4g3h2i1',
      dailyCalls: '18,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Customer Support',
      apiKey: 'j1k2l3m4n5o6p7q8r9',
      dailyCalls: '22,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Social Media Manager',
      apiKey: 's1t2u3v4w5x6y7z8a9',
      dailyCalls: '13,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'SEO Analyzer',
      apiKey: 'b1c2d3e4f5g6h7i8j9',
      dailyCalls: '6,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Newsletter Service',
      apiKey: 'k2l3m4n5o6p7q8r9s1',
      dailyCalls: '11,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'SMS Notification Service',
      apiKey: 't2u3v4w5x6y7z8a9b1',
      dailyCalls: '19,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Cloud Storage',
      apiKey: 'c2d3e4f5g6h7i8j9k1',
      dailyCalls: '23,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Fraud Detection',
      apiKey: 'u3v4w5x6y7z8a9b1c2',
      dailyCalls: '17,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'AI Chatbot',
      apiKey: 'd3e4f5g6h7i8j9k1l2',
      dailyCalls: '21,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Project Management',
      apiKey: 'v4w5x6y7z8a9b1c2d3',
      dailyCalls: '14,500',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Event Logging',
      apiKey: 'e4f5g6h7i8j9k1l2m3',
      dailyCalls: '20,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Calendar Sync',
      apiKey: 'w5x6y7z8a9b1c2d3e4',
      dailyCalls: '18,500',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'HR Management',
      apiKey: 'f5g6h7i8j9k1l2m3n4',
      dailyCalls: '16,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Content Delivery Network',
      apiKey: 'x6y7z8a9b1c2d3e4f5',
      dailyCalls: '12,500',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Marketing Automation',
      apiKey: 'g6h7i8j9k1l2m3n4o5',
      dailyCalls: '24,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'File Sharing',
      apiKey: 'y7z8a9b1c2d3e4f5g6',
      dailyCalls: '9,000',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Customer Feedback',
      apiKey: 'h7i8j9k1l2m3n4o5p6',
      dailyCalls: '7,500',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Sales Forecasting',
      apiKey: 'z8a9b1c2d3e4f5g6h7',
      dailyCalls: '11,500',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Data Warehouse',
      apiKey: 'i8j9k1l2m3n4o5p6q7',
      dailyCalls: '20,500',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Email Campaigns',
      apiKey: 'a9b1c2d3e4f5g6h7i8',
      dailyCalls: '10,500',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      integration: 'Business Intelligence',
      apiKey: 'j9k1l2m3n4o5p6q7r8',
      dailyCalls: '8,500',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" defaultChecked value="1" readOnly />
        </div>
      )
    }
  ];

  const renderItem = (each: IAccountApiIntegrationsItem, index: number) => {
    return (
      <tr key={index}>
        <td>
          <input
            data-datatable-row-check="true"
            type="checkbox"
            className="checkbox checkbox-sm"
            value={index + 1}
            readOnly
          />
        </td>
        <td className="text-gray-800 font-normal">{each.integration}</td>
        <td>
          <div className="flex items-center text-gray-800 font-normal">
            {each.apiKey}
            <a
              href="#"
              className="btn btn-sm btn-icon btn-clear text-gray-500 hover:text-primary-active"
            >
              <KeenIcon icon="copy" />
            </a>
          </div>
        </td>
        <td className="text-gray-800 font-normal">{each.dailyCalls}</td>
        <td>
          <div className="flex items-center gap-2.5">{each.actions}</div>
        </td>
        <td>
          <a href="#" className="btn btn-sm btn-icon btn-icon-lg btn-clear btn-light">
            <KeenIcon icon="notepad-edit" />
          </a>
        </td>
      </tr>
    );
  };

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header py-5 flex-wrap">
        <h3 className="card-title">API Integrations</h3>
        <div className="flex gap-7.5">
          <label className="switch switch-sm">
            <input name="check" type="checkbox" value="1" className="order-2" readOnly />
            <span className="switch-label order-1">Pause all</span>
          </label>
          <a href="#" className="btn btn-sm btn-primary">
            Add New
          </a>
        </div>
      </div>

      <div className="card-body">
        <div data-datatable="true" data-datatable-page-size="10">
          <div className="scrollable-x-auto">
            <table
              className="table table-auto table-border"
              id="api_integration_table"
              data-datatable-table="true"
            >
              <thead>
                <tr>
                  <th className="w-[60px]">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      data-datatable-check="true"
                      readOnly
                    />
                  </th>
                  <th className="min-w-[206px]">
                    <span className="sort">
                      <span className="sort-label text-gray-700 font-normal">Integration</span>
                      <span className="sort-icon"></span>
                    </span>
                  </th>
                  <th className="min-w-[224px]">
                    <span className="sort">
                      <span className="sort-label text-gray-700 font-normal">API Key</span>
                      <span className="sort-icon"></span>
                    </span>
                  </th>
                  <th className="min-w-[122px]">
                    <span className="sort">
                      <span className="sort-label text-gray-700 font-normal">Daily Calls</span>
                      <span className="sort-icon"></span>
                    </span>
                  </th>
                  <th className="min-w-[98px]">
                    <span className="sort">
                      <span className="sort-label text-gray-700 font-normal">Status</span>
                      <span className="sort-icon"></span>
                    </span>
                  </th>
                  <th className="w-[60px]"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((each, index) => {
                  return renderItem(each, index);
                })}
              </tbody>
            </table>
          </div>
          <CrudDatatableToolbar />
        </div>
      </div>
    </div>
  );
};

export { AccountApiKeysIntegrationsBlock, type IAccountApiIntegrationsItems };