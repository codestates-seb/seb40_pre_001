import { useQuery } from '@tanstack/react-query';
import { getAnswersById } from '../../apis/questions';

const useGetAnswersById = (id) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['answers', id],
    () => getAnswersById(id),
    {
      refetchOnWindowFocus: false,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetAnswersById;
