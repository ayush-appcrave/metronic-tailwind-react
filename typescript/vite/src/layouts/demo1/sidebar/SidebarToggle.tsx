import clsx from 'clsx';
import { KeenIcon } from '@/components';
import { useDemo1Layout } from '../Demo1LayoutProvider';

const SidebarToggle = () => {
  const { layout, setSidebarCollapse } = useDemo1Layout();

  const handleClick = () => {
    if (layout.options.sidebar.collapse) {
      setSidebarCollapse(false);
    } else {
      setSidebarCollapse(true);
    }
  };

  const lightToggle = () => {
    return (
      <button
        className={clsx(
          'btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-200 dark:border-gray-300 bg-light text-gray-500 hover:text-gray-700 group absolute left-full top-2/4 -translate-x-2/4 -translate-y-2/4',
          (layout.options.sidebar.collapse as boolean) && 'active'
        )}
        onClick={handleClick}
        aria-label="Toggle sidebar"
      >
        <KeenIcon
          icon="black-left-line"
          className="group-[.active]:rotate-180 transition-all duration-300"
        />
      </button>
    );
  };

  const darkToggle = () => {
    return (
      <div onClick={handleClick}>
        <div className="hidden [html.dark_&]:block">
          <button className="btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-300 bg-light text-gray-500 hover:text-gray-700 group absolute left-full top-2/4 -translate-x-2/4 -translate-y-2/4">
            <KeenIcon
              icon="black-left-line"
              className="group-[.active]:rotate-180 transition-all duration-300"
            />
          </button>
        </div>
        <div className="[html.dark_&]:hidden light">
          <button className="btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-300 bg-light text-gray-500 hover:text-gray-700 group absolute left-full top-2/4 -translate-x-2/4 -translate-y-2/4">
            <KeenIcon
              icon="black-left-line"
              className="group-[.active]:rotate-180 transition-all duration-300"
            />
          </button>
        </div>
      </div>
    );
  };

  return layout.options.sidebar.theme === 'light' ? lightToggle() : darkToggle();
};

export { SidebarToggle };
