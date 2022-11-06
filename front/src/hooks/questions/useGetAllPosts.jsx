// import { getAllPostData } from '../../apis/questions';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { demoGetAllPosts } from '../../apis/questions';

const useGetAllPosts = (select) => {
  const queryClient = useQueryClient();

  return useQuery(['questions'], demoGetAllPosts, {
    initialData: () => {
      queryClient.getQueryData(['questions']);
    },
    select,
    refetchOnWindowFocus: false,
    staleTime: 5000 * 2 * 60,
  });
};

export default useGetAllPosts;
