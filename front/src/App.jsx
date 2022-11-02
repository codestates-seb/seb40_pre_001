import { redirect, useLocation, useRoutes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import PAGES from './pages';
import usersState from './store/users';

function App() {
  const isAuth = useRecoilValue(usersState);
  const { pathname: path } = useLocation();

  console.log(path);
  console.log(isAuth);

  if (path === '/login' && !isAuth) {
    console.log('aa');
    redirect('/questions');
  }

  const pages = useRoutes(PAGES);

  return pages;
}

export default App;
