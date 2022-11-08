import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getPostsByKeyword } from '../../apis/questions';

const useGetFilteredPost = (keyword) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['filtered-post'],
    () => getPostsByKeyword(keyword),
    {
      refetchOnWindowFocus: false,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

const useSearchBar = () => {
  const queryClient = useQueryClient();

  const { mutate, data, isSuccess, isLoading } = useMutation(
    ['filtered-post'],
    (keyword) => getPostsByKeyword(keyword),
    {
      onSuccess: (data) => queryClient.setQueryData(['filtered-post'], data),
      refetchOnWindowFocus: false,
    },
  );

  return { mutate, data, isSuccess, isLoading };
};

export { useGetFilteredPost, useSearchBar };
