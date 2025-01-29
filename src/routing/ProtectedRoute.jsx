import { useAuthContext } from '@/auth/useAuthContext';
import { ScreenLoader } from '@/components/loaders/ScreenLoader';
import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { currentUser, loading } = useAuthContext();

  if (loading) {
    return <ScreenLoader />;
  }

  if (!currentUser) {
    return <Navigate to="/auth/login" />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/error/404" />;
  }
  return <Outlet />;
};

export { ProtectedRoute };
