import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorsLayout } from '../../layouts/errors';
import { Error404 } from './components/Error404';
import { Error500 } from './components/Error500';
const ErrorsPage = () => <Routes>
    <Route element={<ErrorsLayout />}>
      <Route path="404" element={<Error404 />} />
      <Route path="500" element={<Error500 />} />
      <Route index element={<Error404 />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>;
export { ErrorsPage };