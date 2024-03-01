import { KeenIcon } from '@/components';

const CompanyProfileGeneralInfo = () => {
  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">General Info</h3>

        <div className="flex items-center gap-2">
          <label className="switch">
            <input className="order-2" type="checkbox" value="1" name="check" defaultChecked />
            <span className="switch-label order-1">
              &nbsp;Public Profile
              <span className="hidden switch-off:inline"></span>
              <span className="hidden switch-on:inline"></span>
            </span>
          </label>
        </div>
      </div>
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500" id="general_info_table">
          <tbody>
            <tr>
              <td className="min-w-55">Company Name</td>
              <td className="min-w-48 w-full text-gray-700">Hexlab</td>
              <td className="min-w-16 text-center">
                <a
                  href="#"
                  className="btn btn-sm btn-icon btn-icon-lg text-primary hover:text-primary-active"
                >
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td>Phone number</td>
              <td className="text-gray-700">+1 555-1234</td>
              <td className="text-center">
                <a
                  href="#"
                  className="btn btn-sm btn-icon btn-icon-lg text-primary hover:text-primary-active"
                >
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td>VAT number</td>
              <td className="text-gray-700">
                <span className="badge badge-sm badge-outline badge-danger">Missing Details</span>
              </td>
              <td className="text-center">
                <a href="#" className="btn btn-link btn-sm">
                  Add
                </a>
              </td>
            </tr>

            <tr>
              <td>Registration number</td>
              <td className="text-gray-700">IYS2023A56789</td>
              <td className="text-center">
                <a
                  href="#"
                  className="btn btn-sm btn-icon btn-icon-lg text-primary hover:text-primary-active"
                >
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td>Remote Company ID</td>
              <td className="text-gray-600 text-2sm">CID78901BXT2023</td>
              <td className="text-center">
                <a
                  href="#"
                  className="btn btn-sm btn-icon btn-icon-lg text-primary hover:text-primary-active"
                >
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { CompanyProfileGeneralInfo };
