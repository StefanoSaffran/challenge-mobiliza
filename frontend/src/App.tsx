import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Login from './pages/Login';
// import AppProvider from './context';

const App = () => (
  <ThemeProvider theme={theme}>
    {/* <AppProvider> */}
    <Login />
    <GlobalStyles />
    {/* </AppProvider> */}
  </ThemeProvider>
);

export default App;
