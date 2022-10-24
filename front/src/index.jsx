import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { worker } from './mocks/broswer';
import { GlobalStyles, theme } from './styles';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <React.StrictMode>
      <GlobalStyles theme={theme} />
      <Router>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </RecoilRoot>
      </Router>
    </React.StrictMode>
  </>,
);
