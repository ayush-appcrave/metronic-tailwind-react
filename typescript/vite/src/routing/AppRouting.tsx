import { ReactElement, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import {DashboardPage, ImageInputExamples} from '@/pages/dashboard';
import {
  ActivityPage,
  BloggerPage,
  CampaignsCardPage,
  CampaignsListPage,
  Columns2Page,
  Columns3Page,
  CompanyPage,
  CreatorPage,
  CRMPage,
  DefaultPage,
  EmptyPage,
  FeedsPage,
  GamerPage,
  ModalPage,
  NetworkPage,
  NFTPage,
  PlainPage,
  TeamsPage,
  WorksPage
} from '@/pages/public-profile';
import {
  AllowedIPAddressesPage,
  BackupAndRecoveryPage,
  BasicPage,
  CompanyProfilePage,
  CurrentSessionsPage,
  DeviceManagementPage,
  EnterprisePage,
  GetStartedPage,
  HistoryPage,
  OverviewPage,
  PlansPage,
  PrivacySettingsPage,
  SecurityGetStartedPage,
  SecurityLogPage,
  SettingsEnterprisePage,
  SettingsPlainPage,
  SettingsSidebarPage,
  UserProfilePage
} from '@/pages/account';

import { AuthPage, useAuthContext } from '../auth';
import { RequireAuth } from '../auth/RequireAuth';
import { Demo1Layout } from '../layouts/demo1';
import { ErrorsPage } from '../modules/errors';
import { useLoaders } from '../providers/LoadersProvider';

const AppRouting = (): ReactElement => {
  const { setProgressBarLoader } = useLoaders();
  const { verify } = useAuthContext();
  const [previousLocation, setPreviousLocation] = useState('');
  const location = useLocation();

  const init = async () => {
    setProgressBarLoader(true);
    try {
      if (verify) {
        await verify();
      }
    } catch (error) {
      throw new Error('Something went wrong!');
    } finally {
      setPreviousLocation(location.pathname);

      if (location.pathname === previousLocation) {
        setPreviousLocation('');
      }
    }
  };

  useEffect(() => {
    init();
  }, [location]);

  useEffect(() => {
    setProgressBarLoader(false);
  }, [previousLocation]);

  return (
    <Routes>
      <Route path="error/*" element={<ErrorsPage />} />

      <Route element={<RequireAuth />}>
        <Route element={<Demo1Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/image-input-examples" element={<ImageInputExamples />} />
          <Route path="/public-profile/profiles/default" element={<DefaultPage />} />
          <Route path="/public-profile/profiles/creator" element={<CreatorPage />} />
          <Route path="/public-profile/profiles/company" element={<CompanyPage />} />
          <Route path="/public-profile/profiles/nft" element={<NFTPage />} />
          <Route path="/public-profile/profiles/blogger" element={<BloggerPage />} />
          <Route path="/public-profile/profiles/crm" element={<CRMPage />} />
          <Route path="/public-profile/profiles/gamer" element={<GamerPage />} />
          <Route path="/public-profile/profiles/feeds" element={<FeedsPage />} />
          <Route path="/public-profile/profiles/plain" element={<PlainPage />} />
          <Route path="/public-profile/profiles/modal" element={<ModalPage />} />
          <Route path="/public-profile/projects/3-columns" element={<Columns3Page />} />
          <Route path="/public-profile/projects/2-columns" element={<Columns2Page />} />
          <Route path="/public-profile/works" element={<WorksPage />} />
          <Route path="/public-profile/teams" element={<TeamsPage />} />
          <Route path="/public-profile/network" element={<NetworkPage />} />
          <Route path="/public-profile/activity" element={<ActivityPage />} />
          <Route path="/public-profile/campaigns/card" element={<CampaignsCardPage />} />
          <Route path="/public-profile/campaigns/list" element={<CampaignsListPage />} />
          <Route path="/public-profile/empty" element={<EmptyPage />} />
          <Route path="/account/home/get-started" element={<GetStartedPage />} />
          <Route path="/account/home/user-profile" element={<UserProfilePage />} />
          <Route path="/account/home/company-profile" element={<CompanyProfilePage />} />
          <Route path="/account/home/settings-sidebar" element={<SettingsSidebarPage />} />
          <Route path="/account/home/settings-enterprise" element={<SettingsEnterprisePage />} />
          <Route path="/account/home/settings-plain" element={<SettingsPlainPage />} />
          <Route path="/account/billing/basic" element={<BasicPage />} />
          <Route path="/account/billing/enterprise" element={<EnterprisePage />} />
          <Route path="/account/billing/plans" element={<PlansPage />} />
          <Route path="/account/billing/history" element={<HistoryPage />} />
          <Route path="/account/security/get-started" element={<SecurityGetStartedPage />} />
          <Route path="/account/security/overview" element={<OverviewPage />} />
          <Route path="/account/security/allowed-ip-addresses" element={<AllowedIPAddressesPage />} />
          <Route path="/account/security/privacy-settings" element={<PrivacySettingsPage />} />
          <Route path="/account/security/device-management" element={<DeviceManagementPage />} />
          <Route path="/account/security/backup-and-recovery" element={<BackupAndRecoveryPage />} />
          <Route path="/account/security/current-sessions" element={<CurrentSessionsPage />} />
          <Route path="/account/security/log" element={<SecurityLogPage />} />
          <Route index element={<Navigate to="/dashboard" />} />
        </Route>
      </Route>

      <Route path="auth/*" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export { AppRouting };
