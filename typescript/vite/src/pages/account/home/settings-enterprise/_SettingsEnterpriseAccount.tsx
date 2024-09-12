import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { ISettingsEnterpriseAccountProps } from './types';
import { CrudAvatarUpload } from '@/partials/crud';

const SettingsEnterpriseAccount = ({ title }: ISettingsEnterpriseAccountProps) => {
  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>

        <div className="flex items-center gap-2">
          <label className="switch switch-sm">
            <span className="switch-label">
              Public Profile
            </span>
            <input type="checkbox" value="1" name="check" defaultChecked readOnly />    
          </label>
        </div>
      </div>
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500">
          <tbody>
            <tr>
              <td className="w-28">Photo</td>
              <td className="text-gray-600 min-w-32 text-2sm">150x150px JPEG, PNG Image</td>
              <td className="text-center">
                <div className="flex justify-center items-center">
                  <CrudAvatarUpload />
                </div>
              </td>
            </tr>

            <tr>
              <td>Name</td>
              <td className="text-gray-700">Jason Tatum</td>
              <td className="text-right">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td>Availability</td>
              <td className="text-gray-700">
                <span className="badge badge-sm badge-outline badge-success">Available now</span>
              </td>
              <td className="text-right">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td className="min-w-36">Email</td>
              <td className="min-w-60">
                <a href="#" className="text-gray-700 hover:text-primary-active">
                  jasontt@studio.co
                </a>
              </td>
              <td className="max-w-16 text-right">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td>Password</td>
              <td className="text-gray-600 text-2sm">Password last changed 2 months ago</td>
              <td className="text-right">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td>Sign-in with</td>
              <td>
                <div className="flex items-center gap-2.5">
                  <a
                    href="#"
                    className="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/google.svg')}
                      className="size-4"
                      alt=""
                    />
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/facebook.svg')}
                      className="size-4"
                      alt=""
                    />
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/apple-black.svg')}
                      className="dark:hidden h-4"
                      alt=""
                    />
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/apple-white.svg')}
                      className="light:hidden h-4"
                      alt=""
                    />
                  </a>
                </div>
              </td>
              <td className="text-right">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td>Team Account</td>
              <td className="text-gray-600 text-2sm">To be set</td>
              <td className="text-right">
                <a href="#" className="btn btn-link btn-sm">Setup</a>
              </td>
            </tr>

            <tr>
              <td>Social Profiles</td>
              <td>
                <div className="flex items-center gap-2.5">
                  <a
                    href="#"
                    className="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/linkedin.svg')}
                      className="size-4"
                      alt=""
                    />
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/twitch-purple.svg')}
                      className="size-4"
                      alt=""
                    />
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/x.svg')}
                      className="dark:hidden size-4"
                      alt=""
                    />
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/x-dark.svg')}
                      className="light:hidden size-4"
                      alt=""
                    />
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/dribbble.svg')}
                      className="size-4"
                      alt=""
                    />
                  </a>
                </div>
              </td>
              <td className="text-right">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>

            <tr>
              <td>Referral Link</td>
              <td className="text-gray-600 text-2sm">
                <div className="flex items-center gap-1">
                  <a href="#" className="text-gray-700 font-medium text-2sm hover:text-primary-active">
                    https://studio.co/W3gvQOI35dt 
                  </a>
                  <button className="btn btn-xs btn-icon btn-clear btn-light">
                    <KeenIcon icon="copy" />
                  </button>
                </div>
              </td>
              <td className="text-right">
                <a href="#" className="btn btn-link btn-sm">Re-create</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { SettingsEnterpriseAccount };
