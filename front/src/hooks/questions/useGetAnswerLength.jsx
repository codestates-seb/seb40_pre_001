import { useQuery } from '@tanstack/react-query';
import { getPostById } from '../../apis/questions';

const useGetAnswersLength = (id) => {
  const { data, isSuccess, isLoading, isError, status } = useQuery(
    ['postById', id],
    () => getPostById(id),
    {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  );

  const length = data?.answers?.length;

  return {
    length,
    isSuccess,
    isLoading,
    isError,
    status,
  };
};

export default useGetAnswersLength;
