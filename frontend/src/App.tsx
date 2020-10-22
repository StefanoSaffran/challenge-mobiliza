import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Routes from './routes';
import AppProvider from './contexts';

const App = () => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <Router>
        <Routes />
        <GlobalStyles />
      </Router>
    </AppProvider>
  </ThemeProvider>
);

export default App;
