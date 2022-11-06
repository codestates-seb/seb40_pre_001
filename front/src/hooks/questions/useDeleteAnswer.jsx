import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteAnswer } from '../../apis/questions';
import { ROUTES } from '../../constants';

const useDeleteAnswer = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, status } = useMutation(
    // delete answer로 바뀌어야함
    ({ userId, questionId, answerId }) =>
      deleteAnswer(userId, questionId, answerId),
    {
      onSuccess: () => {
        return (
          queryClient.invalidateQueries(['questions']),
          navigate(ROUTES.QUESTIONS.path)
        );
      },
    },
  );

  const handleDelete = (userId, questionId, answerId) => {
    mutate({ userId, questionId, answerId });
  };

  return { handleDelete, status };
};

export default useDeleteAnswer;
