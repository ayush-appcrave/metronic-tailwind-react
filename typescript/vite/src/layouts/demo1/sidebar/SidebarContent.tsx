import { useViewport } from '../../../hooks';
import { useDemo1Layout } from '../Demo1LayoutProvider';
import { SidebarMenu } from './';

interface Props {
  headerHeight?: number;
  footerHeight?: number;
}

const SidebarContent = ({ headerHeight = 0, footerHeight = 0 }: Props) => {
  const { sidebarExpand, sidebarCollapse } = useDemo1Layout();
  const [viewportHeight] = useViewport();
  const scrollableHeight: number = viewportHeight - headerHeight - footerHeight;

  console.log('header:' + headerHeight);
  console.log('footer:' + footerHeight);
  console.log('content:' + scrollableHeight);

  return (
    <div className="sidebar-content flex grow shrink-0 pt-5 lg:pt-0 pr-2">
      <div
        className="grow shrink-0 flex pl-5 pr-3 scrollable-hover-y"
        style={{ height: scrollableHeight }}
      >
        <SidebarMenu />
      </div>
    </div>
  );
};

export { SidebarContent };
