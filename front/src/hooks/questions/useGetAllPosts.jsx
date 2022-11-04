import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllPosts } from '../../apis/questions';

const useGetAllPosts = (select) => {
  const queryClient = useQueryClient();

  return useQuery(['questions'], getAllPosts, {
    initialData: () => {
      queryClient.getQueryData(['questions']);
    },
    select,
    refetchOnWindowFocus: false,
    staleTime: 5000 * 2 * 60,
    suspense: true,
  });
};

export default useGetAllPosts;
