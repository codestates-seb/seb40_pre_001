import { useAnswerUpVote, useAnswerDownVote } from './useAnswerVote';
import { usePostUpVote, usePostDownVote } from './usePostVote';
import useCreateAnswer from './useCreateAnswer';
import useDeleteAnswer from './useDeleteAnswer';
import useGetAllPosts from './useGetAllPosts';
import useGetAnswersLength from './useGetAnswerLength';
import useGetFilteredPost from './useGetFilteredPost';
import useGetPostById from './useGetPostById';
import useDeletePost from './useDeletePost';

// get
export {
  useGetAllPosts,
  useGetAnswersLength,
  useGetFilteredPost,
  useGetPostById,
};

// votes
export { usePostUpVote, usePostDownVote, useAnswerUpVote, useAnswerDownVote };

export { useCreateAnswer, useDeleteAnswer, useDeletePost };
