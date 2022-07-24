import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';
import { PATH_DASHBOARD } from '../routes/paths';
import LoadingScreen from '../components/LoadingScreen';

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const { push } = useRouter();

  const { isAuthenticated, isInitialized } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      push(PATH_DASHBOARD.root);
    }
  }, [isAuthenticated]);

  if (isInitialized === isAuthenticated) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
