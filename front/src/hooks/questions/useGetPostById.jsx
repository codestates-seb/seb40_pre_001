import { useQuery } from '@tanstack/react-query';
import { getSimplePostById } from '../../apis/questions';

const useGetPostById = (id) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['postById', id],
    () => getSimplePostById(id),
    {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetPostById;
