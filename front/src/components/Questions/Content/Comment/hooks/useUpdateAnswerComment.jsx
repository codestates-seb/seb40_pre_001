import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateAnswerComment } from '../../../../../apis/questions';

const useUpdateAnswerComment = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById', 'answer-comments'],
    ({ answerCommentId, userId, answerId, content }) =>
      updateAnswerComment(answerCommentId, userId, answerId, content),
    {
      onSuccess: () => queryClient.invalidateQueries(['answer-comments']),
    },
  );

  const handleUpdate = (answerCommentId, userId, answerId, content) => {
    mutate({ answerCommentId, userId, answerId, content });
  };

  return { handleUpdate, status };
};

export default useUpdateAnswerComment;
