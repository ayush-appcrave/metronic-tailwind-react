import {  SettingsSidebar } from './';

import {
  AdvancedSettingsAddress,
  AdvancedSettingsAppearance,
  AdvancedSettingsNotifications,
  AdvancedSettingsPreferences,
  AuthEmail,
  AuthPassword,
  AuthSingleSingOn,
  AuthSocialSignIn,
  AuthTwoFactor,
  BasicSettings,
  DeleteAccount,
  ExternalServicesIntegrations,
  ExternalServicesManageApi
} from './blocks';

const SettingsSidebarContent = () => {
  return (
    <div className="flex grow gap-5 lg:gap-7.5">
      <div className="w-[230px] bg-light shrink-0">
        <div
          className="w-[230px]"
          data-sticky="true"
          data-sticky-name="scrollspy"
          data-sticky-animation="true"
          data-sticky-offset="200"
          data-sticky-class="fixed top-[calc(var(--tw-header-height)+1.875rem)] z-10 left-auto"
        >
          Test
        </div>
      </div>

      <div className="flex flex-col items-stretch grow gap-5 lg:gap-7.5">
        <BasicSettings />

        <AuthEmail />
        <AuthPassword />
        <AuthSocialSignIn />
        <AuthSingleSingOn />
        <AuthTwoFactor />

        <AdvancedSettingsPreferences />
        <AdvancedSettingsAppearance title={''} />
        <AdvancedSettingsNotifications />
        <AdvancedSettingsAddress />

        <ExternalServicesManageApi title={''} switch={false} />
        <ExternalServicesIntegrations />

        <DeleteAccount />
      </div>
    </div>
  );
};

export { SettingsSidebarContent };
