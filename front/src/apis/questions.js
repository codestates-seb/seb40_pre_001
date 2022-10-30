import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});

const getAllPostData = async () => {
  const { data } = await apiClient.get('/api/questions');

  return data;
};

const getPostByUserId = async (id) => {
  const { data } = await apiClient.get(`/api/questions/${id}`, {
    headers: { 'Content-Type': 'application/json' },
  });

  return data;
};

const createPost = async (newPost) => {
  const { data } = await apiClient.post('/api/questions/ask', newPost);

  return data;
};

const loginUser = async (credentials) => {
  await apiClient
    .post('/api/login', credentials)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const getUserStatus = async () => {
  const response = await apiClient.get('/api/login', { withCredentials: true });

  console.log('res', response);

  return response;
};

export {
  apiClient,
  getAllPostData,
  getPostByUserId,
  createPost,
  loginUser,
  getUserStatus,
};
