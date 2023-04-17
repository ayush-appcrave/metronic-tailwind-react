import { useEffect } from 'react';
import { Navigate, Routes } from 'react-router-dom';
import { useAuth } from '../JWTProvider';

const Logout = () => {
  const { logout } = useAuth();
  useEffect(() => {
    logout();
    document.location.reload();
  }, [logout]);

  return (
    <Routes>
      <Navigate to="/auth/login" />
    </Routes>
  );
};

export { Logout };
