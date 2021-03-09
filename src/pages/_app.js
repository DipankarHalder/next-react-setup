import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import store from '../store/store';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
