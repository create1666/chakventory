import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import '../src/theme/styles.css';
import customTheme from 'theme/extendTheme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
