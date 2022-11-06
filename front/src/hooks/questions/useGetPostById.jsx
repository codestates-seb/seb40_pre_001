import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useState } from 'react';
import { getPostById } from '../../apis/questions';

const useGetPostById = (id) => {
  const [postData, setPostData] = useState();

  const { data, isSuccess, isLoading, isError, status } = useQuery(
    ['postById', id],
    () => getPostById(id),
    {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    if (isSuccess) {
      setPostData(data);
    }
  }, [data, isSuccess]);

  return {
    data,
    postData,
    isSuccess,
    isLoading,
    isError,
    status,
  };
};

export default useGetPostById;
