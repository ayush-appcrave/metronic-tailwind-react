import clsx from 'clsx';
import { type MouseEvent } from 'react';

import { KeenIcon } from '../../../components';
import { useDemo1Layout } from '../Demo1LayoutProvider';

const SidebarToggle = () => {
  const { layout, setSidebarCollapse } = useDemo1Layout();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (layout.options.sidebar.collapse) {
      setSidebarCollapse(false);
    } else {
      setSidebarCollapse(true);
    }
  };

  return (
    <button
      className={clsx(
        'btn btn-light btn-icon toggle !h-[30px] !w-[30px] absolute left-full top-2/4 -translate-x-2/4 -translate-y-2/4',
        (layout.options.sidebar.collapse as boolean) && 'active'
      )}
      onClick={handleClick}
      aria-label="Toggle sidebar"
    >
      <KeenIcon
        icon="black-left-line"
        className="toggle-active:rotate-180 text-md transition-all duration-300"
      />
    </button>
  );
};

export { SidebarToggle };
