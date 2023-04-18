import axios from 'axios';
import { type AuthModel, type UserModel } from './_models';

const API_URL = process.env.REACT_APP_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/user`;
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgotpassword`;

// Server should return AuthModel
export async function login(email: string, password: string) {
  return await axios.post<AuthModel>(LOGIN_URL, {
    email,
    password
  });
}

// Server should return AuthModel
export async function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return await axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export async function requestPassword(email: string) {
  return await axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email
  });
}

export async function getUserByToken(token: string) {
  return await axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL);
}
