import { Auth0Client } from '@auth0/auth0-spa-js';
import { createContext, useEffect, useState } from 'react';
const AuthContext = createContext(null);
const auth0Client = new Auth0Client({
  domain: import.meta.env.VITE_APP_AUTH0_DOMAIN ?? '',
  clientId: import.meta.env.VITE_APP_AUTH0_CLIENT_ID ?? '',
  authorizationParams: {
    redirect_uri: 'http://localhost:3000/hero/dashboard'
  }
});
const AuthProvider = ({
  children
}) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(undefined);
  const [currentUser, setCurrentUser] = useState();

  // Verity user session
  const verify = async () => {
    try {
      await auth0Client.checkSession();
      const isAuthenticated = await auth0Client.isAuthenticated();
      if (isAuthenticated) {
        const user = await auth0Client.getUser();
        setAuth(user);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    verify();
  }, []);
  const login = async () => {
    await auth0Client?.loginWithPopup();
    const isAuthenticated = await auth0Client?.isAuthenticated();
    if (isAuthenticated) {
      const user = await auth0Client?.getUser();
      setAuth(user);
    }
  };
  const logout = async () => {
    await auth0Client?.logout({
      openUrl: false
    });
    setAuth(undefined);
  };
  return <AuthContext.Provider value={{
    isLoading: loading,
    auth,
    currentUser,
    setCurrentUser,
    login,
    logout,
    verify
  }}>
      {children}
    </AuthContext.Provider>;
};
export { AuthContext, AuthProvider };