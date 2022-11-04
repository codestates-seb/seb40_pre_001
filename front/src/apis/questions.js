import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});

const apiClient2 = axios.create({
  baseURL: 'https://630c-125-177-243-74.jp.ngrok.io',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

const getAllPosts = async () => {
  const { data } = await apiClient2.get('/questions');

  return data;
};

const demoCreatePost = async (question) => {
  // 성공
  // questionTagList null
  // {
  //   userId: 1,
  //   questionTitle: 'new title new title new title new title',
  //   context:
  //     'sakljdsalkdjskaldjksaljdoisjvklzxclkxzjclasm,nelkjsakljfoiwqjnkldasnmkldjwqiojdas',
  //   questionTagList: ['Java', 'Javasciprt', 'Python'],
  // }

  const response = await apiClient2.post('/questions/ask', question);

  console.log(response);

  return response;
};

const getAnswersById = async (id) => {
  // 성공
  // id === questionId
  // Answer 도 포함

  const { data } = await apiClient2.get(`/questions/${id}`);

  return data?.answers;
};

const demoUpdateQuestionById = async (id, newDetails) => {
  // 성공
  // id === questionId
  // {
  //   userId: 1,
  //   questionTitle: 'updated title updated tit2le updated tsdsdaitle',
  //   context: 'updated context updated context updated contexsadsadt',
  // };

  const response = await apiClient2.patch(`/questions/edit/${id}`, newDetails);

  console.log(response);

  return response;
};

const getSimplePostById = async (id) => {
  // id === questionId
  // 성공
  const response = await apiClient2.get(`questions/simple/${id}`);

  console.log(response.data.data);

  return response.data.data;
};

const deletePost = async (id, userId) => {
  const response = await apiClient2.delete(`/questions/${id}`, {
    params: { userId },
  });

  console.log(response);

  return response;
};

// MSW

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

export { apiClient, getPostsByKeyword, createPost, patchMethod };

export { demoCreatePost, demoUpdateQuestionById };

export { getAllPosts, getSimplePostById, getAnswersById, deletePost };
