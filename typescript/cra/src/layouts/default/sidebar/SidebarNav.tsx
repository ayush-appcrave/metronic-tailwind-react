import { Nav, NavVerticalStylesConfig } from '../../../components/nav';
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
  const stylesConfig = NavVerticalStylesConfig();
  const [viewportHeight] = useViewport();
  const scrollableHeight: number = viewportHeight - headerHeight - footerHeight;

  return (
    <Scrollbar
      sx={{
        height: scrollableHeight,
        // overflow: 'hidden',
        px: 1.5,
        mx: 1
      }}
    >
      <Nav
        variant="inline"
        direction="vertical"
        collapse={isSidebarCollapse}
        expand={isSidebarExpand}
        items={NAV_VERTICAL}
        styles={stylesConfig}
      />
    </Scrollbar>
  );
};

export { SidebarNav };
