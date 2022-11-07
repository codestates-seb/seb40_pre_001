import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAnswerComment } from '../../../../../apis/questions';

const useCreateAnswerComment = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById', 'answer-comments'],
    ({ userId, answerId, answerCommentContent }) =>
      createAnswerComment(userId, answerId, answerCommentContent),
    {
      onSuccess: () => queryClient.invalidateQueries(['answer-comments']),
    },
  );

  const handleCreate = (userId, answerId, answerCommentContent) => {
    if (!userId) {
      alert('로그인을 해주시기 바랍니다.');
      return;
    }
    if (answerCommentContent.length < 15) {
      alert('댓글은 15자 이상 입력하셔야 합니다.');
      return;
    }
    mutate({ userId, answerId, answerCommentContent });
  };

  return { handleCreate, status };
};

export default useCreateAnswerComment;
