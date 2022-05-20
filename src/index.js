import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import '../src/theme/styles.css';
import customTheme from 'theme/extendTheme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvder } from 'context/AuthProvider';
import { initAxios } from 'services/axios';

const queryClient = new QueryClient();
initAxios();
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvder>
          <App />
        </AuthProvder>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
