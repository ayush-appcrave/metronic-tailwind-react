import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

import { useLoaders } from '../../providers/LoadersProvider';
import * as authHelper from '../_helpers';
import { type AuthModel, type UserModel } from '../_models';
import { getUserByToken } from '../_requests';

interface AuthContextProps {
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: UserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
  logout: () => void;
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {}
};

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>();
  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };

  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthInit = ({ children }: PropsWithChildren) => {
  const { screenLoader, setScreenLoader } = useLoaders();
  const { auth, logout, setCurrentUser } = useAuth();
  const didRequest = useRef(false);

  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {
    console.log('auth');

    setScreenLoader(true);

    const requestUser = async (accessToken: string) => {
      try {
        if (!didRequest.current) {
          const { data } = await getUserByToken(accessToken);

          if (data) {
            setCurrentUser(data);
          }
        }
      } catch (error) {
        console.error(error);

        if (!didRequest.current) {
          logout();
        }
      } finally {
        setScreenLoader(false);
      }

      return () => (didRequest.current = true);
    };

    if (auth?.access_token) {
      requestUser(auth.access_token);
    } else {
      logout();
      setScreenLoader(false);
    }
    // eslint-disable-next-line
  }, []);

  return screenLoader ? <></> : <>{children}</>;
};

export { AuthInit, AuthProvider, useAuth };
