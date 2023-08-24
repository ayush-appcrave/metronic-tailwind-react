import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useAuthContext } from '../../useAuthContext';

const Auth0Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const auth0Login = async () => {
    setLoading(true);
    try {
      if (!login) {
        throw new Error('Auth0Provider is required for this form.');
      }

      // await login();

      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        disabled={loading}
        onClick={() => {
          auth0Login();
        }}
      >
        {!loading ? 'Auth0 Login' : 'Loading'}
      </button>
    </>
  );
};

export { Auth0Login };
