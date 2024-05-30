import axios from 'axios';
const API_URL = import.meta.env.VITE_APP_API_URL;
const USER_URL = `${API_URL}/user`;
const USER_RESTORE_URL = `${API_URL}/restore`;
const USER_PASSWORD_UPDATE_URL = `${API_URL}/updatePassword`;
const GET_USERS_URL = `${API_URL}/users/query`;
const getUsers = async query => {
  return await axios.get(`${GET_USERS_URL}?${query}`).then(d => {
    return d.data;
  });
};
const getUserById = async id => {
  return await axios.get(`${USER_URL}/${id}`).then(response => response.data).then(response => response.data);
};
const createUser = async user => {
  return await axios.put(USER_URL, user).then(response => response.data).then(response => response.data);
};
const updateUser = async user => {
  return await axios.post(`${USER_URL}/${user.id}`, user).then(response => response.data).then(response => response.data);
};
const updateUserPassword = async (user, userId) => {
  return await axios.post(`${USER_PASSWORD_UPDATE_URL}/${userId}`, user).then(response => response.data).then(response => response.data);
};
const deleteUser = async userId => {
  await axios.delete(`${USER_URL}/${userId}`).then(() => {});
};
const restoreUser = async userId => {
  return await axios.post(`${USER_RESTORE_URL}/${userId}`).then(response => response.data).then(response => response.data);
};
const deleteSelectedUsers = async userIds => {
  const requests = userIds.map(async id => await axios.delete(`${USER_URL}/${id}`));
  await axios.all(requests).then(() => {});
};
const restoreMultipleUsers = async userIds => {
  const requests = userIds.map(async id => await axios.post(`${USER_RESTORE_URL}/${id}`));
  await axios.all(requests).then(() => {});
};
export { createUser, deleteSelectedUsers, deleteUser, getUserById, getUsers, restoreMultipleUsers, restoreUser, updateUser, updateUserPassword };