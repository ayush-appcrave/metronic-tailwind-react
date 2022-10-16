import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@base/layouts/default-layout";
import { AuthLayout } from "@base/layouts/auth-layout";
import { AuthPage1, AuthPage2, DefaultPage1, DefaultPage2 } from "app/pages";

const AppRouting = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/default1" element={<DefaultPage1 />} />
        <Route path="/default2" element={<DefaultPage2 />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/auth1" element={<AuthPage1 />} />
        <Route path="/auth2" element={<AuthPage2 />} />
      </Route>
      <Route path="*" element={<Navigate to="/default1" />} />
    </Routes>
  </BrowserRouter>
);

export { AppRouting };
