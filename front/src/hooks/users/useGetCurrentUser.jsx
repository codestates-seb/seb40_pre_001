import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../../apis/users';

const useGetCurrentUser = () => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['allUsers'],
    getAllUsers,
    {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );

  const currentUserEmail = localStorage.getItem('user');

  if (currentUserEmail === undefined) {
    console.log('undefined');
    return 'anonymous';
  }

  const currentUser = data.find((user) => user.email === currentUserEmail);

  return { data, currentUser, isSuccess, isLoading, isError };
};

export default useGetCurrentUser;
