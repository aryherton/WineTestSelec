import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store/store';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={ theme }>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
