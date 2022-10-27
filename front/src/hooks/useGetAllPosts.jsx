import { getAllPostData } from '../apis/questions';

import { useQuery } from '@tanstack/react-query';

const useGetAllPosts = (select) => {
  return useQuery(['questions'], getAllPostData, {
    select,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetAllPosts;
