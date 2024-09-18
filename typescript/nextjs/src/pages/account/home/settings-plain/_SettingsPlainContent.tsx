import { SettingsSidebarDeleteAccount } from '../settings-sidebar';
import { SettingsPlainGeneralSettings, SettingsPlainPassword } from '.';

const SettingsPlainContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5 xl:w-[38.75rem] mx-auto">
      <SettingsPlainGeneralSettings title="General Settings" />
      <SettingsPlainPassword />
      <SettingsSidebarDeleteAccount />
    </div>
  );
};

export default  SettingsPlainContent ;
