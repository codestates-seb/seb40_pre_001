import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getPostById } from '../../apis/questions';

const useGetPostById = (id) => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading, isError, status } = useQuery(
    ['postById', id],
    () => getPostById(id),
    {
      onError: () => navigate('/notfound'),
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  return {
    data,
    isSuccess,
    isLoading,
    isError,
    status,
  };
};

export default useGetPostById;
