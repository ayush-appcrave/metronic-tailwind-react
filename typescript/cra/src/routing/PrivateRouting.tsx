import { Navigate, Route, Routes } from 'react-router';
import { DefaultLayout } from '../layouts/default';
import { DefaultPage1, DefaultPage2 } from '../pages';
import {
  UsersListWrapper,
  UsersListOverlayWrapper,
  UsersListDrawersWrapper,
  UsersListInlineEditingWrapper,
  UsersListSubCRUDWrapper
} from '../modules/users-management-api';
import { UpdateUserPage } from '../modules/users-management-api/components/edit-user/UpdateUserPage';
import { ViewUserPage } from '../modules/users-management-api/components/view/ViewUserPage';

const PrivateRouting = () => (
  <Routes>
    {/* Redirect to Dashboard after success login/registartion */}
    <Route path="auth/*" element={<Navigate to="/dashboard" />} />
    <Route element={<DefaultLayout />}>
      <Route path="dashboard" element={<DefaultPage1 />} />
      <Route path="marketing" element={<DefaultPage2 />} />
      <Route path="users-management-api" element={<UsersListWrapper />} />
      <Route path="users-management-api-overlay-modal" element={<UsersListOverlayWrapper />} />
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
  </Routes>
);
export { PrivateRouting };
