import Head from 'next/head';
import App from 'next/app';
import '../locales';
import '../_core/utils/highlight';
import PropTypes from 'prop-types';
import cookie from 'cookie';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../_core/stores';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { getSettings } from '../_core/utils/getSettings';
import { SettingsProvider } from '../_core/contexts/SettingsContext';
import ThemeProvider from '../theme';
import { AuthProvider } from '../_core/contexts/AuthJWTContext';

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
            <SettingsProvider defaultSettings={settings}>
              <ThemeProvider>
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            </SettingsProvider>
          </LocalizationProvider>
        </ReduxProvider>
      </AuthProvider>
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie);

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
