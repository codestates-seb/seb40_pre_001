import { getAllPostData } from '../../apis/questions';

import { useQuery } from '@tanstack/react-query';

const useGetAllPosts = (select) => {
  // const queryClient = useQueryClient();

  return useQuery(['questions'], getAllPostData, {
    // initialData: () => {
    //   queryClient.getQueryData(['questions']);
    // },
    select,
    refetchOnWindowFocus: false,
    staleTime: 5000,
    keepPreviousData: true,
  });
};

export default useGetAllPosts;
