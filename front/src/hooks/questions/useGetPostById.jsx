import { useQuery } from '@tanstack/react-query';
import { getSimplePostById } from '../../apis/questions';

const useGetPostById = (id) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['postById'],
    () => getSimplePostById(id),

    {
      refetchOnWindowFocus: false,
      staleTime: 5000 * 2 * 60,
      suspense: true,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetPostById;
