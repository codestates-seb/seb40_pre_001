import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPostsByKeyword } from '../../apis/questions';

const useGetFilteredPost = (keyword) => {
  const queryClient = useQueryClient();

  const { data, isSuccess, isLoading, isError } = useQuery(
    ['filtered-post', 'questions'],
    () => getPostsByKeyword(keyword),
    {
      onSuccess: () =>
        queryClient.invalidateQueries(['filtered-post', 'questions']),
      refetchOnWindowFocus: false,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetFilteredPost;
