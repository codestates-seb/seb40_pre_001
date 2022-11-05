import { useQuery } from '@tanstack/react-query';
import { getPostById } from '../../apis/questions';

const useGetPostById = (id) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['postById', id],
    () => getPostById(id),
    {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetPostById;
