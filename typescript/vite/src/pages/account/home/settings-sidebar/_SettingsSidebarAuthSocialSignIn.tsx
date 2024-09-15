import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import {
  ISettingsSidebarAuthSocialSignInBlock,
  ISettingsSidebarAuthSocialSignInBlocks,
  ISettingsSidebarAuthSocialSignInItem,
  ISettingsSidebarAuthSocialSignInItems
} from './types';

const SettingsSidebarAuthSocialSignIn = () => {
  const items: ISettingsSidebarAuthSocialSignInItems = [
    {
      logo: 'google.svg',
      title: 'Google',
      email: 'jasontatum@ktstudio.io',
      checkbox: true
    },
    {
      logo: 'linkedin.svg',
      title: 'Linkedin',
      email: 'jasontt@keenthemes.co',
      checkbox: false
    }
  ];

  const blocks: ISettingsSidebarAuthSocialSignInBlocks = [
    {
      logo: 'apple-black.svg',
      title: 'Sign in with Apple'
    },
    {
      logo: 'microsoft-5.svg',
      title: 'Sign in with Microsoft'
    },
    {
      logo: 'facebook.svg',
      title: 'Sign in with Facebook'
    }
  ];

  const renderItem = (item: ISettingsSidebarAuthSocialSignInItem, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between flex-wrap border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5"
      >
        <div className="flex items-center flex-wrap gap-3.5">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
            className="size-6 shrink-0"
            alt=""
          />

          <div className="flex flex-col">
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 hover:text-primary-active mb-px"
            >
              {item.title}
            </a>
            <a href="#" className="text-2sm font-medium text-gray-500 hover:text-primary-active">
              {item.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-6">
          <input
            type="checkbox"
            defaultChecked={item.checkbox}
            value={item.checkbox ? '1' : '2'}
            readOnly
          />

          <div className="btn btn-sm btn-icon btn-icon-lg text-gray-500 hover:text-primary-active">
            <KeenIcon icon="trash" />
          </div>
        </div>
      </div>
    );
  };

  const renderBlock = (block: ISettingsSidebarAuthSocialSignInBlock, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center group border border-gray-200 cursor-pointer rounded-md gap-2.5 px-3.5 py-2.5"
      >
        <a href="#" className="btn btn-light">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${block.logo}`)}
            className="size-5 shrink-0"
            alt=""
          />
          {block.title}
        </a>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header" id="auth_social_sign_in">
        <h3 className="card-title">Social Sign in</h3>
      </div>
      <div className="card-body">
        <div className="grid gap-5 mb-5 lg:mb-7">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>

        <div className="flex flex-col gap-0.5 mb-5">
          <span className="text-md font-semibold text-gray-900">More Social Sign in options</span>
          <p className="text-2sm font-medium text-gray-700">
            Effortless access awaits! Connect seamlessly with your preferred social account.
          </p>
        </div>

        <div className="flex items-center flex-wrap gap-2.5 mb-5 lg:mb-7.5">
          {blocks.map((block, index) => {
            return renderBlock(block, index);
          })}
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export { SettingsSidebarAuthSocialSignIn };
