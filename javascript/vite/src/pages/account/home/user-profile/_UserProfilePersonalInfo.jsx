import { KeenIcon } from '@/components';
import { CrudAvatarUpload } from '@/partials/crud';
const UserProfilePersonalInfo = () => {
  return <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">Personal Info</h3>
      </div>
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500">
          <tbody>
            <tr>
              <td className="py-2 min-w-28">Photo</td>
              <td className="py-2 text-gray-600 min-w-32 text-2sm">150x150px JPEG, PNG Image</td>
              <td className="py-2 text-center">
                <div className="flex justify-center items-center">
                  <CrudAvatarUpload />
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2">Name</td>
              <td className="py-2 text-gray-700 text-sm">Jason Tatum</td>
              <td className="py-2 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">Availability</td>
              <td className="py-3 text-gray-700">
                <span className="badge badge-sm badge-outline badge-success">Available now</span>
              </td>
              <td className="py-3 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">Birthday</td>
              <td className="py-3 text-gray-700 text-sm">28 May 1996</td>
              <td className="py-3 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">Gender</td>
              <td className="py-3 text-gray-700 text-sm">Male</td>
              <td className="py-3 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">Address</td>
              <td className="py-3 text-gray-600 text-2sm">You have no an address yet</td>
              <td className="py-3 text-center">
                <a href="#" className="btn btn-link btn-sm">
                  Add
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;
};
export { UserProfilePersonalInfo };