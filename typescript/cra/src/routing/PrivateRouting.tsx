import { Navigate, Route, Routes } from "react-router";
import { DefaultLayout } from "../layouts/default";
import { DefaultPage1, DefaultPage2 } from "../pages";

const PrivateRouting = () => (
  <Routes>
    {/* Redirect to Dashboard after success login/registartion */}
    <Route path="auth/*" element={<Navigate to="/dashboard" />} />
    <Route element={<DefaultLayout />}>
      <Route path="dashboard" element={<DefaultPage1 />} />
    </Route>
    {/* Pages */}
    {/* Page Not Found */}
    <Route path="*" element={<Navigate to="/error/404" />} />
  </Routes>
);
export { PrivateRouting };
