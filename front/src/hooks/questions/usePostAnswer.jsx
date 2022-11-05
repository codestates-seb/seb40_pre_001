import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createAnswer } from '../../apis/questions';

const usePostAnswer = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, state } = useMutation(
    ({ questionId, userId, context }) =>
      createAnswer(questionId, userId, context),
    {
      onSuccess: () => (
        queryClient.setQueryData(['questions', id]),
        navigate(`/questions/${id}`)
      ),
    },
  );

  return { mutate, state };
};

export default usePostAnswer;
