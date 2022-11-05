import { useQuery } from '@tanstack/react-query';
import { getPostsByKeyword } from '../../apis/questions';

const useGetFilteredPost = (keyword) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['filtered-post', 'questions'],
    () => getPostsByKeyword(keyword),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      enabled: true,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetFilteredPost;
