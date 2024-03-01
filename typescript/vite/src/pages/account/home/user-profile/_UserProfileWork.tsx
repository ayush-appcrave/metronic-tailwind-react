import { KeenIcon } from '@/components';

const UserProfileWork = () => {
  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">Work</h3>

        <div className="flex items-center gap-2">
          <label className="switch">
            <input className="order-2" type="checkbox" value="1" name="check" />
            <span className="switch-label order-1">
              &nbsp;Available now
              <span className="hidden switch-off:inline"></span>
              <span className="hidden switch-on:inline"></span>
            </span>
          </label>
        </div>
      </div>
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500">
          <tr>
            <td className="py-2 min-w-36">Language</td>
            <td className="py-2 min-w-72 w-full text-gray-600">
              English <span className="text-gray-500">-Fluent</span>
            </td>
            <td className="py-2 text-right min-w-24">
              <a
                href="#"
                className="btn btn-sm btn-icon btn-icon-lg text-primary hover:text-primary-active"
              >
                <KeenIcon icon="notepad-edit" />
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-2">Hourly Rate</td>
            <td className="py-2 text-gray-600">$28 / hour</td>
            <td className="py-2 text-right">
              <a
                href="#"
                className="btn btn-sm btn-icon btn-icon-lg text-primary hover:text-primary-active"
              >
                <KeenIcon icon="notepad-edit" />
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-2">Avaibilaty</td>
            <td className="py-2 text-gray-600">32 hours a week</td>
            <td className="py-2 text-right">
              <a
                href="#"
                className="btn btn-sm btn-icon btn-icon-lg text-primary hover:text-primary-active"
              >
                <KeenIcon icon="notepad-edit" />
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-3">Skills</td>
            <td className="py-3 text-gray-600">
              <div className="flex flex-wrap gap-2.5">
                <span className="badge badge-sm badge-gray-200">Web Design</span>
                <span className="badge badge-sm badge-gray-200">Code Review</span>
                <span className="badge badge-sm badge-gray-200">noCode</span>
                <span className="badge badge-sm badge-gray-200">UX</span>
                <span className="badge badge-sm badge-gray-200">Figma</span>
                <span className="badge badge-sm badge-gray-200">Webflow</span>
                <span className="badge badge-sm badge-gray-200">AI</span>
                <span className="badge badge-sm badge-gray-200">Management</span>
              </div>
            </td>
            <td className="py-3 text-right">
              <a
                href="#"
                className="btn btn-sm btn-icon btn-icon-lg text-primary hover:text-primary-active"
              >
                <KeenIcon icon="notepad-edit" />
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-4">About</td>
            <td className="py-4 text-gray-600">
              We&apos;re open to partnerships, guest posts, and <br />
              more. Join us to share your insights and grow <br />
              your audience.
            </td>
            <td className="py-4 text-right">
              <a
                href="#"
                className="btn btn-sm btn-icon btn-icon-lg text-primary hover:text-primary-active"
              >
                <KeenIcon icon="notepad-edit" />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export { UserProfileWork };
