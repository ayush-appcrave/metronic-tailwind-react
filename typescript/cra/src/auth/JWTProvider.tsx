import {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";
import { LoadingScreen } from "../components";
import { AuthModel, UserModel } from "./_models";
import * as authHelper from "./_helpers";
import { getUserByToken } from "./_requests";
import { useLoading } from "../providers/LoadingProvider";

type AuthContextProps = {
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: UserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
  logout: () => void;
};

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
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
    <AuthContext.Provider
      value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthInit = ({ children }: PropsWithChildren) => {
  const { getLoading, setLoading } = useLoading();
  const { auth, logout, setCurrentUser } = useAuth();
  const didRequest = useRef(false);

  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {
    setLoading("screen", true);

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
        setLoading("screen", false);
      }

      return () => (didRequest.current = true);
    };

    if (auth && auth.access_token) {
      requestUser(auth.access_token);
    } else {
      logout();
      setLoading("screen", false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export { AuthProvider, AuthInit, useAuth };
