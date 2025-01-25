import '@/components/keenicons/assets/styles.css';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { setupAxios } from './auth';
import { ProvidersWrapper } from './providers';
import './styles/globals.css';

/**
 * Inject interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  </React.StrictMode>
);
