import { useQuery } from '@tanstack/react-query';
import { getPostById } from '../../apis/questions';

const useGetPostById = (id) => {
  const { data, isSuccess, isLoading, isError, status } = useQuery(
    ['postById', id],
    () => getPostById(id),
    {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  );

  return {
    data,
    isSuccess,
    isLoading,
    isError,
    status,
  };
};

export default useGetPostById;
