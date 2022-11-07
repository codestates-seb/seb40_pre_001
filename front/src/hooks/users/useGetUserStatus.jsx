import { useQuery } from '@tanstack/react-query';
import { getUserStatus } from '../../apis/users';

const useGetUserStatus = (userId) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['userStatus'],
    () => getUserStatus(userId),
    {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );

  return { data, isSuccess, isLoading, isError };
};

export default useGetUserStatus;
