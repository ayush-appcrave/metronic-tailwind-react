import { useViewport } from '@/hooks';

import { SidebarMenu } from './';

interface Props {
  headerHeight?: number;
}

const SidebarContent = ({ headerHeight = 0 }: Props) => {
  const [viewportHeight] = useViewport();
  const scrollableHeight: number = viewportHeight - headerHeight;

  return (
    <div className="sidebar-content flex grow shrink-0 pt-5 lg:pt-0 pr-2">
      <div
        className="grow shrink-0 flex pl-5 pr-3 scrollable-y-hover"
        style={{ height: scrollableHeight }}
      >
        <SidebarMenu />
      </div>
    </div>
  );
};

export { SidebarContent };
