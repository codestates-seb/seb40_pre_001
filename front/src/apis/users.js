import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://630c-125-177-243-74.jp.ngrok.io',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

const getAllUsers = async () => {
  // 성공
  const { data } = await apiClient.get('/users');

  return data;
};

const getUserById = async (id) => {
  // 성공
  const response = await apiClient.get(`/users/${id}`);

  return response.data.data;
};

const deleteUser = async (id) => {
  // 성공

  // 성공시 백엔드에서 보내주는 메시지가 있으면 좋을거 같음
  const response = await apiClient
    .delete(`/users/delete/${id}`)
    .then(() => console.log('user deleted'));

  return response;
};

const updateUserEmail = async (id, newEmail) => {
  // newEmail = {email : ''}

  // data nesting 확인 명세서랑 다름
  const response = await apiClient.patch(
    `/users/email/settings/${id}`,
    newEmail,
  );

  console.log(response);

  return response;
};

const updateUserInfo = async (id, newInfo) => {
  // {
  // "email": "test@test.com",
  // "userNickname": "testUser",
  // "description": null,
  // "address": null,
  // "birthday": null,
  // }

  // 요청을 두번 보내야하는 경우가 있는듯, description 수정 안됨.

  const response = await apiClient.patch(`/users/edit/${id}`, newInfo);

  console.log(response);

  return response;
};

const getCurrentUser = async () => {
  // 성공
  const accessToken = localStorage.getItem('token');
  const response = await apiClient.get('/users/login', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  localStorage.setItem('user', response.data);

  return response;
};

export {
  getAllUsers,
  updateUserInfo,
  getUserById,
  getCurrentUser,
  updateUserEmail,
  deleteUser,
};
