import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '../../apis/questions';

const useCreateQuestions = (
  title,
  questionsUp,
  questionsDown,
  tags,
  author,
) => {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation(
    //mutate > get, post 등
    //status > success error
    ['questionsId'],
    () => createPost(title, questionsUp, questionsDown, tags, author),
    {
      onSuccess: () => queryClient.invalidateQueries(['questionsId']),
    },
  );
  return { mutate, status };
};
export default useCreateQuestions;
