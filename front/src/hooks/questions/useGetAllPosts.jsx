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
    suspense: true,
  });
};

export default useGetAllPosts;
