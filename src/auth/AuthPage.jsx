import { CheckEmail } from '@/auth/pages/jwt';
import { userRole } from '@/constants/userRole.js';
import { AuthBrandedLayout } from '@/layouts/auth-branded';
import { AuthenticationWelcomeMessagePage } from '@/pages/authentication/welcome-message';
import { ProtectedRoute } from '@/routing';
import { Navigate, Route, Routes } from 'react-router';

import {
  AddMember,
  Login,
  ResetPassword,
  ResetPasswordChange,
  ResetPasswordChanged,
  ResetPasswordCheckEmail,
  ResetPasswordEnterEmail,
  TwoFactorAuth,
} from './pages/jwt';

const AuthPage = () => (
  <Routes>
    <Route element={<AuthBrandedLayout />}>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute allowedRoles={[userRole.SYSTEM_ADMINISTRATION]} />}>
        <Route path="/members/add" element={<AddMember />} />
      </Route>
      <Route path="/welcome-message" element={<AuthenticationWelcomeMessagePage />} />

      <Route path="/2fa" element={<TwoFactorAuth />} />
      <Route path="/check-email" element={<CheckEmail />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-password/enter-email" element={<ResetPasswordEnterEmail />} />
      <Route path="/reset-password/check-email" element={<ResetPasswordCheckEmail />} />
      <Route path="/reset-password/change" element={<ResetPasswordChange />} />
      <Route path="/reset-password/changed" element={<ResetPasswordChanged />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>

    {/* <Route element={<AuthLayout />}>
      <Route path="/classic/login" element={<Login />} />
      <Route path="/classic/signup" element={<Signup />} />
      <Route path="/classic/2fa" element={<TwoFactorAuth />} />
      <Route path="/classic/check-email" element={<CheckEmail />} />
      <Route path="/classic/reset-password" element={<ResetPassword />} />
      <Route path="/classic/reset-password/enter-email" element={<ResetPasswordEnterEmail />} />
      <Route path="/classic/reset-password/check-email" element={<ResetPasswordCheckEmail />} />
      <Route path="/classic/reset-password/change" element={<ResetPasswordChange />} />
      <Route path="/classic/reset-password/changed" element={<ResetPasswordChanged />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route> */}
  </Routes>
);
export { AuthPage };
