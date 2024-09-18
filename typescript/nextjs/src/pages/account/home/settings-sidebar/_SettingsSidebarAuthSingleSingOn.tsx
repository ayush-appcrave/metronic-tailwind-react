import { toAbsoluteUrl } from '@/utils/Assets';

import {
  ISettingsSidebarAuthSingleSingOnItem,
  ISettingsSidebarAuthSingleSingOnItems
} from './types';

const SettingsSidebarAuthSingleSingOn = () => {
  const items: ISettingsSidebarAuthSingleSingOnItems = [
    {
      logo: 'azure.svg',
      title: 'Microsoft Azure',
      size: 'w-10'
    },
    {
      logo: 'google.svg',
      title: 'Google',
      size: 'w-10'
    },
    {
      logo: 'openid.svg',
      title: 'OpenID Connect',
      size: 'w-24'
    }
  ];

  const renderItem = (item: ISettingsSidebarAuthSingleSingOnItem, index: number) => {
    return (
      <label
        className="flex align-stretch cursor-pointer bg-center h-44 bg-no-repeat border border-gray-300 rounded-xl border-dashed has-[:checked]:border-primary bg-[length:500px]"
        style={{ backgroundImage: toAbsoluteUrl('/media/images/2600x1200/bg-5.png') }}
        key={index}
      >
        <div className="flex flex-col place-items-center place-content-center rounded-xl grow has-[:checked]:bg-[rgba(239,246,255,1)]">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
            className={item.size}
            alt=""
          />

          <span className="text-md font-semibold text-gray-800">{item.title}</span>

          <input
            className="appearance-none"
            type="radio"
            name="sso_option"
            defaultChecked={index === 2}
            value="1"
            readOnly
          />
        </div>
      </label>
    );
  };

  return (
    <div className="card">
      <div className="card-header" id="auth_social_sign_in_sso">
        <h3 className="card-title">Single Sign On(SSO)</h3>
      </div>
      <div className="card-body lg:pb-7.5">
        <div className="grid gap-5 lg:gap-7">
          <span className="text-md font-semibold text-gray-900">
            1. Select SSO integration Type
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-7.5 mb-7"></div>

        <div className="grid gap-5 lg:gap-7.5">
          <span className="text-md font-semibold text-gray-900">
            2. Configure Google authentication
          </span>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">Client ID</span>
            <div className="grow">
              <input
                type="text"
                className="input w-full placeholder:text-gray-500"
                placeholder="02874374-367145773"
                value=""
                readOnly
              />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">
              Client Secret
            </span>
            <div className="grow">
              <input
                type="text"
                className="input w-full placeholder:text-gray-500"
                placeholder="23djfn784957f8022we2232307822-cey2442"
                value=""
                readOnly
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="btn btn-primary">Save Changes</button>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 mb-6"></div>

        <div className="grid gap-5 lg:gap-7.5">
          <span className="text-md font-semibold text-gray-900">
            3. Note down custom URL for Google SSO authentication
          </span>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">
              Custom Login UTL
            </span>
            <div className="grow">
              <div className="input-group">
                <input
                  type="text"
                  className="input w-full "
                  placeholder="https://devs.keenthemes.com/rl/AirMikeStudios"
                  value=""
                  readOnly
                />
                <button className="btn btn-primary">Copy</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 mb-8"></div>

        <p className="text-2sm font-medium text-gray-700">
          Single Sign-On (SSO) authentication streamlines access across multiple platforms. Users
          log in once, gaining seamless entry <br />
          to various systems without repetitive credentials.
        </p>
      </div>
    </div>
  );
};

export default  SettingsSidebarAuthSingleSingOn ;
