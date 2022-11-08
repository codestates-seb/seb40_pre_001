import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../../apis/questions';

const useCreateQuestions = () => {
  const queryClient = useQueryClient();

  //mutate > get, post 등
  //status > success error
  const { mutate, status } = useMutation(
    ['questionId'],
    ({ userId, questionTitle, context }) =>
      createPost(userId, questionTitle, context),
    {
      onSuccess: () => queryClient.invalidateQueries(['questionId']),
    },
  );
  return { mutate, status };
};

export default useCreateQuestions;
