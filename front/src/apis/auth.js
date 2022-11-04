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
  // 성공

  // const accessToken = localStorage.getItem('token');

  const response = await apiClient.post('/users/signup', registerInfo);

  return response;
};

// login
// 추후 네이밍 수정 필요
const postLogin = async (loginInfo) => {
  // 성공
  return await apiClient.post('/auth/login', loginInfo).then(() => {
    const example =
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W10sInVzZXJuYW1lIjoidGVzdEB0ZXN0LmNvbSIsInN1YiI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2Njc1MzM2MDAsImV4cCI6MTY2NzYwNTYwMH0.BDnDQW2VKT5yzAbwpzPHiw5H4ZlKhl1tjC4lMMyioS4';

    // const token = res.headers.get('Authorization');

    const [_, jwt] = example.split(' ');
    _;

    // console.log('type', type);
    // console.log('token', jwt);

    // 쿠키에 저장해야됨
    // 혹은 로컬 스토리지
    // cookie.setCookie('user', jwt, { maxAge: 2000 });

    localStorage.setItem('token', jwt);
    setAuthToken(jwt);
  });
};

export { postLogin, createUser };
