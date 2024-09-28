import { useResponsive, useScrollPosition } from '@/hooks';
import { AccountSettingsSidebar } from '.';
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
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const AccountSettingsSidebarContent = () => {
  const desktopMode = useResponsive('up', 'lg');

  const scrollPosition = useScrollPosition();
  const [sidebarSticky, setSidebarSticky] = useState(false);

  useEffect(() => {
    if (scrollPosition > 200) {
      setSidebarSticky(true);
    } else {
      setSidebarSticky(false);
    }

    console.log('scrollPosition:', scrollPosition);
  }, [scrollPosition]);

  return (
    <div className="flex grow gap-5 lg:gap-7.5">
      {desktopMode && (
        <div className="w-[230px] shrink-0">
          <div
            className={clsx(
              'w-[230px]',
              sidebarSticky && 'fixed top-[calc(var(--tw-header-height)+1.875rem)] z-10 left-auto'
            )}
          >
            <AccountSettingsSidebar />
          </div>
        </div>
      )}

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

export { AccountSettingsSidebarContent };
