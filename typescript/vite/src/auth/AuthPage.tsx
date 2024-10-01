import { Navigate, Route, Routes } from 'react-router';
// Auth0 login page
// import { Auth0Login } from './layouts/default/auth0';
// Firebase auth pages
// import { FirebaseLogin, FirebaseRegistration } from './layouts/default/firebase';
// JWT auth pages
import { Login, Signup } from './pages/jwt';
import { AuthBrandedLayout } from '@/layouts/auth-branded';
import { AuthLayout } from '@/layouts/auth';
import { CheckEmail } from './pages/jwt/CheckEmail';

const AuthPage = () => (
  <Routes>
    <Route element={<AuthBrandedLayout />}>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="2fa" element={<TwoFactorAuth/>} /> */}
      <Route path="check-email" element={<CheckEmail />} />
      <Route path="signup" element={<Signup />} />
      {/* <Route path="reset-password" element={<ForgotPassword />} /> */}
      {/* <Route path="reset-password/check-email" element={<ForgotPassword />} /> */}
      {/* <Route path="reset-password/change" element={<ForgotPassword />} /> */}
      {/* <Route path="reset-password/changed" element={<ForgotPassword />} /> */}
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
    <Route element={<AuthLayout />}>
      <Route path="classic/login" element={<Login />} />
      {/* <Route path="classic/2fa" element={<TwoFactorAuth/>} /> */}
      {/* <Route path="classic/check-email" element={<CheckEmail/>} /> */}
      <Route path="classic/signup" element={<Signup />} />
      {/* <Route path="classic/reset-password" element={<ForgotPassword />} /> */}
      {/* <Route path="classic/reset-password/check-email" element={<ForgotPassword />} /> */}
      {/* <Route path="classic/reset-password/change" element={<ForgotPassword />} /> */}
      {/* <Route path="classic/reset-password/changed" element={<ForgotPassword />} /> */}
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>
);

export { AuthPage };
