import axios from 'axios';
import setAuthToken from '../components/@helper/setAuthToken';

const apiClient = axios.create({
  baseURL: 'https://630c-125-177-243-74.jp.ngrok.io',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

// register
const createUser = async (registerInfo) => {
  const response = await apiClient.post('/users/signup', registerInfo);

  return response;
};

// login
const postLogin = async (loginInfo) => {
  return await apiClient.post('/auth/login', loginInfo).then((res) => {
    const token = res.headers.get('Authorization');

    const [_, jwt] = token.split(' ');
    _;

    localStorage.setItem('token', jwt);
    setAuthToken(jwt);
  });
};

export { postLogin, createUser };
