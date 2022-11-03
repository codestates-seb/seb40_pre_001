import { useEffect } from 'react';
import { redirect, useLocation, useRoutes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ROUTES } from './constants';
import PAGES from './pages';
import { usersState } from './store';

function App() {
  const isAuth = useRecoilValue(usersState);
  const { pathname: path } = useLocation();

  useEffect(() => {
    // 로그인 성공시 혹은 '/' url 접근시 questions 페이지로 리다이렉팅
    if (path === ROUTES.LOGIN.path && !isAuth) {
      redirect(ROUTES.QUESTIONS.path);
    }
  }, [isAuth, path]);

  const pages = useRoutes(PAGES);

  return pages;
}

export default App;
