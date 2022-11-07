import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from '../../apis/questions';

const useGetUserAnswers = (userId) => {
  const { data, status, isLoading, isSuccess } = useQuery(
    ['questions'],
    getAllPosts,
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  const userQuestions = data?.filter((question) => question.userId === userId);

  return { userQuestions, status, isLoading, isSuccess };
};

export default useGetUserAnswers;
