import { Outlet } from 'react-router';
import { Container } from '@/components/container';
import { useResponsive } from '@/hooks';
import { Breadcrumbs } from '../';
const Content = ({
  children
}) => {
  const mobileMode = useResponsive('down', 'lg');
  return <div className="grow content" role="content">
      {mobileMode && <Container>
          <Breadcrumbs />
        </Container>}
      <Outlet />
    </div>;
};
export { Content };