import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAnswer } from '../../apis/questions';

const useCreateAnswer = () => {
  const queryClient = useQueryClient();

  const { mutate, state } = useMutation(
    ['postById'],
    ({ questionId, userId, context }) =>
      createAnswer(questionId, userId, context),
    {
      onSuccess: () => queryClient.invalidateQueries(['postById']),
    },
  );

  return { mutate, state };
};

export default useCreateAnswer;
