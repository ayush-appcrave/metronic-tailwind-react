import axios, { AxiosResponse } from 'axios';
import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useState
} from 'react';

import * as authHelper from '../_helpers';
import { type AuthModel, type UserModel } from '../_models';

const API_URL = process.env.REACT_APP_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/user`;
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgotpassword`;

interface AuthContextProps {
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: UserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
  login: (email: string, password: string) => Promise<AxiosResponse<any>>;
  register: (
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    password_confirmation: string
  ) => Promise<AxiosResponse<any>>;
  requestPassword: (email: string) => Promise<AxiosResponse<any>>;
  getUserByToken: (token: string) => Promise<AxiosResponse<any>>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

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

  // Server should return AuthModel
  const login = async (email: string, password: string) => {
    return await axios.post<AuthModel>(LOGIN_URL, {
      email,
      password
    });
  };

  // Server should return AuthModel
  const register = async (
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    password_confirmation: string
  ) => {
    return await axios.post(REGISTER_URL, {
      email,
      first_name: firstname,
      last_name: lastname,
      password,
      password_confirmation
    });
  };

  // Server should return object => { result: boolean } (Is Email in DB)
  const requestPassword = async (email: string) => {
    return await axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
      email
    });
  };

  const getUserByToken = async (token: string) => {
    return await axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL);
  };

  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        saveAuth,
        currentUser,
        setCurrentUser,
        login,
        register,
        requestPassword,
        getUserByToken,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
