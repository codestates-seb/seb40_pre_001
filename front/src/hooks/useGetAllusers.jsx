import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../apis/users';

const useGetAllUsers = () => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['allUsers'],
    getAllUsers,
    {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetAllUsers;
