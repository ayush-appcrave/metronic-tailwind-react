import { DeleteAccount } from '../settings-sidebar';
import { GeneralSettings, PlainPassword } from './blocks';

const AccountSettingsPlainContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5 xl:w-[38.75rem] mx-auto">
      <GeneralSettings title="General Settings" />
      <PlainPassword />
      <DeleteAccount />
    </div>
  );
};

export { AccountSettingsPlainContent };
