import Head from 'next/head';
import App from 'next/app';
import '../locales';
import '../utils/highlight';
import PropTypes from 'prop-types';
import cookie from 'cookie';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { getThemeSettings } from '../utils/getThemeSettings';
import { ThemeSettingsProvider } from '../contexts/ThemeSettingsContext';
import ThemeProvider from '../theme';
import { AuthProvider } from '../contexts/AuthJWTContext';

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  settings: PropTypes.object,
};

export default function MyApp(props) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AuthProvider>
        <ReduxProvider store={store}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeSettingsProvider defaultSettings={settings}>
              <ThemeProvider>
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            </ThemeSettingsProvider>
          </LocalizationProvider>
        </ReduxProvider>
      </AuthProvider>
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie);

  const settings = getThemeSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
