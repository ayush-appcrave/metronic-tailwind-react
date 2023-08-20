import { initializeApp } from '@firebase/app';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User
} from '@firebase/auth';
import { useSnackbar } from 'notistack';
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
  auth: User | null;
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
  logout: () => Promise<void>;
  verify: () => Promise<void>;

  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle?: () => Promise<void>;
  loginWithFacebook?: () => Promise<void>;
  loginWithGithub?: () => Promise<void>;
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
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const facebookAuthProvider = new FacebookAuthProvider();

const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { enqueueSnackbar } = useSnackbar();

  const verify = async () => {
    firebaseAuth.onAuthStateChanged((user) => {
      setAuth(user);
      setLoading(false);
    });
  };

  useEffect(() => {
    verify();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
      setAuth(user);
    } catch (error) {
      setAuth(null);
      enqueueSnackbar(`${error}`, { variant: 'error' });
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      setAuth(user);
      console.log(user);
    } catch (error) {
      setAuth(null);
      enqueueSnackbar(`${error}`, { variant: 'error' });
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleAuthProvider);

      // This is the signed-in user
      const user = result.user;

      console.log(user);
      setAuth(user);
    } catch (error) {
      setAuth(null);
      throw error;
    }
  };

  const loginWithGithub = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, githubAuthProvider);

      // This is the signed-in user
      const user = result.user;
      console.log(user);
      setAuth(user);
    } catch (error) {
      setAuth(null);
      throw error;
    }
  };

  const loginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, facebookAuthProvider);

      // This is the signed-in user
      const user = result.user;
      console.log(user);
      setAuth(user);
    } catch (error) {
      setAuth(null);
      throw error;
    }
  };

  const logout = async () => {
    signOut(firebaseAuth);
    setAuth(null);
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

export { AuthContext, AuthProvider };
