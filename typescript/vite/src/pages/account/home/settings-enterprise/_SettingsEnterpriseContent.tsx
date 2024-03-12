import { CompanyProfileDataImport } from '../company-profile';
import { UserProfileCalendarAccounts, UserProfileConnections } from '../user-profile';
import {
  SettingsEnterpriseAccount,
  SettingsEnterpriseAuthTwoFactor,
  SettingsEnterprisePaymentHistory,
  SettingsEnterpriseUserAccess,
  SettingsEnterpriseYourCurrentPlan
} from '.';

const SettingsEnterpriseContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <SettingsEnterpriseUserAccess />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
        <div className="col-span-1">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <SettingsEnterpriseAccount title="Account" />
            <SettingsEnterpriseAuthTwoFactor />
            <UserProfileCalendarAccounts />
            <CompanyProfileDataImport />
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <SettingsEnterpriseYourCurrentPlan />
            <SettingsEnterprisePaymentHistory />
            <UserProfileConnections url="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { SettingsEnterpriseContent };
