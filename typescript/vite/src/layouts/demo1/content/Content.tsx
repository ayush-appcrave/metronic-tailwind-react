import { useEffect } from 'react';
import { type PropsWithChildren } from 'react';

const Content = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    console.log('layout: content');
  }, []);

  return <>{children}</>;
};

export { Content };
