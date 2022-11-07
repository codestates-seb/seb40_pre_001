import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment } from '../../../../../apis/questions';

const useCreateComment = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById', 'post-comments'],
    ({ userId, questionId, questionCommentContent }) =>
      createComment(userId, questionId, questionCommentContent),
    {
      onSuccess: () => queryClient.invalidateQueries(['post-comments']),
    },
  );

  const handleCreate = (userId, questionId, questionCommentContent) => {
    if (!userId) {
      alert('로그인을 해주시기 바랍니다.');
      return;
    }

    if (questionCommentContent.length < 15) {
      alert('댓글은 15자 이상 입력하셔야 합니다.');
      return;
    }
    mutate({ userId, questionId, questionCommentContent });
  };

  return { handleCreate, status };
};

export default useCreateComment;
