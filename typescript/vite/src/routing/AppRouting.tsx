import { ReactElement, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { LightSidebarPage, DarkSidebarPage, ImageInputExamples } from '@/pages/dashboards';
import {
  ProfileActivityPage,
  ProfileBloggerPage,
  CampaignsCardPage,
  CampaignsListPage,
  ProjectColumn2Page,
  ProjectColumn3Page,
  ProfileCompanyPage,
  ProfileCreatorPage,
  ProfileCRMPage,
  ProfileDefaultPage,
  ProfileEmptyPage,
  ProfileFeedsPage,
  ProfileGamerPage,
  ProfileModalPage,
  ProfileNetworkPage,
  ProfileNFTPage,
  ProfilePlainPage,
  ProfileTeamsPage,
  ProfileWorksPage
} from '@/pages/public-profile';
import {
  AccountActivityPages,
  AllowedIPAddressesPage,
  APIKeysPage,
  AppearancePage,
  BackupAndRecoveryPage,
  BasicPage,
  CompanyProfilePage,
  CurrentSessionsPage,
  DeviceManagementPage,
  EnterprisePage,
  GetStartedPage,
  HistoryPage,
  ImportMembersPage,
  IntegrationsPage,
  InviteAFriendPage,
  MembersStarterPage,
  NotificationsPage,
  OverviewPage,
  PermissionsCheckPage,
  PermissionsTogglePage,
  PlansPage,
  PrivacySettingsPage,
  RolesPage,
  SecurityGetStartedPage,
  SecurityLogPage,
  SettingsEnterprisePage,
  SettingsModalPage,
  SettingsPlainPage,
  SettingsSidebarPage,
  TeamInfoPage,
  TeamMembersPage,
  MembersTeamPage,
  TeamsStarterPage,
  UserProfilePage
} from '@/pages/account';
import {
  AppRosterPage,
  MarketAuthorsPage,
  NetworkAuthorPage,
  NetworkGetStartedPage,
  NetworkMiniCardsPage,
  NetworkNFTPage,
  NetworkSocialPage,
  NetworkTeamCrewPage,
  SaasUsersPage,
  StoreClientsPage,
  TeamCrewPage,
  VisitorsPage
} from '@/pages/network';

import { AuthPage, useAuthContext } from '../auth';
import { RequireAuth } from '../auth/RequireAuth';
import { Demo1Layout } from '../layouts/demo1';
import { ErrorsRouting } from '../errors';
import { useLoaders } from '../providers/LoadersProvider';
import { ScrollSpyExample } from '@/pages/scroll-spy/ScrollSpyExample.tsx';

const AppRouting = (): ReactElement => {
  const { setProgressBarLoader } = useLoaders();
  const { verify } = useAuthContext();
  const [previousLocation, setPreviousLocation] = useState('');
  const location = useLocation();
  const path = location.pathname.trim();

  const init = async () => {
    setProgressBarLoader(true);

    try {
      if (verify) {
        await verify();
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error('Something went wrong!');
    } finally {
      setPreviousLocation(path);

      if (path === previousLocation) {
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
      <Route element={<RequireAuth />}>
        <Route element={<Demo1Layout />}>
          <Route path="/" element={<LightSidebarPage />} />
          <Route path="/dark-sidebar" element={<DarkSidebarPage />} />
          <Route path="/image-input-examples" element={<ImageInputExamples />} />
          <Route path="/public-profile/profiles/default" element={<ProfileDefaultPage />} />
          <Route path="/public-profile/profiles/creator" element={<ProfileCreatorPage />} />
          <Route path="/public-profile/profiles/company" element={<ProfileCompanyPage />} />
          <Route path="/public-profile/profiles/nft" element={<ProfileNFTPage />} />
          <Route path="/public-profile/profiles/blogger" element={<ProfileBloggerPage />} />
          <Route path="/public-profile/profiles/crm" element={<ProfileCRMPage />} />
          <Route path="/public-profile/profiles/gamer" element={<ProfileGamerPage />} />
          <Route path="/public-profile/profiles/feeds" element={<ProfileFeedsPage />} />
          <Route path="/public-profile/profiles/plain" element={<ProfilePlainPage />} />
          <Route path="/public-profile/profiles/modal" element={<ProfileModalPage />} />
          <Route path="/public-profile/projects/3-columns" element={<ProjectColumn3Page />} />
          <Route path="/public-profile/projects/2-columns" element={<ProjectColumn2Page />} />
          <Route path="/public-profile/works" element={<ProfileWorksPage />} />
          <Route path="/public-profile/teams" element={<ProfileTeamsPage />} />
          <Route path="/public-profile/network" element={<ProfileNetworkPage />} />
          <Route path="/public-profile/activity" element={<ProfileActivityPage />} />
          <Route path="/public-profile/campaigns/card" element={<CampaignsCardPage />} />
          <Route path="/public-profile/campaigns/list" element={<CampaignsListPage />} />
          <Route path="/public-profile/empty" element={<ProfileEmptyPage />} />
          <Route path="/account/home/get-started" element={<GetStartedPage />} />
          <Route path="/account/home/user-profile" element={<UserProfilePage />} />
          <Route path="/account/home/company-profile" element={<CompanyProfilePage />} />
          <Route path="/account/home/settings-sidebar" element={<SettingsSidebarPage />} />
          <Route path="/account/home/settings-enterprise" element={<SettingsEnterprisePage />} />
          <Route path="/account/home/settings-plain" element={<SettingsPlainPage />} />
          <Route path="/account/home/settings-modal" element={<SettingsModalPage />} />
          <Route path="/account/billing/basic" element={<BasicPage />} />
          <Route path="/account/billing/enterprise" element={<EnterprisePage />} />
          <Route path="/account/billing/plans" element={<PlansPage />} />
          <Route path="/account/billing/history" element={<HistoryPage />} />
          <Route path="/account/security/get-started" element={<SecurityGetStartedPage />} />
          <Route path="/account/security/overview" element={<OverviewPage />} />
          <Route
            path="/account/security/allowed-ip-addresses"
            element={<AllowedIPAddressesPage />}
          />
          <Route path="/account/security/privacy-settings" element={<PrivacySettingsPage />} />
          <Route path="/account/security/device-management" element={<DeviceManagementPage />} />
          <Route path="/account/security/backup-and-recovery" element={<BackupAndRecoveryPage />} />
          <Route path="/account/security/current-sessions" element={<CurrentSessionsPage />} />
          <Route path="/account/security/security-log" element={<SecurityLogPage />} />
          <Route path="/account/members/team-starter" element={<TeamsStarterPage />} />
          <Route path="/account/members/teams" element={<MembersTeamPage />} />
          <Route path="/account/members/team-info" element={<TeamInfoPage />} />
          <Route path="/account/members/members-starter" element={<MembersStarterPage />} />
          <Route path="/account/members/team-members" element={<TeamMembersPage />} />
          <Route path="/account/members/import-members" element={<ImportMembersPage />} />
          <Route path="/account/members/roles" element={<RolesPage />} />
          <Route path="/account/members/permissions-toggler" element={<PermissionsTogglePage />} />
          <Route path="/account/members/permissions-check" element={<PermissionsCheckPage />} />
          <Route path="/account/integrations" element={<IntegrationsPage />} />
          <Route path="/account/notifications" element={<NotificationsPage />} />
          <Route path="/account/api-keys" element={<APIKeysPage />} />
          <Route path="/account/members/appearance" element={<AppearancePage />} />
          <Route path="/account/members/invite-a-friend" element={<InviteAFriendPage />} />
          <Route path="/account/activity" element={<AccountActivityPages />} />
          <Route path="/scroll-spy/example-1" element={<ScrollSpyExample />} />
          <Route path="/network/get-started" element={<NetworkGetStartedPage />} />
          <Route path="/network/user-cards/mini-cards" element={<NetworkMiniCardsPage />} />
          <Route path="/network/user-cards/team-crew" element={<NetworkTeamCrewPage />} />
          <Route path="/network/user-cards/author" element={<NetworkAuthorPage />} />
          <Route path="/network/user-cards/nft" element={<NetworkNFTPage />} />
          <Route path="/network/user-cards/social" element={<NetworkSocialPage />} />
          <Route path="/network/user-table/team-crew" element={<TeamCrewPage />} />
          <Route path="/network/user-table/app-roster" element={<AppRosterPage />} />
          <Route path="/network/user-table/market-authors" element={<MarketAuthorsPage />} />
          <Route path="/network/user-table/saas-users" element={<SaasUsersPage />} />
          <Route path="/network/user-table/store-clients" element={<StoreClientsPage />} />
          <Route path="/network/user-table/visitors" element={<VisitorsPage />} />
        </Route>
      </Route>
      <Route path="error/*" element={<ErrorsRouting />} />
      <Route path="auth/*" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export { AppRouting };
