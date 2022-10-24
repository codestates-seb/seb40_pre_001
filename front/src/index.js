/* eslint-disable */
import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {worker} from './mocks/broswer';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}
const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </>,
);
