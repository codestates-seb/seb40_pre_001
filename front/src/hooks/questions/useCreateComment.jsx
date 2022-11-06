import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment } from '../../apis/questions';

const useCreateComment = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ({ userId, questionId, questionCommentContent }) =>
      createComment(userId, questionId, questionCommentContent),
    {
      onSuccess: () => queryClient.invalidateQueries(['questions']),
    },
  );

  const handleCreate = (userId, questionId, questionCommentContent) => {
    mutate({ userId, questionId, questionCommentContent });
  };

  return { handleCreate, status };
};

export default useCreateComment;
