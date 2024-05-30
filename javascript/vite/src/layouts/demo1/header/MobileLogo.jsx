import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';
import { useDemo1Layout } from '../';
const MobileLogo = () => {
  const {
    setMobileSidebarOpen
  } = useDemo1Layout();
  const handleSidebarOpen = event => {
    setMobileSidebarOpen(true);
  };
  return <div className="flex gap-1 lg:hidden items-center">
      <a href="#">
        <img src={toAbsoluteUrl('/images/brand/small-logo.svg')} className="max-h-[22px] w-full" />
      </a>

      <button className="btn btn-icon btn-light btn-clear btn-sm" onClick={handleSidebarOpen}>
        <KeenIcon icon="abstract-14" className="text-2xl" />
      </button>
    </div>;
};
export { MobileLogo };