// import {
//   createContext,
//   type Dispatch,
//   type PropsWithChildren,
//   type SetStateAction,
//   useContext,
//   useState,
// } from 'react';
// import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
// import { AuthModel, UserModel } from '../_models';
// import { AxiosResponse } from 'axios';
// import * as authHelper from '../_helpers';
 
// interface AuthContextProps {
//   auth: AuthModel | undefined;
//   saveAuth: (auth: AuthModel | undefined) => void;
//   currentUser: UserModel | undefined;
//   setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
//   login: (email: string, password: string) => Promise<void>;
//   register: (
//     email: string,
//     firstname: string,
//     lastname: string,
//     password: string,
//     password_confirmation: string
//   ) => Promise<{ data: UserModel; }>;
//   getUserByToken: (token: string) => Promise<{ data: UserModel }>;
//   logout: () => void;
// }
// const AuthContext = createContext<AuthContextProps | null>(null);

// const useAuth = () => {
//   return useContext(AuthContext);
// };

// const AuthProvider = ({ children }: PropsWithChildren) => {
//   const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth());
//   const [currentUser, setCurrentUser] = useState<UserModel | undefined>();
//   const { loginWithRedirect } = useAuth0();

//   const saveAuth = async () => {
//     console.log("saveAuth");
//   }
//   const login = async (email: string, password: string) => {
//     console.log(email)
//     console.log(password)
//   }

//   const register = async () => {
//     console.log("register")
//     return {
//       data: {
//         api_token: "arstras"
//       }
//     }
//   }

//   const getUserByToken = async () => {
//     console.log("getUserByToken")
//     return {
//       data: {
//         api_token: "arstras"
//       }
//     }
//   }

//   const logout = async () => {
//     console.log("logout")
//   }

//   return <Auth0Provider
//   domain="dev-71gfvs3huwm3geqk.us.auth0.com"
//   clientId="A4nEnzCN7UIaYh01bn7nFRmMVJdh1enK"
//   authorizationParams={{
//     redirect_uri: window.location.origin
//   }}
// >
//   <AuthContext.Provider
//       value={{
//         register,
//         getUserByToken,
//         saveAuth,
//         setCurrentUser,
//         auth,
//         currentUser,
//         login,
//         logout
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
// </Auth0Provider>;
// };

// export { AuthProvider, useAuth, AuthContext };
