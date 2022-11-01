import axios from 'axios';
import setAuthToken from '../components/@helper/setAuthToken';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});

const getGithubURL = async () => {
  const response = await axios.get(
    `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_ID}`,
  );

  return response.data;
};

const githubAuthPost = async () => {
  const response = await apiClient.post(
    'https://github.com/login/oauth/authorize/',
    {
      client_id: process.env.REACT_APP_GITHUB_ID,
      redirect_uri: 'http://localhost:3000/login',
    },
  );

  return response;
};

const userLogin = (payload) => {
  axios
    .post('https://reqres.in/api/login', payload)
    .then((response) => {
      //get token from response
      const token = response.data.token;

      //set JWT token to local
      localStorage.setItem('token', token);

      //set token to axios common header
      setAuthToken(token);
    })
    .catch((err) => console.log(err));
};

export { getGithubURL, githubAuthPost, userLogin };
