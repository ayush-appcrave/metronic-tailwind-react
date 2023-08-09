import { useEffect } from 'react';
import { Navigate, Routes } from 'react-router-dom';

import { useAuthContext } from '../providers/useAuthContext';

const Logout = () => {
  const { logout } = useAuthContext();
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
