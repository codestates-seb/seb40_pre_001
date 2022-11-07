import axios from 'axios';

const apiClient2 = axios.create({
  baseURL: 'https://630c-125-177-243-74.jp.ngrok.io',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

const getAllTags = async () => {
  const response = await apiClient2.get('/tags');

  return response.data.data;
};

export { getAllTags };
