import { KeenIcon } from '@/components';

import {
  ISettingsSidebarAuthTwoFactorItem,
  ISettingsSidebarAuthTwoFactorItems
} from './types';

const SettingsSidebarAuthTwoFactor = () => {
  const items: ISettingsSidebarAuthTwoFactorItems = [
    {
      icon: 'message-text-2',
      title: 'Text Message (SMS)',
      description: 'Instant codes for secure account verification.',
      checkbox: true
    },
    {
      icon: 'shield-tick',
      title: 'Authenticator App (TOTP)',
      description: 'Elevate protection with an authenticator app for two-factor authentication.',
      checkbox: false
    }
  ];

  const renderItem = (item: ISettingsSidebarAuthTwoFactorItem, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between flex-wrap border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5"
      >
        <div className="flex items-center flex-wrap gap-3.5">
          <div className="flex items-center">
            <div className="relative size-[50px] shrink-0">
              <svg
                className="w-full h-full stroke-gray-300 fill-gray-100"
                width="44"
                height="48"
                viewBox="0 0 44 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
                  18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
                  39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                  fill="#EFF6FF"
                />
                <path
                  d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
                  18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
                  39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                  stroke=""
                  strokeOpacity="0"
                />
              </svg>

              <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                <KeenIcon icon={item.icon} className="text-xl ps-px text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 hover:text-primary-active mb-px"
            >
              {item.title}
            </a>
            <span className="text-2sm font-medium text-gray-500">{item.description}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-6">
          <input type="checkbox" defaultChecked={item.checkbox} value={item.checkbox ? '1' : '2'} readOnly />
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header" id="auth_two_factor">
        <h3 className="card-title">Two-Factor authentication(2FA)</h3>
      </div>
      <div className="card-body">
        <div className="grid gap-5 mb-5 lg:mb-7">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>

        <div className="flex lex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full lg:pt-2.5">
            Password
          </span>

          <div className="grow grid gap-2.5">
            <input type="text" className="input w-full" placeholder="Enter password" value="" readOnly />

            <p className="text-2sm font-medium text-gray-700">
              Enter your password to setup Two-Factor authentication
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Setup</button>
        </div>
      </div>
    </div>
  );
};

export { SettingsSidebarAuthTwoFactor };
