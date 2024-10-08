import { useLayout } from '@/providers';
import { LightSidebarPage, Demo5Page } from '../';

const DefaultPage = () => {
  const { currentLayout } = useLayout();

  if (currentLayout?.name === 'demo1-layout') {
    return <LightSidebarPage />;
  } else if (currentLayout?.name === 'demo5-layout') {
    return <Demo5Page />;
  } else {
    return <></>;
  }
};

export { DefaultPage };
