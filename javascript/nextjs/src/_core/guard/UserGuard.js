import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';
import Login from '../pages/auth/login';

// ----------------------------------------------------------------------

SecuredGuard.propTypes = {
  children: PropTypes.node,
};

export default function SecuredGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuth();

  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState(null);

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation);
    }
    if (isAuthenticated) {
      setRequestedLocation(null);
    }
  }, [isAuthenticated, pathname, push, requestedLocation]);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  return <>{children}</>;
}
