import { useQuery } from '@tanstack/react-query';
import { getUserById } from '../apis/users';

const useGetUserById = (id) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['userById', id],
    () => getUserById(id),
    {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetUserById;
