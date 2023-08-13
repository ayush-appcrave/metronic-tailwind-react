import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { AuthModel, UserModel } from '../_models';
import * as authHelper from '../_helpers';
import { Auth0Client } from "@auth0/auth0-spa-js";
 
interface AuthContextProps {
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: UserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
  login: (email: string, password: string)=> Promise<{ data: AuthModel }>;
  register: (
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    password_confirmation: string
  ) => Promise<{ data: AuthModel }>;
  getUserByToken: (token: string) => Promise<{ data: UserModel }>;
  requestPassword: (email: string) => Promise<{ data: AuthModel }>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextProps | null>(null);

let auth0Client: Auth0Client | null = null; 

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>();

  const init = useCallback(async () => {
    auth0Client = new Auth0Client({
      domain: 'dev-71gfvs3huwm3geqk.us.auth0.com',
      clientId: 'A4nEnzCN7UIaYh01bn7nFRmMVJdh1enK',
      authorizationParams: {
        redirect_uri: "http://localhost:3000/hero/dashboard"
      }
    });

    await auth0Client.checkSession();

    const isAuth = await auth0Client.isAuthenticated();

    console.log(isAuth);
  }, []);

  useEffect(()=>{
    init();
  }, [init]);

  const saveAuth = () => {
    console.log("saveAuth");
  }
  const login = async (email: string, password: string) => {
    console.log("login");
    await auth0Client?.loginWithPopup();

    const isAuthenticated = await auth0Client?.isAuthenticated();

    if (isAuthenticated) {
      const user = await auth0Client?.getUser();
      console.log(user);
    }

    return {
      data: {
      access_token: "arsts",
     refreshToken: "starst",
     api_token: "arstarst"
   }
  }
  }

  const requestPassword = async (email: string) => {
    return {data: {
      access_token: "arsts",
     refreshToken: "starst",
     api_token: "arstarst"
   }}
  }

  const register = async (email: string, firstname: string, lastname: string, password: string, password_confirmation: string) => {
    try {
      // await auth0Client.;
    } catch (error) {
      console.log(error);
    }

    console.log("register")
    return {data: {
       access_token: "arsts",
      refreshToken: "starst",
      api_token: "arstarst"
    }}
  }

  const getUserByToken = async () => {
    console.log("getUserByToken")
    return {
      data:  {
        id: 1,
        username: "Arstarst",
        password: "arstars",
        email: "arstasr",
        first_name: "atarst",
        last_name: "arstrst",
        fullname: "arstarst",
        occupation: "arstrast",
        companyName: "asrtarst",
        phone: "arsta",
        roles: [1],
        pic: "aarst",
        auth: {
          access_token: "arsts",
          refreshToken: "starst",
          api_token: "arstarst"
        }
      }
    }
  }

  const logout = () => {
    console.log("logout")
  }

  return <AuthContext.Provider
      value={{
        requestPassword,
        register,
        getUserByToken,
        saveAuth,
        setCurrentUser,
        auth,
        currentUser,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
};

export { AuthProvider, AuthContext };
