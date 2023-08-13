import { Navigate, Route, Routes } from 'react-router';

import { AuthLayout } from '../layouts/auth';
import { ForgotPassword } from './components/ForgotPassword';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { Auth0Login } from './components/auth0/Auth0Login';
import { FirebaseLogin } from './components/firebare/FirebareLogin';

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      {/* 
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route index element={<Login />} /> 
      */}

      {/* 
      <Route path="login" element={<Auth0Login />} />
      <Route index element={<Auth0Login />} />  
      */}
      
      <Route path="login" element={<FirebaseLogin />} />
      <Route index element={<FirebaseLogin />} />  
      
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>
);

export { AuthPage };
