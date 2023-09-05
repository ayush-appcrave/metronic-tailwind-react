import { ReactElement, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import { AuthPage } from '../auth';
import { RequireAuth } from '../auth/RequireAuth';
import { useAuthContext } from '../auth/useAuthContext';
import { DefaultLayout } from '../layouts/default';
import { ErrorsPage } from '../modules/errors';
import { UsersManagementWrapper } from '../modules/users-management-api';
import { DashboardPage, EcommercePage, MarketingPage } from '../pages';
import { useLoaders } from '../providers/LoadersProvider';

const AppRouting = (): ReactElement => {
  const { setProgressBarLoader } = useLoaders();
  const [previousPathname, setPreviousPathname] = useState('');
  const location = useLocation();

  useEffect(() => {
    setProgressBarLoader(true);
    setPreviousPathname(location.pathname);

    if (location.pathname === previousPathname) {
      setPreviousPathname('');
    }
  }, [location.pathname]);

  useEffect(() => {
    setProgressBarLoader(false);
  }, [previousPathname]);

  return (
    <Routes>
      <Route path="error/*" element={<ErrorsPage />} />

      <Route element={<RequireAuth />}>
        <Route element={<DefaultLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="ecommerce" element={<EcommercePage />} />
          <Route path="marketing" element={<MarketingPage />} />
          <Route path="users-management/*" element={<UsersManagementWrapper />} />
          <Route index element={<Navigate to="/dashboard" />} />
        </Route>
      </Route>

      <Route path="auth/*" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export { AppRouting };
