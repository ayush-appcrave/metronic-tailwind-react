import { ReactElement, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import { AuthPage } from '../auth';
import { RequireAuth } from '../auth/components/RequireAuth';
import { useAuthContext } from '../auth/useAuthContext';
import { DefaultLayout } from '../layouts/default';
import { ErrorsPage } from '../modules/errors';
import { UsersManagementWrapper } from '../modules/users-management-api';
import { DashboardPage, EcommercePage, MarketingPage } from '../pages';
import { useLoaders } from '../providers/LoadersProvider';

const AppRouting = (): ReactElement => {
  const { setProgressBarLoader } = useLoaders();
  const { verify } = useAuthContext();
  const [previousLocation, setPreviousLocation] = useState('');
  const { setScreenLoader } = useLoaders();
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
    setScreenLoader(false);
  }, [previousLocation]);

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
