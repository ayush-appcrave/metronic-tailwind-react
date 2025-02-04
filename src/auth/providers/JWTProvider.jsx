/* eslint-disable no-unused-vars */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import * as authHelper from '../_helpers';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

export const AUTH_LOGIN_URL = `${API_BASE_URL}/users/login`;
export const AUTH_LOGOUT_URL = `${API_BASE_URL}/users/logout`;
export const AUTH_CREATE_USER_URL = `${API_BASE_URL}/users/create-user`;
export const AUTH_VERIFY_TOKEN_URL = `${API_BASE_URL}/users/verify-token`;
export const FORGOT_PASSWORD_URL = `${API_BASE_URL}/forgot-password`;
export const RESET_PASSWORD_URL = `${API_BASE_URL}/reset-password`;
export const USER_PROFILE_URL = `${API_BASE_URL}/user`;

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState();

  /**
   * Verifies and initializes the authentication state
   *
   * Flow:
   * 1. Retrieves saved auth data from localStorage
   * 2. If auth data exists:
   *    - Updates auth context state
   *    - Sets current user in context
   * 3. If no auth data:
   *    - Clears any existing auth data
   *    - Resets current user state
   * 4. Completes loading state to allow route rendering
   *
   * This function maintains user session persistence across
   * page refreshes and browser sessions while ensuring
   * protected routes remain secure.
   */
  const verify = async () => {
    const savedAuth = authHelper.getAuth();
    if (savedAuth) {
      try {
        const response = await axios.post(AUTH_VERIFY_TOKEN_URL);
        if (response.data.valid) {
          // Update user data with fresh data from server
          const verifiedAuth = {
            ...savedAuth,
            ...response.data.user,
          };
          setAuth(verifiedAuth);
          setCurrentUser(verifiedAuth);
        } else {
          saveAuth(undefined);
          setCurrentUser(undefined);
        }
      } catch (error) {
        // Token is invalid or expired
        saveAuth(undefined);
        setCurrentUser(undefined);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    verify();
  }, []);

  const saveAuth = (auth) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };
  const login = async (Email, Password) => {
    try {
      const { data } = await axios.post(AUTH_LOGIN_URL, {
        Email,
        Password,
      });
      const auth = data?.data;

      saveAuth(auth);
      setCurrentUser(auth);

      return {
        success: true,
        message: data.message,
        data: data.data,
      };
    } catch (error) {
      saveAuth(undefined);
      return {
        success: false,
        statusCode: error.response?.data?.statusCode,
        message: error.response?.data?.message || 'Something went wrong',
        errors: error.response?.data?.errors || [],
      };
    }
  };
  const register = async (Email, Password, Role, FullName) => {
    try {
      const response = await axios.post(AUTH_CREATE_USER_URL, {
        Email,
        Password,
        Role,
        FullName,
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

  const requestPasswordResetLink = async (Email) => {
    // await axios.post(FORGOT_PASSWORD_URL, {
    //   Email,
    // });
    return Promise.resolve();
  };
  const changePassword = async (Email, token, Password, password_confirmation) => {
    await axios.post(RESET_PASSWORD_URL, {
      Email,
      token,
      Password,
      password_confirmation,
    });
  };
  const getUser = async () => {
    return await axios.get(GET_USER_URL);
  };

  const logout = async () => {
    try {
      const response = await axios.post(AUTH_LOGOUT_URL);
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
