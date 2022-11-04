import axios from 'axios';
// import { useCookies } from 'react-cookie';
import setAuthToken from '../components/@helper/setAuthToken';
// const cookie = useCookies(['user']);

const apiClient = axios.create({
  baseURL: 'https://630c-125-177-243-74.jp.ngrok.io',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

const getUserById = async () => {
  return apiClient.get('/users/1').then((res) => console.log(res.data));
};

const postRegister = async (credential) => {
  // credential = {email, password, userNickname}
  return await apiClient.post('/auth/login', credential).then((res) => {
    const token = res.headers.get('Authorization');

    const [type, jwt] = token.split(' ');

    console.log(res);

    console.log('type', type);
    console.log('token', jwt);

    if (jwt) {
      // 쿠키에 저장해야됨
      // 혹은 로컬 스토리지
      // cookie.setCookie('user', jwt, { maxAge: 2000 });
      setAuthToken(jwt);
    }
  });
};

export { postRegister, getUserById };
