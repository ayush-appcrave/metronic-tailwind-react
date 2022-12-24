import { Navigate, Route, Routes } from "react-router";
import { DefaultLayout } from "../layouts/default";
import { DefaultPage1, DefaultPage2 } from "../pages";
import { UsersManagementPage, EditUserPage } from "../modules/users-managment";

const PrivateRouting = () => (
  <Routes>
    {/* Redirect to Dashboard after success login/registartion */}
    <Route path="auth/*" element={<Navigate to="/dashboard" />} />
    <Route element={<DefaultLayout />}>
      <Route path="dashboard" element={<DefaultPage1 />} />
      <Route path="marketing" element={<DefaultPage2 />} />
      <Route path="users-management" element={<UsersManagementPage />} />
      <Route path="edit/user/:id" element={<EditUserPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/error/404" />} />
  </Routes>
);
export { PrivateRouting };
