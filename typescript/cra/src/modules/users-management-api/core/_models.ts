import { PaginationState } from '../helpers';
import { UpdateUserPasswordAccordion } from '../components/edit-user/UpdateUserPasswordAccordion';

export interface UserGeneralInfo {
  id: string;
  created_at?: string;
  initials?: {
    label: string;
    state: string;
  };
  first_name?: string;
  last_name?: string;
  avatar?: string;
  color?: string;
  email?: string;
  role?: string;
  status?: string;
  deleted?: string;
  two_steps_auth?: boolean;
}

export interface UserPasswords {
  password?: string;
  password_confirmation?: string;
  current_password?: string;
}

export type User = UserGeneralInfo & UserPasswords;

export interface UsersQueryResponse {
  message: string;
  data: User[];
  pagination: PaginationState;
  success: boolean;
}

export const initialUser: User = {
  id: '1',
  avatar: 'avatars/300-6.jpg',
  role: 'Administrator',
  first_name: '',
  email: ''
};
