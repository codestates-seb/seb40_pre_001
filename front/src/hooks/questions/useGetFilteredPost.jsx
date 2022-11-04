import { getPostsByKeyword } from '../../apis/questions';

import { useQuery } from '@tanstack/react-query';

const useGetFilteredPost = (keyword) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['filtered-post', 'questions'],
    () => getPostsByKeyword(keyword),
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetFilteredPost;
