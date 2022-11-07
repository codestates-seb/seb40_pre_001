import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getPostById } from '../../../../../apis/questions';

const useGetAnswerComments = (id) => {
  const navigate = useNavigate();
  const { data, isError, status } = useQuery(
    ['answer-comments'],
    () => getPostById(id),
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  if (isError) navigate('/notfound');

  const answerComments = data?.answerComments;

  return { answerComments, status };
};

export default useGetAnswerComments;
