import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getPostById } from '../../../../../apis/questions';

const useGetPostComments = (id) => {
  const navigate = useNavigate();
  const { data, isError, status } = useQuery(
    ['post-comments'],
    () => getPostById(id),
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  if (isError) navigate('/notfound');

  const questionComments = data?.questionComments;

  return { questionComments, status };
};

export default useGetPostComments;
