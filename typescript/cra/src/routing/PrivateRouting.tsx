import { Navigate, Route, Routes } from "react-router";
import { DefaultLayout } from "../layouts/default";
import { DefaultPage1, DefaultPage2, UsersManagment } from "../pages";

const PrivateRouting = () => (
  <Routes>
    <Route path="auth/*" element={<Navigate to="/dashboard" />} />
    <Route element={<DefaultLayout />}>
      <Route path="dashboard" element={<DefaultPage1 />} />
      <Route path="marketing" element={<DefaultPage2 />} />
      <Route path="users-management" element={<UsersManagment />} />
    </Route>
    <Route path="*" element={<Navigate to="/error/404" />} />
  </Routes>
);
export { PrivateRouting };
