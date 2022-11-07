import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAnswerComment } from '../../../../../apis/questions';

const useDeleteAnswerComment = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById', 'answer-comments'],
    ({ answerCommentId, userId }) =>
      deleteAnswerComment(answerCommentId, userId),
    {
      onSuccess: () => queryClient.invalidateQueries(['answer-comments']),
    },
  );

  const handleDelete = (answerCommentId, userId) => {
    if (confirm('정말 삭제하시겠습니까 ?')) {
      mutate({ answerCommentId, userId });
    }
  };

  return { handleDelete, status };
};

export default useDeleteAnswerComment;
