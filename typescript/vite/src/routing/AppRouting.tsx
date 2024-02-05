import { ReactElement, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import {
  CompanyProfilePage,
  GetStartedPage,
  SettingsSidebarPage,
  UserProfilePage
} from '@/pages/account';
import { DashboardPage } from '@/pages/dashboard';
import { BloggerPage, CreatorPage, DefaultPage } from '@/pages/public-profile';

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
    try {
      if (verify) {
        await verify();
      }
    } catch (error) {
      throw new Error('Something went wrong!');
    } finally {
      setProgressBarLoader(true);

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
          <Route path="/public-profile/profiles/default" element={<DefaultPage />} />
          <Route path="/public-profile/profiles/creator" element={<CreatorPage />} />
          <Route path="/public-profile/profiles/blogger" element={<BloggerPage />} />
          <Route path="/account/home/get-started" element={<GetStartedPage />} />
          <Route path="/account/home/user-profile" element={<UserProfilePage />} />
          <Route path="/account/home/company-profile" element={<CompanyProfilePage />} />
          <Route path="/account/home/settings-sidebar" element={<SettingsSidebarPage />} />
          <Route index element={<Navigate to="/dashboard" />} />
        </Route>
      </Route>

      <Route path="auth/*" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export { AppRouting };
