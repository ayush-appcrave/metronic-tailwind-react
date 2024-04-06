import { Auth0Client, User } from '@auth0/auth0-spa-js';
import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useEffect,
  useState
} from 'react';

interface AuthContextProps {
  isLoading: boolean;
  auth: User | undefined;
  currentUser: User | undefined;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
  logout: () => Promise<void>;
  verify: () => Promise<void>;
  login: (email?: string, password?: string) => Promise<void>;
  loginWithGoogle?: () => Promise<void>;
  loginWithFacebook?: () => Promise<void>;
  loginWithGithub?: () => Promise<void>;
  register?: (
    email: string,
    password: string,
    firstname?: string,
    lastname?: string,
    password_confirmation?: string
  ) => Promise<void>;
  requestPassword?: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

const auth0Client: Auth0Client = new Auth0Client({
  domain: process.env.VITE_APP_AUTH0_DOMAIN ?? '',
  clientId: import.meta.env.VITE_APP_AUTH0_CLIENT_ID ?? '',
  authorizationParams: {
    redirect_uri: 'http://localhost:3000/hero/dashboard'
  }
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState<User | undefined>(undefined);
  const [currentUser, setCurrentUser] = useState<User | undefined>();

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
      throw new Error(error as string);
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
