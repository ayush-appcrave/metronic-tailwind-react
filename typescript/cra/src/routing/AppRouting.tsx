import { useEffect, useState, ReactElement } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { useLoading } from '../providers/LoadingProvider';
import { AuthPage, Logout, useAuth } from '../auth';
import { DashboardPage, EcommercePage, MarketingPage } from '../pages';
import { ErrorsPage } from '../modules/errors';
import {
  UsersListWrapper,
  UsersListOverlayWrapper,
  UsersListDrawersWrapper,
  UsersListInlineEditingWrapper,
  UsersListSubCRUDWrapper
} from '../modules/users-management-api';
import { UpdateUserPage } from '../modules/users-management-api/components/edit-user/UpdateUserPage';
import { ViewUserPage } from '../modules/users-management-api/components/view/ViewUserPage';
import { DefaultLayout } from '../layouts/default';

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
            <Route path="users-management-api" element={<UsersListWrapper />} />
            <Route
              path="users-management-api-overlay-modal"
              element={<UsersListOverlayWrapper />}
            />
            <Route path="users-management-api-drawers" element={<UsersListDrawersWrapper />} />
            <Route
              path="users-management-api-inline-editing"
              element={<UsersListInlineEditingWrapper />}
            />
            <Route path="users-management-api-sub-crud" element={<UsersListSubCRUDWrapper />} />
            <Route path="edit/user/:id" element={<UpdateUserPage />} />
            <Route path="view/user/:id" element={<ViewUserPage />} />
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
