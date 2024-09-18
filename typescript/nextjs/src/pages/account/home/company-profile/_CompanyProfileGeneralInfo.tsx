import { KeenIcon } from '@/components';

const CompanyProfileGeneralInfo = () => {
  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">General Info</h3>

        <div className="flex items-center gap-2">
          <label className="switch switch-sm">
            <span className="switch-label">Public Profile</span>
            <input type="checkbox" value="1" name="check" defaultChecked />
          </label>
        </div>
      </div>

      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500" id="general_info_table">
          <tbody>
            <tr>
              <td className="min-w-56">Company Name</td>
              <td className="min-w-48 w-full text-gray-700">Hexlab</td>
              <td className="min-w-16 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td>Phone number</td>
              <td className="text-gray-700">+1 555-1234</td>
              <td className="text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
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
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td>Remote Company ID</td>
              <td className="text-gray-700 text-2sm">
                <div className="flex items-center gap-0.5">
                  CID78901BXT2023
                  <button className="btn btn-xs btn-icon btn-clear btn-light">
                    <KeenIcon icon="copy" />
                  </button>
                </div>
              </td>
              <td className="text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
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

export default  CompanyProfileGeneralInfo ;
