import { getPostByKeyword } from '../apis/questions';

import { useQuery, useQueryClient } from '@tanstack/react-query';

const useGetFilteredPost = (keyword) => {
  const queryClient = useQueryClient();

  return useQuery(['questions'], getPostByKeyword(keyword), {
    initialData: () => {
      queryClient.getQueryData(['questions']);
    },
    refetchOnWindowFocus: false,
    staleTime: 5000,
    keepPreviousData: true,
  });
};

export default useGetFilteredPost;
