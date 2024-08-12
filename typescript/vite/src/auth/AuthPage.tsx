import { Navigate, Route, Routes } from 'react-router';

import { AuthLayout } from '../layouts/auth';
// Auth0 login page
// import { Auth0Login } from './layouts/default/auth0';
// Firebase auth pages
// import { FirebaseLogin, FirebaseRegistration } from './layouts/default/firebase';
// JWT auth pages
import { ForgotPassword, Login, Signup } from './pages/jwt';
import { AuthBrandedLayout } from '@/layouts/auth-branded';

const AuthPage = () => (
  <Routes>
    <Route element={<AuthBrandedLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route index element={<Login />} />

      {/* <Route path="login" element={<Auth0Login />} />
      <Route index element={<Auth0Login />} /> */}

      {/* <Route path="login" element={<FirebaseLogin />} />
      <Route path="registration" element={<FirebaseRegistration />} />
      <Route index element={<FirebaseLogin />} /> */}

      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>
);

export { AuthPage };
