import { Navigate, Route, Routes } from 'react-router';
import { AuthLayout } from '../layouts/auth';
// Auth0 login page
// import { Auth0Login } from './layouts/default/auth0';
// Firebase auth pages
// import { FirebaseLogin, FirebaseRegistration } from './layouts/default/firebase';
// JWT auth pages
import { ForgotPassword, Login, Registration } from './layouts/default/jwt';
const AuthPage = () => <Routes>
    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route index element={<Login />} />

      {/* <Route path="login" element={<Auth0Login />} />
       <Route index element={<Auth0Login />} /> */}

      {/* <Route path="login" element={<FirebaseLogin />} />
       <Route path="registration" element={<FirebaseRegistration />} />
       <Route index element={<FirebaseLogin />} /> */}

      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>;
export { AuthPage };