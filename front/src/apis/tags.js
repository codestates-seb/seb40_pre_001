import axios from 'axios';
//mocks
// const apiClient = axios.create({
//   baseURL: 'http://localhost:3000',
//   headers: {
//     'Content-type': 'application/json',
//   },
// });

//ngrok
const apiClient2 = axios.create({
  baseURL: 'https://630c-125-177-243-74.jp.ngrok.io',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

// 태그데이터
const getAlltagsData = async () => {
  const { data } = await apiClient2.get('tags');
  console.log(data);
  return data;
};

// 태그 조회
const getTagsbyKeyword = async (keyword) => {
  const { data } = await apiClient2.get(`/tags?q=${keyword}`);
  console.log(keyword);
  return data;
};

export { getAlltagsData, getTagsbyKeyword };
