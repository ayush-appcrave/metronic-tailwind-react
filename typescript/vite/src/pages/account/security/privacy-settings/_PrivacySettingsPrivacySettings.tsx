import { HexagonBadge } from '@/partials/common';
import { IPrivacySettingsPrivacySettingsItem, IPrivacySettingsPrivacySettingsItems } from './interfaces';
import { KeenIcon } from '@/components';

const PrivacySettingsPrivacySettings = () => {
  const items: IPrivacySettingsPrivacySettingsItems = [
    {
      icon: 'search-list',
      title: (
        <>
          Show up in search results
          <span className="badge badge-xs badge-primary badge-outline">Pro</span>
        </>
      ),
      description: 'Control your visibility by choosing if you appear in search results.',
      actions: <div className="switch switch-sm"><input type="checkbox" name="param" value="1" readOnly /></div>
    },
    {
      icon: 'message-notify',
      title: (
        <>
          Manage Read Receipts for Messages
          <span className="badge badge-xs badge-primary badge-outline">Pro</span>
        </>
      ),
      description: 'Enable or disable read receipts for private messages.',
      actions: <div className="switch switch-sm"><input type="checkbox" name="param" value="1" readOnly /></div> 
    },
    {
      icon: 'geolocation',
      title: 'Enable Location-Based Services',
      description: "Allow the app to access and use your location for personalized content.",
      actions: <div className="switch switch-sm"><input type="checkbox" name="param" defaultChecked value="1" readOnly /></div> 
    },
    {
      icon: 'discount',
      title: (
        <>
          Ad Personalization Settings
          <span className="badge badge-xs badge-info badge-outline">Beta</span>
        </>
      ),
      description: 'Customize how ads are targeted to your interests.',
      actions: <a href="#" className="btn btn-sm btn-light btn-outline">Setup</a>
    },
    {
      icon: 'badge',
      title: 'Allow public profile',
      description: 'Enable users to create and display a profile publicly.',
      actions: <div className="switch switch-sm"><input type="checkbox" name="param" defaultChecked value="1" readOnly /></div> 
    },
    {
      icon: 'check-circle',
      title: 'Allow use location',
      description: "Enable feature to use and share the user's location.",
      actions: <div className="switch switch-sm"><input type="checkbox" name="param" value="1" readOnly /></div>
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
          <a href="#" className="btn btn-sm btn-light btn-danger btn-outline">Disable all</a> 
          <a href="#" className="btn btn-sm btn-light btn-outline">Enable all</a>
        </>
      )
    }
  ];

  const renderItem = (item: IPrivacySettingsPrivacySettingsItem, index: number) => {
    return (
      <div key={index} className="card-group flex items-center justify-between py-4 gap-2.5">
        <div className="flex items-center gap-3.5">
          <HexagonBadge
            stroke='stroke-gray-300'
            fill='fill-gray-100'
            size='size-[50px]'
            badge={<KeenIcon icon={item.icon} className="text-1.5xl text-gray-500" />}
          />

          <div className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 leading-none font-medium text-sm text-gray-900">
              {item.title}
            </span>
            <span className="text-2sm text-gray-700">{item.description}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {item.actions}
        </div>
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

export { PrivacySettingsPrivacySettings };
