import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllPosts } from '../../apis/questions';

const useGetAllPosts = (select) => {
  const [questionsData, setQuestionsData] = useState([]);

  const queryClient = useQueryClient();
  const { data, status, isLoading, isSuccess } = useQuery(
    ['questions'],
    getAllPosts,
    {
      initialData: () => {
        queryClient.getQueryData(['questions']);
      },
      select,
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    if (isSuccess) {
      setQuestionsData(data);
    }
  }, [data, isSuccess]);

  return { questionsData, status, isLoading, isSuccess };
};

export default useGetAllPosts;
