import { KeenIcon } from '@/components';
import clsx from 'clsx';
import { useDemo1Layout } from '../Demo1LayoutProvider';
const SidebarToggle = () => {
  const { layout, setSidebarCollapse } = useDemo1Layout();
  const handleClick = () => {
    setSidebarCollapse(!layout.options.sidebar.collapse);
  };

  const buttonBaseClass = clsx(
    'btn btn-icon btn-icon-md size-[30px] rounded-lg border bg-light text-gray-500 hover:text-gray-700 toggle absolute start-full top-2/4 rtl:translate-x-2/4 -translate-x-2/4 -translate-y-2/4',
    layout.options.sidebar.collapse && 'active'
  );
  const iconClass = clsx(
    'transition-all duration-300',
    layout.options.sidebar.collapse ? 'ltr:rotate-180' : 'rtl:rotate-180'
  );

  return (
    <div onClick={handleClick}>
      <div className="">
        <button className={clsx(buttonBaseClass, 'border-gray-300')}>
          <KeenIcon icon="black-left-line" className={iconClass} />
        </button>
      </div>
    </div>
  );
};
export { SidebarToggle };
