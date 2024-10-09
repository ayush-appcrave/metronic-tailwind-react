import { SidebarMenuPrimary, SidebarMenuSecondary } from './';

interface Props {
  height?: number;
}

const SidebarMenu = ({ height = 0 }: Props) => {
  return (
    <div className="flex items-stretch grow shrink-0 justify-center my-5">
      <div
        className="crollable-y-auto light:[--tw-scrollbar-thumb-color:var(--tw-content-scrollbar-color)] grow"
        style={{
          ...(height > 0 && { height: `${height}px` })
        }}
      >
        <div className="border-b border-gray-300 mt-4 mb-1 mx-3.5"></div>
      </div>
    </div>
  );
};

export { SidebarMenu };
