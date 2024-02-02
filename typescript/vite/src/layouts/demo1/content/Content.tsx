import { type PropsWithChildren } from 'react';

import { Container } from '@/components/container';
import { useResponsive } from '@/hooks';

import { Breadcrumbs } from '../breadcrumbs';

const Content = ({ children }: PropsWithChildren) => {
  const mobileMode = useResponsive('down', 'lg');

  return (
    <>
      {mobileMode && (
        <Container>
          <Breadcrumbs key="mobile" />
        </Container>
      )}
      {children}
    </>
  );
};

export { Content };
