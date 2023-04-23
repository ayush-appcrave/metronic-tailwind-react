import { useEffect, useState, ReactElement } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { useLoading } from '../providers/LoadingProvider';
import { AuthPage, Logout, useAuth } from '../auth';
import { DashboardPage, EcommercePage, MarketingPage } from '../pages';
import { ErrorsPage } from '../modules/errors';
import { DefaultLayout } from '../layouts/default';
import { UsersManagementWrapper } from '../modules/users-management-api';

const AppRouting = (): ReactElement => {
  const { currentUser } = useAuth();
  const { setProgressBarLoading } = useLoading();
  const [previousLocation, setPreviousLocation] = useState('');
  const location = useLocation();

  useEffect(() => {
    setProgressBarLoading(true);
    setPreviousLocation(location.pathname);

    if (location.pathname === previousLocation) {
      setPreviousLocation('');
    }
  }, [location]);

  useEffect(() => {
    setProgressBarLoading(false);
  }, [previousLocation]);

  return (
    <Routes>
      <Route path="error/*" element={<ErrorsPage />} />
      <Route path="logout" element={<Logout />} />

      {currentUser ? (
        <>
          <Route element={<DefaultLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="ecommerce" element={<EcommercePage />} />
            <Route path="marketing" element={<MarketingPage />} />
            <Route path="users-management/*" element={<UsersManagementWrapper />} />
          </Route>
          <Route path="*" element={<Navigate to="/error/404" />} />
          <Route index element={<Navigate to="/dashboard" />} />
        </>
      ) : (
        <>
          <Route path="auth/*" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </>
      )}
    </Routes>
  );
};

export { AppRouting };
