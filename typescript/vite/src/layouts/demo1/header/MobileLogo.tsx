import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';

const MobileLogo = () => {
  return (
    <div className="flex gap-1 lg:hidden items-center">
      <a href="#">
        <img src={toAbsoluteUrl('/images/brand/small-logo.svg')} className="max-h-[22px] w-full" />
      </a>

      <button className="btn btn-icon btn-light btn-clear btn-sm" data-overlay-toggle="#sidebar">
        <KeenIcon icon="abstract-14" className="text-2xl" />
      </button>
    </div>
  );
};

export { MobileLogo };
