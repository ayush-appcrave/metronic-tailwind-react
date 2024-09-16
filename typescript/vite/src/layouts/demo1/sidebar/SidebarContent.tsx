import { SidebarMenu } from './';

interface Props {
  height?: number;
}

const SidebarContent = ({ height = 0 }: Props) => {
  return (
    <div className="sidebar-content flex grow shrink-0 pt-5 lg:pt-0 pe-2">
      <div
        className="grow shrink-0 flex ps-5 pe-3 scrollable-y-hover"
        style={{ height: `${height}px` }}
      >
        <SidebarMenu />
      </div>
    </div>
  );
};

export { SidebarContent };
