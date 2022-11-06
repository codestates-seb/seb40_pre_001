import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { postLogin } from '../../../apis/auth';
import { getCurrentUser } from '../../../apis/users';
import { ROUTES } from '../../../constants';
import { usersState } from '../../../store';

const useLogin = () => {
  const [authState, setIsAuthenticated] = useRecoilState(usersState);
  const navigate = useNavigate();

  const { mutate, status } = useMutation(
    postLogin,
    {
      onSuccess: () => {
        getCurrentUser();
        setIsAuthenticated({
          ...authState,
          isAuthenticated: true,
        });

        navigate(ROUTES.QUESTIONS.path);
      },
      onError: () => {
        console.log('으악 로그인 실패');
      },
    },
    {
      retry: false,
    },
  );

  return { mutate, status };
};

export default useLogin;
