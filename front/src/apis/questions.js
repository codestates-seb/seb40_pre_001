import { apiClient } from './auth';

// Post Related
const getAllPosts = async () => {
  const { data } = await apiClient.get('/questions');

  return data;
};

const createPost = async (question) => {
  const response = await apiClient.post('/questions/ask', question);

  return response;
};

const getPostById = async (id) => {
  const { data } = await apiClient.get(`/questions/${id}`);

  return data;
};

const updateQuestionById = async (id, newDetails) => {
  const response = await apiClient.patch(`/questions/edit/${id}`, newDetails);

  return response;
};

const getSimplePostById = async (id) => {
  const response = await apiClient.get(`/questions/simple/${id}`);

  return response.data.data;
};

const getPostsByKeyword = async (keyword) => {
  const { data } = await apiClient.get(
    `/questions/search?searchTitle=${keyword}`,
  );

  return data;
};

const deletePost = async (id, userId) => {
  const response = await apiClient.delete(`/questions/${id}`, {
    params: { userId },
  });

  return response;
};

const modifyPost = async (questionId, id, modifiedContent) => {
  const response = await apiClient.patch(`/questions/edit/${questionId}`, {
    ...modifiedContent,
    id,
  });

  return response;
};

// Answer related
const createAnswer = async (questionId, userId, context) => {
  const response = await apiClient.post(`/questions/${questionId}`, {
    userId,
    context,
  });

  return response;
};

const modifyAnswer = async (answerId, userId, context) => {
  const response = await apiClient.patch(`/questions/answer/edit/${answerId}`, {
    userId,
    context,
  });

  return response;
};

const deleteAnswer = async (userId, questionId, answerId) => {
  return await apiClient.delete(`/questions/${questionId}/${answerId}`, {
    params: { userId },
  });
};

// Comment related

const createComment = async (userId, questionId, questionCommentContent) => {
  const response = await apiClient.post('/questions/comments', {
    userId,
    questionId,
    questionCommentContent,
  });

  return response;
};

const createAnswerComment = async (userId, answerId, answerCommentContent) => {
  const response = await apiClient.post(`/answers/comments`, {
    userId,
    answerId,
    answerCommentContent,
  });

  return response;
};

const getCommentsByAnswerId = async (answerCommentId) => {
  const response = await apiClient.get(`/answers/comments/${answerCommentId}`);

  return response;
};

const postUpVote = async (questionId, userId) => {
  const response = await apiClient.post(
    `/questions/upvote/${questionId}?userId=${userId}`,
  );

  return response;
};

const postDownVote = async (questionId, userId) => {
  const response = await apiClient.post(
    `/questions/downvote/${questionId}?userId=${userId}`,
  );

  return response;
};

const answerUpVote = async (questionId, answerId, userId) => {
  const response = await apiClient.post(
    `/questions/upvote/${questionId}/${answerId}?userId=${userId}`,
  );

  return response;
};
const answerDownVote = async (questionId, answerId, userId) => {
  const response = await apiClient.post(
    `/questions/downvote/${questionId}/${answerId}?userId=${userId}`,
  );

  return response;
};

const deleteAnswerComment = async (answerCommentId, userId) => {
  const response = await apiClient.delete(
    `/answers/comments/${answerCommentId}?userId=${userId}`,
  );

  return response;
};

const deletePostComment = async (postCommentId, userId) => {
  const response = await apiClient.delete(
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
  const response = await apiClient.patch(
    `/answers/comments/edit/${answerCommentId}`,
    { userId, answerId, answerCommentContent },
  );

  return response;
};

const updatePostComment = async (
  questionCommentId,
  userId,
  questionId,
  questionCommentContent,
) => {
  const response = await apiClient.patch(
    `/questions/comments/edit/${questionCommentId}`,
    { userId, questionId, questionCommentContent },
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
  updatePostComment,
};

export { postUpVote, postDownVote, answerUpVote, answerDownVote };
