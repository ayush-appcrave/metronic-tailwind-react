import { DefaultLayout } from "@base/layouts/default";
import { DefaultLayout2 } from "@base/layouts/default2";
import { Navigate, Route, Routes } from "react-router";
import { DefaultPage1, DefaultPage2 } from "app/pages";

const PrivateRouting = () => (
  <Routes>
    {/* Redirect to Dashboard after success login/registartion */}
    <Route path="auth/*" element={<Navigate to="/dashboard" />} />
    <Route element={<DefaultLayout />}>
      <Route path="dashboard" element={<DefaultPage1 />} />
    </Route>
    <Route element={<DefaultLayout2 />}>
      <Route path="dashboard2" element={<DefaultPage2 />} />
    </Route>
    {/* Pages */}
    {/* Page Not Found */}
    <Route path="*" element={<Navigate to="/error/404" />} />
  </Routes>
);
export { PrivateRouting };
