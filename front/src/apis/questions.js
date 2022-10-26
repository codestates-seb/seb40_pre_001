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

export { getAllPostData, getPostByUserId };
