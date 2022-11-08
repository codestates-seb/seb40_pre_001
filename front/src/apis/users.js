import { apiClient } from './auth';

const getAllUsers = async () => {
  const { data } = await apiClient.get('/users');

  return data;
};

const getUserById = async (id) => {
  const response = await apiClient.get(`/users/${id}`);

  return response.data.data;
};

const getUserStatus = async (userId) => {
  const response = await apiClient.get(`/users/${userId}/profile`);

  return response.data;
};

const deleteUser = async (id) => {
  const response = await apiClient
    .delete(`/users/delete/${id}`)
    .then(() => console.log('user deleted'));

  return response;
};

const updateUserEmail = async (id, newEmail) => {
  const response = await apiClient.patch(`/users/edit/${id}`, {
    userEmail: newEmail,
  });

  return response;
};

const updateUserInfo = async (id, newInfo) => {
  const response = await apiClient.patch(`/users/edit/${id}`, newInfo);

  return response;
};

const getCurrentUser = async () => {
  const accessToken = localStorage.getItem('token');
  const response = await apiClient.get('/users/info', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  localStorage.setItem('user', response.data);

  return response;
};

export {
  getAllUsers,
  getUserStatus,
  getUserById,
  updateUserInfo,
  getCurrentUser,
  updateUserEmail,
  deleteUser,
};
