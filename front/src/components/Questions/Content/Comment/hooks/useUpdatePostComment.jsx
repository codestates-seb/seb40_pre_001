import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePostComment } from '../../../../../apis/questions';

const useUpdatePostComment = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById', 'post-comments'],
    ({ questionCommentId, userId, questionId, content }) =>
      updatePostComment(questionCommentId, userId, questionId, content),
    {
      onSuccess: () => queryClient.invalidateQueries(['post-comments']),
    },
  );

  const handleUpdate = (questionCommentId, userId, questionId, content) => {
    mutate({ questionCommentId, userId, questionId, content });
  };

  return { handleUpdate, status };
};

export default useUpdatePostComment;
