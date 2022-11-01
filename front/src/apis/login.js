import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: 'http://localhost:3000',
//   headers: {
//     'Content-type': 'application/json',
//   },
// });

const getGithubURL = async () => {
  const response = await axios.get('https://github.com/login/oauth/authorize', {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  return response.data;
};

export { getGithubURL };
