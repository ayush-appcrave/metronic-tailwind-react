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
  signInWithPopup,
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
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSANGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
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
  const verify = async () => {
    // firebaseAuth.verifyIdToken()
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
      const result = await signInWithPopup(firebaseAuth, githubAuthProvider);

      // This is the signed-in user
      const user = result.user;
      console.log(user);
      saveAuth(user);
    } catch (error) {
      saveAuth(undefined);
      throw new Error(`Error ${error}`);
    }
  };

  const loginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, facebookAuthProvider);

      // This is the signed-in user
      const user = result.user;
      console.log(user);
      saveAuth(user);
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
