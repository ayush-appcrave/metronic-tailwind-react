import { toAbsoluteUrl } from '@/utils';

const ScreenLoader = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center fixed inset-0 z-50 bg-light">
      <img
        className="h-[30px] max-w-none"
        src={toAbsoluteUrl('/images/brand/small-logo.svg')}
        alt="logo"
      />
      <div className="text-gray-500 font-medium text-sm">Loading...</div>
    </div>
  );
};

export { ScreenLoader };
