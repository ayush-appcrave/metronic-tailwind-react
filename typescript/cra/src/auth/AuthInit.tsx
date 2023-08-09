import { type PropsWithChildren, useEffect, useRef } from 'react';

import { useLoaders } from '../providers/LoadersProvider';
import { getUserByToken } from './_requests';
import { useAuthContext } from './providers/useAuthContext';

const AuthInit = ({ children }: PropsWithChildren) => {
  const { screenLoader, setScreenLoader } = useLoaders();
  const { auth, logout, setCurrentUser } = useAuthContext();
  const didRequest = useRef(false);

  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {
    setScreenLoader(true);

    const requestUser = async (accessToken: string) => {
      try {
        if (!didRequest.current) {
          const { data } = await getUserByToken(accessToken);

          if (data) {
            setCurrentUser(data);
          }
        }
      } catch (error) {
        console.error(error);

        if (!didRequest.current) {
          logout();
        }
      } finally {
        setScreenLoader(false);
      }

      return () => (didRequest.current = true);
    };

    if (auth?.access_token) {
      requestUser(auth.access_token);
    } else {
      logout();
      setScreenLoader(false);
    }
    // eslint-disable-next-line
    }, []);

  return screenLoader ? <></> : <>{children}</>;
};

export { AuthInit };
