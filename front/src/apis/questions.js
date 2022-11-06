import axios from 'axios';

const apiClient2 = axios.create({
  baseURL: 'https://630c-125-177-243-74.jp.ngrok.io',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

// Post Related
const getAllPosts = async () => {
  const { data } = await apiClient2.get('/questions');

  return data;
};

const createPost = async (question) => {
  // 성공
  // questionTagList null
  // {
  //   userId,
  //   questionTitle,
  //   context,
  //   questionTagList: ['Java', 'Javasciprt', 'Python'],
  // }

  const response = await apiClient2.post('/questions/ask', question);

  console.log(response);

  return response;
};

const getPostById = async (id) => {
  // 성공
  // id === questionId
  // Answer 도 포함

  const { data } = await apiClient2.get(`/questions/${id}`);

  return data;
};

const updateQuestionById = async (id, newDetails) => {
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
  const response = await apiClient2.get(`/questions/simple/${id}`);

  console.log(response.data.data);

  return response.data.data;
};

const getPostsByKeyword = async (keyword) => {
  const { data } = await apiClient2.get(
    `/questions/search?searchTitle=${keyword}`,
  );

  console.log(data);

  return data;
};

const deletePost = async (id, userId) => {
  const response = await apiClient2.delete(`/questions/${id}`, {
    params: { userId },
  });

  return response;
};

const modifyPost = async (questionId, id, modifiedContent) => {
  const response = await apiClient2.patch(`/questions/edit/${questionId}`, {
    ...modifiedContent,
    id,
  });

  console.log(response);

  return response;
};

// Answer related
const createAnswer = async (questionId, userId, context) => {
  const response = await apiClient2.post(`/questions/${questionId}`, {
    userId,
    context,
  });

  return response;
};

const modifyAnswer = async (answerId, userId, context) => {
  const response = await apiClient2.patch(
    `/questions/answer/edit/${answerId}`,
    {
      userId,
      context,
    },
  );

  return response;
};

const deleteAnswer = async (userId, questionId, answerId) => {
  return await apiClient2.delete(`/questions/${questionId}/${answerId}`, {
    params: { userId },
  });
};

// Comment related

const createComment = async (userId, questionId, questionCommentContent) => {
  const response = await apiClient2.post('/questions/comments', {
    userId,
    questionId,
    questionCommentContent,
  });

  return response;
};

const createAnswerComment = async (userId, answerId, answerCommentContent) => {
  const response = await apiClient2.post(`/answers/comments`, {
    userId,
    answerId,
    answerCommentContent,
  });

  return response;
};

const getCommentsByAnswerId = async (answerCommentId) => {
  const response = await apiClient2.get(`/answers/comments/${answerCommentId}`);

  console.log(response);

  return response;
};

const postUpVote = async (questionId, userId) => {
  const response = await apiClient2.post(
    `/questions/upvote/${questionId}?userId=${userId}`,
  );

  console.log(response);

  return response;
};

const postDownVote = async (questionId, userId) => {
  const response = await apiClient2.post(
    `/questions/downvote/${questionId}?userId=${userId}`,
  );

  console.log(response);

  return response;
};

const answerUpVote = async (questionId, answerId, userId) => {
  const response = await apiClient2.post(
    `/questions/upvote/${questionId}/${answerId}?userId=${userId}`,
  );

  console.log(response);

  return response;
};
const answerDownVote = async (questionId, answerId, userId) => {
  const response = await apiClient2.post(
    `/questions/downvote/${questionId}/${answerId}?userId=${userId}`,
  );

  console.log(response);

  return response;
};

const deleteAnswerComment = async (answerCommentId, userId) => {
  const response = await apiClient2.delete(
    `/answers/comments/${answerCommentId}?userId=${userId}`,
  );

  return response;
};

const deletePostComment = async (postCommentId, userId) => {
  const response = await apiClient2.delete(
    `/questions/comments/${postCommentId}?userId=${userId}`,
  );

  return response;
};

const updateAnswerComment = async (
  answerCommentId,
  userId,
  answerId,
  content,
) => {
  const response = await apiClient2.patch(
    `/answers/comments/edit/${answerCommentId}`,
    { userId, answerId, content },
  );

  return response;
};

export {
  createPost,
  getAllPosts,
  getSimplePostById,
  getPostById,
  deletePost,
  getPostsByKeyword,
  modifyPost,
  updateQuestionById,
};

export { createAnswer, modifyAnswer, deleteAnswer };

export {
  createComment,
  createAnswerComment,
  getCommentsByAnswerId,
  deleteAnswerComment,
  deletePostComment,
  updateAnswerComment,
};

export { postUpVote, postDownVote, answerUpVote, answerDownVote };
