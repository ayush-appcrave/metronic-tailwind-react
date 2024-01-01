import { BrowserRouter } from 'react-router-dom';

import { ProvidersWrapper } from './providers/_ProvidersWrapper';
import { AppRouting } from './routing';

const { BASE_URL } = import.meta.env;

const App = () => (
  <ProvidersWrapper>
    <BrowserRouter basename={BASE_URL}>
      <AppRouting />
    </BrowserRouter>
  </ProvidersWrapper>
);

export { App };
