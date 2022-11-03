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

const getPostsByKeyword = async (keyword) => {
  const { data } = await apiClient.get(`/api/search?q=${keyword}`);

  console.log('data', data);

  return data;
};

const createPost = async (newPost) => {
  const { data } = await apiClient.post('/api/questions/ask', newPost);

  return data;
};

const patchMethod = async (id, newStatus) => {
  const { data } = await apiClient.patch(`/api/questions/${id}`, newStatus);

  return data;
};

const deletePost = async (id) => {
  const response = await apiClient.delete(`/api/questions/${id}`);

  return response;
};

export {
  apiClient,
  getAllPostData,
  getPostsByKeyword,
  createPost,
  patchMethod,
  deletePost,
};
