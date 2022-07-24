import { useContext } from 'react';
import { AuthContext } from '../contexts/authJWTContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('Auth context must be specified');

  return context;
};

export default useAuth;
