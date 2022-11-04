import { useQuery } from '@tanstack/react-query';
import { getAnswersById } from '../../apis/questions';

const useGetAnswersById = (id) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['answers'],
    () => getAnswersById(id),
    {
      refetchOnWindowFocus: false,
      staleTime: 5000 * 2 * 60,
      suspense: true,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetAnswersById;
