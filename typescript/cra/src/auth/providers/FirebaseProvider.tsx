import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useState,
  useEffect
} from 'react';
import * as authHelper from '../_helpers';
import { initializeApp } from '@firebase/app';
import {
  getAuth,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider
} from '@firebase/auth';

interface AuthContextProps {
  isLoading: boolean;
  auth: User | undefined;
  currentUser: User | undefined;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
  logout: () => Promise<void>;
  verify: () => Promise<void>;

  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  register: (
    email: string,
    password: string,
    firstname?: string,
    lastname?: string,
    password_confirmation?: string
  ) => Promise<void>;
  requestPassword?: (email: string) => Promise<void>;
}
const AuthContext = createContext<AuthContextProps | null>(null);

const firebaseConfig = {
  apiKey: 'AIzaSyAX-aXLvvN2g0FklFe03muFbZejNiF11tg',
  authDomain: 'keenthemes-41576.firebaseapp.com',
  projectId: 'keenthemes-41576',
  storageBucket: 'keenthemes-41576.appspot.com',
  messagingSenderId: '44736719732',
  appId: '1:44736719732:web:1705967b4e9ee58b1c9a21',
  measurementId: 'G-31Y30EC1ZD'
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const facebookAuthProvider = new FacebookAuthProvider();

const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState<User | undefined>(authHelper.getFirebaseAuth());
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  // Verity user session
  const verify = async () => {};

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

  const login = async (email: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
      saveAuth(user);
      console.log(user);
    } catch (error) {
      saveAuth(undefined);
      throw new Error(`Error ${error}`);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      saveAuth(user);
      console.log(user);
    } catch (error) {
      saveAuth(undefined);
      throw new Error(`Error ${error}`);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleAuthProvider);

      // This is the signed-in user
      const user = result.user;

      console.log(user);
      saveAuth(user);
    } catch (error) {
      saveAuth(undefined);
      throw new Error(`Error ${error}`);
    }
  };

  const loginWithGithub = async () => {
    try {
      await signInWithRedirect(firebaseAuth, githubAuthProvider);

      const result = await getRedirectResult(firebaseAuth);
      if (result) {
        const user = result.user;
        console.log(user);
        saveAuth(user);
      }
    } catch (error) {
      saveAuth(undefined);
      throw new Error(`Error ${error}`);
    }
  };

  const loginWithFacebook = async () => {
    try {
      await signInWithRedirect(firebaseAuth, facebookAuthProvider);

      const result = await getRedirectResult(firebaseAuth);
      if (result) {
        const user = result.user;
        console.log(user);
        saveAuth(user);
      }
    } catch (error) {
      saveAuth(undefined);
      throw new Error(`Error ${error}`);
    }
  };

  const logout = async () => {
    signOut(firebaseAuth);
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
        register,
        logout,
        verify,
        loginWithGoogle,
        loginWithGithub,
        loginWithFacebook
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
