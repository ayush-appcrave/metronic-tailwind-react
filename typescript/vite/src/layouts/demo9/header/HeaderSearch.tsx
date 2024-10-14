import { KeenIcon } from '@/components';

const HeaderSearch = () => {
  return (
    <div className="input input-sm w-[36px] lg:w-60">
      <KeenIcon icon="magnifier" />
      <input placeholder="Search" type="text" className="min-w-0" value="" />
      <span className="text-2sm text-gray-700 text-nowrap hidden lg:inline">cmd + /</span>
    </div>
  );
};

export { HeaderSearch };
