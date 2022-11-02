import { redirect, useLocation, useRoutes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ROUTES } from './constants';
import PAGES from './pages';
import usersState from './store/users';

function App() {
  const isAuth = useRecoilValue(usersState);
  const { pathname: path } = useLocation();

  if (path === ROUTES.LOGIN.path && !isAuth) {
    redirect('/questions');
  }

  const pages = useRoutes(PAGES);

  return pages;
}

export default App;
