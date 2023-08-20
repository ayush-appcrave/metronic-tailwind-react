import { Auth0Client, User } from '@auth0/auth0-spa-js';
import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useEffect,
  useState
} from 'react';

import * as authHelper from '../_helpers';

interface AuthContextProps {
  isLoading: boolean;
  auth: User | undefined;
  currentUser: User | undefined;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
  // login: ()=> Promise<void>;
  logout: () => Promise<void>;
  verify: () => Promise<void>;

  login: (email?: string, password?: string) => Promise<void>;
  register?: (
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    password_confirmation: string
  ) => Promise<void>;
  requestPassword?: (email: string) => Promise<void>;
}
const AuthContext = createContext<AuthContextProps | null>(null);

let auth0Client: Auth0Client | null = null;

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState<User | undefined>(authHelper.getAuth0());
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  // Verity user session
  const verify = async () => {
    setLoading(true);
    try {
      auth0Client = new Auth0Client({
        domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
        clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
        authorizationParams: {
          redirect_uri: 'http://localhost:3000/hero/dashboard'
        }
      });

      await auth0Client.checkSession();
    } catch (error) {
      throw new Error(error as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verify();
  }, []);

  // Set auth object and save it to local storage
  const saveAuth = (auth: User | undefined) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };

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
    saveAuth(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading: loading,
        auth,
        currentUser,
        setCurrentUser,
        login,
        logout,
        verify
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
