import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import {
  ISettingsEnterpriseYourCurrentPlanItem,
  ISettingsEnterpriseYourCurrentPlanItems
} from './interfaces';
import { Card1 } from '@/partials/dropdowns/general';

const SettingsEnterpriseYourCurrentPlan = () => {
  const items: ISettingsEnterpriseYourCurrentPlanItems = [
    {
      title: 'DevOps Integration',
      summary: 'Achieve faster releases, continuous integration & deployment',
      link: 'DevOps Features',
      path: '#'
    },
    {
      title: 'Data Encryption',
      summary: 'End-to-end encryption, protecting info from unauthorized access',
      link: 'Setup Encryption',
      path: '#'
    },
    {
      title: 'API Integration',
      summary: 'Integrate your systems with our robust API capabilities.',
      link: 'Get API Key',
      path: '#'
    }
  ];

  const renderItem = (item: ISettingsEnterpriseYourCurrentPlanItem, index: number) => {
    return (
      <div key={index} className="flex flex-col items-start gap-2.5">
        <a href={item.path} className="text-md text-gray-900 font-semibold hover:text-primary">
          {item.title}
        </a>

        <p className="text-2sm font-medium text-gray-600">{item.summary}</p>

        <a href={item.path} className="btn btn-link flex-none">
          {item.link}
        </a>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header gap-2" id="settings_auth_two_factor">
        <h3 className="card-title">Your Current Plan</h3>

        <div className="menu" data-menu="true">
          <div
            className="menu-item"
            data-menu-item-trigger="click|lg:click"
            data-menu-item-toggle="dropdown"
            data-menu-item-placement="bottom-end"
            data-menu-item-offset="0, 10px"
          >
            <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
              <KeenIcon icon="dots-vertical" />
            </button>

            <Card1 />
          </div>
        </div>
      </div>
      <div className="card-body lg:py-7.5">
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:gap-7.5 gap-5">
          <div className="md:flex-1 grid content-between border border-gray-200 rounded-xl">
            <div
              className="bg-cover bg-no-repeat rounded-t-lg h-48"
              style={{ backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x600/22.jpg`)})` }}
            ></div>

            <div className="flex flex-col gap-2 p-5 pt-4">
              <a href="#" className="text-base text-gray-900 font-semibold hover:text-primary">
                Premium Plan
              </a>

              <p className="text-2sm font-medium text-gray-600 mb-2">
                Access premium perks through our exclusive Premium Plan
              </p>

              <div>
                <button className="btn btn-sm btn-light">Change Plan</button>
              </div>
            </div>
          </div>

          <div className="md:flex-1">
            <div className="flex flex-col lg:gap-7.5 gap-5">
              {items.map((item, index) => {
                return renderItem(item, index);
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="card-footer justify-center">
        <a href="#" className="btn btn-link">Go to Billing</a>
      </div>
    </div>
  );
};

export { SettingsEnterpriseYourCurrentPlan };
