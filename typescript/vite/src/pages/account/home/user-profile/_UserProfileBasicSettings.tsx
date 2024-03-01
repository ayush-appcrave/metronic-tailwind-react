import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { IUserProfileBasicSettingsProps } from './interfaces';

const UserProfileBasicSettings = ({ title }: IUserProfileBasicSettingsProps) => {
  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>

        <div className="flex items-center gap-2">
          <label className="switch">
            <input className="order-2" type="checkbox" value="1" name="check" defaultChecked />
            <span className="switch-label order-1">
              Public Profile
              <span className="hidden switch-off:inline">Off</span>
              <span className="hidden switch-on:inline">On</span>
            </span>
          </label>
        </div>
      </div>
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500">
          <tr>
            <td className="py-2 min-w-36">Email</td>
            <td className="py-2 min-w-60">
              <a href="#" className="text-gray-600 text-2sm hover:text-primary-active">
                jasontt@studio.co
              </a>
            </td>
            <td className="py-2 max-w-16 text-right">
              <a
                href="#"
                className="btn btn-sm btn-icon btn-icon-lg text-primary hover:text-primary-active"
              >
                <KeenIcon icon="notepad-edit" />
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-2">Password</td>
            <td className="py-2 text-gray-600">Password last changed 2 months ago</td>
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
            <td className="py-3.5">2FA</td>
            <td className="py-3.5 text-gray-600">To be set</td>
            <td className="py-3 text-right">
              <a href="#" className="btn btn-link btn-sm">
                Setup
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-2">Sign-in with</td>
            <td className="py-0.5">
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  className="flex items-center justify-center size-8 bg-white rounded-full border border-gray-300"
                >
                  <img
                    src={toAbsoluteUrl('/images/content/brand-logos/google.svg')}
                    className="size-4"
                    alt=""
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center size-8 bg-white rounded-full border border-gray-300"
                >
                  <img
                    src={toAbsoluteUrl('/images/content/brand-logos/facebook.svg')}
                    className="size-4"
                    alt=""
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center size-8 bg-white rounded-full border border-gray-300"
                >
                  <img
                    src={toAbsoluteUrl('/images/content/brand-logos/apple-black.svg')}
                    className="size-4"
                    alt=""
                  />
                </a>
              </div>
            </td>
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
            <td className="py-3">Team Account</td>
            <td className="py-3 text-gray-700">To be set</td>
            <td className="py-3 text-right">
              <a href="#" className="btn btn-link btn-sm">
                Setup
              </a>
            </td>
          </tr>

          <tr>
            <td className="py-2">Social Profiles</td>
            <td className="py-0.5">
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  className="flex items-center justify-center size-8 bg-white rounded-full border border-gray-300"
                >
                  <img
                    src={toAbsoluteUrl('/images/content/brand-logos/linkedin.svg')}
                    className="size-4"
                    alt=""
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center size-8 bg-white rounded-full border border-gray-300"
                >
                  <img
                    src={toAbsoluteUrl('/images/content/brand-logos/twitch-purple.svg')}
                    className="size-4"
                    alt=""
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center size-8 bg-white rounded-full border border-gray-300"
                >
                  <img
                    src={toAbsoluteUrl('/images/content/brand-logos/x.svg')}
                    className="size-4"
                    alt=""
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center size-8 bg-white rounded-full border border-gray-300"
                >
                  <img
                    src={toAbsoluteUrl('/images/content/brand-logos/dribbble.svg')}
                    className="size-4"
                    alt=""
                  />
                </a>
              </div>
            </td>
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
            <td className="py-3">Referral Link</td>
            <td className="py-3 text-gray-600 text-2sm">
              <a href="#" className="text-gray-600 text-2sm hover:text-primary-active">
                https://studio.co/W3gvQOI35dt
                <KeenIcon icon="copy" className="text-gray-500 text-sm" />
              </a>
            </td>
            <td className="py-3 text-right">
              <a href="#" className="btn btn-link btn-sm">
                Re-create
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export { UserProfileBasicSettings };
