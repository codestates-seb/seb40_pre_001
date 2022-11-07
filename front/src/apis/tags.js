import { apiClient } from './auth';

const getAllTags = async () => {
  const response = await apiClient.get('/tags');

  return response.data.data;
};

export { getAllTags };
