import { type PropsWithChildren } from 'react';

import { Container } from '@/components/container';
import { useResponsive } from '@/hooks';

import { Breadcrumbs } from '../';

const Content = ({ children }: PropsWithChildren) => {
  const mobileMode = useResponsive('down', 'lg');

  return (
    <div className="grow content" role="content">
      {mobileMode && (
        <Container>
          <Breadcrumbs />
        </Container>
      )}
        { children }
    </div>
  );
};

export { Content };
