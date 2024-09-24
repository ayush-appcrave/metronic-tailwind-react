import { CrudCardFooter } from '@/partials/crud';
import { KeenIcon } from '@/components';

interface IApiIntegrationsItem {
  integration: string;
  apiKey: string;
  dailyCalls: string;
  actions: React.ReactNode;
}

interface IApiIntegrationsItems extends Array<IApiIntegrationsItem> {} 

const IApiIntegrations = () => {
  const data: IApiIntegrationsItems = [
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
      actions: '<div class="switch switch-sm"><input type="checkbox" name="param" value="1"></div>'
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
    }
  ];

  const renderItem = (each: IApiIntegrationsItem, index: number) => {
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

        <td>{each.integration}</td>
        <td>{each.apiKey}</td>
        <td>{each.dailyCalls}</td>

        <td>
          <div className="flex items-center gap-2.5">{each.actions}</div>
        </td>

        <td>
          <a href="#" className="btn btn-sm btn-icon btn-clear btn-light">
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

      <div className="card-body scrollable-x-auto">
        <table className="table table-auto table-border" id="devices_table">
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
                  <span className="sort-label">Integration</span>
                  <span className="sort-icon"></span>
                </span>
              </th>
              <th className="min-w-[224px]">
                <span className="sort">
                  <span className="sort-label">API Key</span>
                  <span className="sort-icon"></span>
                </span>
              </th>
              <th className="min-w-[122px]">
                <span className="sort">
                  <span className="sort-label">Daily Calls</span>
                  <span className="sort-icon"></span>
                </span>
              </th>
              <th className="min-w-[98px]">
                <span className="sort">
                  <span className="sort-label">Status</span>
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

      <CrudCardFooter />
    </div>
  );
};

export { IApiIntegrations, type IApiIntegrationsItems };