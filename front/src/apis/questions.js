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
  const response = await apiClient2.post('/questions/ask', question);

  return response;
};

const getPostById = async (id) => {
  const { data } = await apiClient2.get(`/questions/${id}`);

  return data;
};

const updateQuestionById = async (id, newDetails) => {
  const response = await apiClient2.patch(`/questions/edit/${id}`, newDetails);

  return response;
};

const getSimplePostById = async (id) => {
  const response = await apiClient2.get(`/questions/simple/${id}`);

  return response.data.data;
};

const getPostsByKeyword = async (keyword) => {
  const { data } = await apiClient2.get(
    `/questions/search?searchTitle=${keyword}`,
  );

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

  return response;
};

const postUpVote = async (questionId, userId) => {
  const response = await apiClient2.post(
    `/questions/upvote/${questionId}?userId=${userId}`,
  );

  return response;
};

const postDownVote = async (questionId, userId) => {
  const response = await apiClient2.post(
    `/questions/downvote/${questionId}?userId=${userId}`,
  );

  return response;
};

const answerUpVote = async (questionId, answerId, userId) => {
  const response = await apiClient2.post(
    `/questions/upvote/${questionId}/${answerId}?userId=${userId}`,
  );

  return response;
};
const answerDownVote = async (questionId, answerId, userId) => {
  const response = await apiClient2.post(
    `/questions/downvote/${questionId}/${answerId}?userId=${userId}`,
  );

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
  answerCommentContent,
) => {
  const response = await apiClient2.patch(
    `/answers/comments/edit/${answerCommentId}`,
    { userId, answerId, answerCommentContent },
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
