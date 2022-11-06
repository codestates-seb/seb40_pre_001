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
      onMutate: () => (
        // navigate 변경되어야함
        queryClient.invalidateQueries(['answers', id]), navigate(`/questions`)
      ),
    },
  );

  return { mutate, state };
};

export default usePostAnswer;
