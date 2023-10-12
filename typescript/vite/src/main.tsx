import 'simplebar-react/dist/simplebar.min.css';
import '@/components/keenicons/assets/duotone/style.css';
import '@/components/keenicons/assets/outline/style.css';
import '@/components/keenicons/assets/solid/style.css';

import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import { App } from './App';
import { setupAxios } from './auth';
// TODO: clarify helmet
// import { Helmet } from "react-helmet";

/**
 * Inject interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios);

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    {/* <Helmet>
        <meta name="theme-color" content={palette.light.primary.main} />
      </Helmet> */}
    <App />
  </QueryClientProvider>
);
