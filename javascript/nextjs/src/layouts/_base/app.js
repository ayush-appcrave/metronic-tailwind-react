// i18n
import '../locales/i18n';

// Highlight
import '../utils/highlight';

import PropTypes from 'prop-types';
import cookie from 'cookie';

// Next
import Head from 'next/head';
import App from 'next/app';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';

// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

// Utils
import { getSettings } from '../utils/getSettings';

// Contexts
import { SettingsProvider } from '../contexts/SettingsContext';
import { CollapseDrawerProvider } from '../contexts/CollapseDrawerContext';

// Theme
import ThemeProvider from '../theme';

// Components
import ThemeSettings from '../components/settings';
import { ChartStyle } from '../components/chart';
import ProgressBar from '../components/ProgressBar';
import NotistackProvider from '../components/NotistackProvider';
import MotionLazyContainer from '../components/animate/MotionLazyContainer';

// Auth
import { AuthProvider } from '../contexts/JWTContext';

HeroApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  settings: PropTypes.object,
};

export default function HeroApp(props) {
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
            <CollapseDrawerProvider>
              <SettingsProvider defaultSettings={settings}>
                <MotionLazyContainer>
                  <ThemeProvider>
                    <ThemeSettings>
                      <NotistackProvider>
                        <ChartStyle />
                        <ProgressBar />
                        {getLayout(<Component {...pageProps} />)}
                      </NotistackProvider>
                    </ThemeSettings>
                  </ThemeProvider>
                </MotionLazyContainer>
              </SettingsProvider>
            </CollapseDrawerProvider>
          </LocalizationProvider>
        </ReduxProvider>
      </AuthProvider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie);

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
