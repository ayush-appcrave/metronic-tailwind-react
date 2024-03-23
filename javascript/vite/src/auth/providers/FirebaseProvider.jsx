import { initializeApp } from '@firebase/app';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@firebase/auth';
import { useSnackbar } from 'notistack';
import { createContext, useEffect, useState } from 'react';
const AuthContext = createContext(null);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSANGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
const AuthProvider = ({
  children
}) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const {
    enqueueSnackbar
  } = useSnackbar();
  const init = async () => {
    firebaseAuth.onAuthStateChanged(user => {
      setAuth(user);
      setLoading(false);
    });
  };
  useEffect(() => {
    init();
  }, []);
  const login = async (email, password) => {
    try {
      const {
        user
      } = await signInWithEmailAndPassword(firebaseAuth, email, password);
      setAuth(user);
    } catch (error) {
      setAuth(null);
      enqueueSnackbar(`${error}`, {
        variant: 'error',
        autoHideDuration: 5000
      });
      throw error;
    }
  };
  const register = async (email, password) => {
    try {
      const {
        user
      } = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      setAuth(user);
      console.log(user);
    } catch (error) {
      setAuth(null);
      enqueueSnackbar(`${error}`, {
        variant: 'error',
        autoHideDuration: 5000
      });
      throw error;
    }
  };
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleAuthProvider);

      // This is the signed-in user
      const user = result.user;
      setAuth(user);
    } catch (error) {
      setAuth(null);
      enqueueSnackbar(`${error}`, {
        variant: 'error',
        autoHideDuration: 5000
      });
      throw error;
    }
  };
  const loginWithGithub = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, githubAuthProvider);

      // This is the signed-in user
      const user = result.user;
      setAuth(user);
    } catch (error) {
      setAuth(null);
      enqueueSnackbar(`${error}`, {
        variant: 'error',
        autoHideDuration: 5000
      });
      throw error;
    }
  };
  const loginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, facebookAuthProvider);

      // This is the signed-in user
      const user = result.user;
      setAuth(user);
    } catch (error) {
      setAuth(null);
      enqueueSnackbar(`${error}`, {
        variant: 'error',
        autoHideDuration: 5000
      });
      throw error;
    }
  };
  const logout = async () => {
    signOut(firebaseAuth);
    setAuth(null);
  };
  return <AuthContext.Provider value={{
    isLoading: loading,
    auth,
    currentUser,
    setCurrentUser,
    login,
    register,
    logout,
    loginWithGoogle,
    loginWithGithub,
    loginWithFacebook
  }}>
      {children}
    </AuthContext.Provider>;
};
export { AuthContext, AuthProvider };