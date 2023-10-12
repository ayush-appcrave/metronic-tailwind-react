import { Nav, NavDefaultStylesConfig } from '../../../components/nav';
import Scrollbar from '../../../components/scrollbar';
import { NAV_VERTICAL } from '../../../config/navs.config';
import { useViewport } from '../../../hooks';
import { useDefaultLayout } from '..';

interface Props {
  headerHeight?: number;
  footerHeight?: number;
}

const SidebarNav = ({ headerHeight = 0, footerHeight = 0 }: Props) => {
  const { isSidebarExpand, isSidebarCollapse } = useDefaultLayout();
  const [viewportHeight] = useViewport();
  const scrollableHeight: number = viewportHeight - headerHeight - footerHeight;

  return (
    <Scrollbar
      sx={{
        height: scrollableHeight,
        px: 1.5,
        mx: 1
      }}
    >
      <Nav
        direction="vertical"
        collapse={isSidebarCollapse}
        expand={isSidebarExpand}
        items={NAV_VERTICAL}
        styles={NavDefaultStylesConfig()}
      />
    </Scrollbar>
  );
};

export { SidebarNav };
