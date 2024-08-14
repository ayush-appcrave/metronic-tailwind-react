import { CompanyProfileDataImport } from '../company-profile';
import { UserProfileCalendarAccounts } from '../user-profile';
import {
  SettingsEnterpriseAccount,
  SettingsEnterpriseAuthTwoFactor,
  SettingsEnterpriseConnections,
  SettingsEnterprisePaymentHistory,
  SettingsEnterpriseSetGoal,
  SettingsEnterpriseUpgrade,
  SettingsEnterpriseYourCurrentPlan
} from '.';

const SettingsEnterpriseContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <SettingsEnterpriseUpgrade />
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
            <SettingsEnterpriseSetGoal />
            <SettingsEnterprisePaymentHistory />
            <SettingsEnterpriseConnections />
          </div>
        </div>
      </div>
    </div>
  );
};

export { SettingsEnterpriseContent };
