import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { modifyAnswer } from '../../apis/questions';

const useEditAnswer = (questionId) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, status } = useMutation(
    ['postById'],
    ({ answerId, userId, context }) => modifyAnswer(answerId, userId, context),
    {
      onSuccess: () => (
        queryClient.invalidateQueries(['questions']),
        navigate(`/questions/${questionId}`)
      ),
      retry: false,
    },
  );

  return { mutate, status };
};

export default useEditAnswer;
