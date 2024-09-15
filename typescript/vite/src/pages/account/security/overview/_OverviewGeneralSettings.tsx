import { KeenIcon } from '@/components';
import { IOverviewGeneralSettingsItem, IOverviewGeneralSettingsItems } from './types';
import { CommonHexagonBadge } from '@/partials/common';

const OverviewGeneralSettings = () => {
  const items: IOverviewGeneralSettingsItems = [
    {
      icon: 'people',
      title: (
        <>
          Prevent members from inviting others
          <span className="badge badge-xs badge-primary badge-outline">Pro</span>
        </>
      ),
      description: 'Restrict members from sending invites to new potential members.',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      icon: 'abstract-37',
      title: (
        <>
          Prevent members from installing third-party integrations
          <span className="badge badge-xs badge-primary badge-outline">Pro</span>
        </>
      ),
      description: 'Prohibit the installation of external apps or integrations by members..',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      icon: 'geolocation',
      title: 'Allow use location',
      description: "Enable feature to use and share the user's location.",
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" checked value="1" readOnly />
        </div>
      )
    },
    {
      icon: 'shield-tick',
      title: (
        <>
          Push protection for yourself
          <span className="badge badge-xs badge-info badge-outline">Beta</span>
        </>
      ),
      description: 'Enable users to create and display a profile publicly.',
      actions: (
        <a href="#" className="btn btn-sm btn-light btn-outline">
          Setup
        </a>
      )
    },
    {
      icon: 'badge',
      title: 'Allow public profile',
      description: 'Enable users to create and display a profile publicly.',
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" checked value="1" readOnly />
        </div>
      )
    },
    {
      icon: 'check-circle',
      title: 'Allow use location',
      description: "Enable feature to use and share the user's location.",
      actions: (
        <div className="switch switch-sm">
          <input type="checkbox" name="param" value="1" readOnly />
        </div>
      )
    },
    {
      icon: 'questionnaire-tablet',
      title: (
        <>
          Private vulnerability reporting
          <span className="badge badge-xs badge-info badge-outline">Beta</span>
        </>
      ),
      description: 'Confidential channel for reporting system vulnerabilities.',
      actions: (
        <>
          <a href="#" className="btn btn-sm btn-light btn-danger btn-outline">
            Disable all
          </a>
          <a href="#" className="btn btn-sm btn-light btn-outline">
            Enable all
          </a>
        </>
      )
    }
  ];

  const renderItem = (item: IOverviewGeneralSettingsItem, index: number) => {
    return (
      <div key={index} className="card-group flex items-center justify-between py-4 gap-2.5">
        <div className="flex items-center gap-3.5">
          <CommonHexagonBadge
            stroke="stroke-gray-300"
            fill="fill-gray-100"
            size="size-[50px]"
            badge={<KeenIcon icon={item.icon} className="text-1.5xl text-gray-500" />}
          />

          <div className="flex flex-col gap-0.5">
            <span className="flex items-center gap-1.5 leading-none font-medium text-sm text-gray-900">
              {item.title}
            </span>
            <span className="text-2sm text-gray700">{item.description}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">{item.actions}</div>
      </div>
    );
  };

  return (
    <div className="card">
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </div>
  );
};

export { OverviewGeneralSettings };
