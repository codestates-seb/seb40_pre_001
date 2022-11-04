import { getPostsByKeyword } from '../../apis/questions';

import { useQuery } from '@tanstack/react-query';

const useGetFilteredPost = (keyword) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['filtered-post', 'questions'],
    () => getPostsByKeyword(keyword),
    {
      refetchOnWindowFocus: false,
      staleTime: 5000 * 2 * 60,
      suspense: true,
      enabled: true,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetFilteredPost;
