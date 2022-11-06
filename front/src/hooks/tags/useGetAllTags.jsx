import { useQuery } from '@tanstack/react-query';
import { getAllTags } from '../../apis/tags';

const useGetAllTags = () => {
  const { data, status } = useQuery(['allTags'], getAllTags, {
    refetchOnWindowFocus: false,
  });

  return { data, status };
};

export default useGetAllTags;
