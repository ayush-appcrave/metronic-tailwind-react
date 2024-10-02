import { useContext } from 'react';
import { AuthContext } from './providers/JWTProvider';
// import { AuthContext } from './providers/Auth0Provider';
// import { AuthContext } from './providers/FirebaseProvider';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthContext must be used within AuthProvider');
  return context;
};