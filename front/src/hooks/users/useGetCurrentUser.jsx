import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../../apis/users';

const useGetCurrentUser = () => {
  const { data } = useQuery(['allUsers'], getAllUsers, {
    refetchOnWindowFocus: false,
    suspense: true,
  });

  const currentUserEmail = localStorage.getItem('user');

  if (currentUserEmail === undefined) {
    return 'anonymous';
  }

  const currentUser = data.find((user) => user.email === currentUserEmail);

  return { data, currentUser };
};

export default useGetCurrentUser;
