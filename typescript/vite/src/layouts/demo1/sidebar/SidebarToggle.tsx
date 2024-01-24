import clsx from 'clsx';
import { type MouseEvent } from 'react';

import { KeenIcon } from '../../../components';
import { useDemo1Layout } from '../Demo1LayoutProvider';

interface Props {
  onToggle: () => void;
}

const SidebarToggle = ({ onToggle }: Props) => {
  const { sidebarExpand, sidebarCollapse } = useDemo1Layout();

  const handleMouseOver = (event: MouseEvent<HTMLElement>) => {
    if (!sidebarExpand) {
      event.stopPropagation();
    }
  };

  const handleMouseOut = (event: MouseEvent<HTMLElement>) => {
    if (!sidebarExpand) {
      event.stopPropagation();
    }
  };

  return (
    <button
      className={clsx(
        'btn btn-light btn-icon toggle !h-[30px] !w-[30px] absolute left-full top-2/4 -translate-x-2/4 -translate-y-2/4',
        sidebarCollapse && 'active'
      )}
      onClick={onToggle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
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
