import '@/components/keenicons/assets/duotone/style.css';
import '@/components/keenicons/assets/outline/style.css';
import '@/components/keenicons/assets/solid/style.css';
import './css/styles.css';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { setupAxios } from './auth';

/**
 * Inject interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);