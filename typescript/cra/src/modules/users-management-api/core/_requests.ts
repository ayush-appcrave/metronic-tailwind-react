import axios, {AxiosResponse} from 'axios'
import {Response} from '../helpers'
import {User, UserPasswords, UsersQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_API_URL
const USER_URL = `${API_URL}/user`
const USER_RESTORE_URL = `${API_URL}/restore`
const USER_PASSWORD_UPDATE_URL = `${API_URL}/updatePassword`
const GET_USERS_URL = `${API_URL}/users/query`

const getUsers = (query: string): Promise<UsersQueryResponse> => {
  return axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((d: AxiosResponse<UsersQueryResponse>) => {
      return d.data;
    });


}

const getUserById = (id: string): Promise<User | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const createUser = (user: User): Promise<User | { data?: User | undefined; } | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateUser = (user: User): Promise<User | { data?: User | undefined; } | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateUserPassword = (user: UserPasswords, userId:string): Promise<User | { data?: User | undefined; } | undefined> => {
  return axios
      .post(`${USER_PASSWORD_UPDATE_URL}/${userId}`, user)
      .then((response: AxiosResponse<Response<User>>) => response.data)
      .then((response: Response<User>) => response.data)
}

const deleteUser = (userId: string): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}


const restoreUser = (userId: string): Promise<User | { data?: User | undefined; } | undefined> => {
  return axios.post(`${USER_RESTORE_URL}/${userId}`).then((response: AxiosResponse<Response<User>>) => response.data)
      .then((response: Response<User>) => response.data);
}

const deleteSelectedUsers = (userIds: Array<string>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser, updateUserPassword, restoreUser}
