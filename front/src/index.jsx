import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { worker } from './mocks/broswer';
import { GlobalStyles, theme } from './styles';
import App from './App';
import Spinner from './components/@common/Spinner';

// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

// react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <GlobalStyles theme={theme} />
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RecoilRoot>
        <Suspense fallback={<Spinner />}>
          <Router>
            <App />
          </Router>
        </Suspense>
      </RecoilRoot>
    </QueryClientProvider>
  </>,
);
