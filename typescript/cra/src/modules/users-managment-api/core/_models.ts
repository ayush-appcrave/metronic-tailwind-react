import {PaginationState} from '../helpers'

export type User = {
  id: string
  created_at?: string
  initials?: {
    label: string
    state: string
  },
  first_name?: string
  last_name?: string
  avatar?: string
  email?: string
  role?: string
  two_steps?: boolean
  password?: string
  password_confirmation?: string
};

export type UsersQueryResponse = {
  message: string,
  data: Array<User>,
  pagination: PaginationState
  success: boolean,
}

export const initialUser: User = {
  id: "1",
  avatar: 'avatars/300-6.jpg',
  role: 'Administrator',
  first_name: '',
  email: '',
}
