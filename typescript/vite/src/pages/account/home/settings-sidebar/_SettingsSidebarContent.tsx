import {
  SettingsSidebar,
  SettingsSidebarAdvancedSettingsAddress,
  SettingsSidebarAdvancedSettingsAppearance,
  SettingsSidebarAdvancedSettingsNotifications,
  SettingsSidebarAdvancedSettingsPreferences,
  SettingsSidebarAuthEmail,
  SettingsSidebarAuthPassword,
  SettingsSidebarAuthSingleSingOn,
  SettingsSidebarAuthSocialSignIn,
  SettingsSidebarAuthTwoFactor,
  SettingsSidebarBasicSettings,
  SettingsSidebarDeleteAccount,
  SettingsSidebarExternalServicesIntegrations,
  SettingsSidebarExternalServicesManageApi
} from '.';

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
          <SettingsSidebar />
        </div>
      </div>

      <div className="flex flex-col items-stretch grow gap-5 lg:gap-7.5">
        <SettingsSidebarBasicSettings />

        <SettingsSidebarAuthEmail />
        <SettingsSidebarAuthPassword />
        <SettingsSidebarAuthSocialSignIn />
        <SettingsSidebarAuthSingleSingOn />
        <SettingsSidebarAuthTwoFactor />

        <SettingsSidebarAdvancedSettingsPreferences />
        <SettingsSidebarAdvancedSettingsAppearance />
        <SettingsSidebarAdvancedSettingsNotifications />
        <SettingsSidebarAdvancedSettingsAddress />

        <SettingsSidebarExternalServicesManageApi />
        <SettingsSidebarExternalServicesIntegrations />

        <SettingsSidebarDeleteAccount />
      </div>
    </div>
  );
};

export { SettingsSidebarContent };
