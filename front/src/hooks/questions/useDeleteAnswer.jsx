import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAnswer } from '../../apis/questions';

const useDeleteAnswer = () => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    ['postById'],
    ({ userId, questionId, answerId }) =>
      deleteAnswer(userId, questionId, answerId),
    {
      onSuccess: () => queryClient.invalidateQueries(['postById']),
      retry: false,
    },
  );

  const handleDelete = (userId, questionId, answerId) => {
    mutate({ userId, questionId, answerId });
  };

  return { handleDelete, status };
};

export default useDeleteAnswer;
