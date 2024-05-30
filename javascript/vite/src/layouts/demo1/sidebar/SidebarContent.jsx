import { useViewport } from '@/hooks';
import { SidebarMenu } from './';
const SidebarContent = ({
  headerHeight = 0,
  footerHeight = 0
}) => {
  const [viewportHeight] = useViewport();
  const scrollableHeight = viewportHeight - headerHeight - footerHeight;
  return <div className="sidebar-content flex grow shrink-0 pt-5 lg:pt-0 pr-2">
      <div className="grow shrink-0 flex pl-5 pr-3 scrollable-hover-y" style={{
      height: scrollableHeight
    }}>
        <SidebarMenu />
      </div>
    </div>;
};
export { SidebarContent };