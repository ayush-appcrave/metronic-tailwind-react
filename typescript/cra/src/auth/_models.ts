import { LanguageCodeType } from "../i18n/";

export interface AuthModel {
  access_token: string;
  refreshToken?: string;
}

export interface UserModel {
  id: number;
  username: string;
  password: string | undefined;
  email: string;
  first_name: string;
  last_name: string;
  fullname?: string;
  occupation?: string;
  companyName?: string;
  phone?: string;
  roles?: Array<number>;
  pic?: string;
  language?: LanguageCodeType;
  auth?: AuthModel;
}
