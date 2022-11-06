import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useGetAlltags } from '../../apis/questions';

const useGetAlltags = (select) => {
  const queryClient = useQueryClient();

  return useQuery(['tags'], useGetAlltags, {
    initialData: () => {
      queryClient.getQueryData(['tags']);
    },
    select,
    refetchOnWindowFocus: false,
    staleTime: 5000 * 2 * 60,
  });
};

export default useGetAlltags;
