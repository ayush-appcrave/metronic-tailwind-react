/* eslint-disable no-unused-vars */
import axios from 'axios';
import { createContext, useState } from 'react';
import * as authHelper from '../_helpers';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const LOGIN_URL = `${API_URL}/users/login`;
export const LOGOUT_URL = `${API_URL}/users/logout`;
export const REGISTER_URL = `${API_URL}/users/register`;
export const FORGOT_PASSWORD_URL = `${API_URL}/forgot-password`;
export const RESET_PASSWORD_URL = `${API_URL}/reset-password`;
export const GET_USER_URL = `${API_URL}/user`;

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState();
  const verify = async () => {
    if (auth) {
      try {
        setCurrentUser(auth);
      } catch {
        saveAuth(undefined);
        setCurrentUser(undefined);
      }
    }
  };
  const saveAuth = (auth) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };
  const login = async (email, password) => {
    try {
      const { data } = await axios.post(LOGIN_URL, {
        email,
        password,
      });
      const auth = data?.data;

      saveAuth(auth);
      setCurrentUser(auth);

      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      saveAuth(undefined);
      return {
        success: false,
        statusCode: error.response?.data?.statusCode,
        message: error.response?.data?.message,
        errors: error.response?.data?.errors || [],
      };
    }
  };
  const register = async (email, password, role, fullname) => {
    try {
      const response = await axios.post(REGISTER_URL, {
        email,
        password,
        role,
        fullname,
      });

      return {
        success: true,
        data: response.data?.data,
        message: response.data?.message,
      };
    } catch (error) {
      return {
        success: false,
        statusCode: error.response?.data?.statusCode,
        message: error.response?.data?.message,
        errors: error.response?.data?.errors || [],
      };
    }
  };

  const requestPasswordResetLink = async (email) => {
    await axios.post(FORGOT_PASSWORD_URL, {
      email,
    });
  };
  const changePassword = async (email, token, password, password_confirmation) => {
    await axios.post(RESET_PASSWORD_URL, {
      email,
      token,
      password,
      password_confirmation,
    });
  };
  const getUser = async () => {
    return await axios.get(GET_USER_URL);
  };

  const logout = async () => {
    try {
      const response = await axios.post(LOGOUT_URL);

      // Clear auth data from local storage
      saveAuth(undefined);
      setCurrentUser(undefined);

      return {
        success: true,
        message: response.data?.message || 'Logged out successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Logout failed',
        statusCode: error.response?.data?.statusCode,
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        auth,
        saveAuth,
        currentUser,
        setCurrentUser,
        login,
        register,
        requestPasswordResetLink,
        changePassword,
        getUser,
        logout,
        verify,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
