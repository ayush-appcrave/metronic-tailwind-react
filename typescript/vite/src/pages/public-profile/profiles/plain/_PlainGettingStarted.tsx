import { toAbsoluteUrl } from '@/utils/Assets';

const PlainGettingStarted = () => {
  return (
    <div className="card">
      <div className="card-body lg:py-9">
        <div className="flex justify-center">
          <img
            src={toAbsoluteUrl('/media/illustrations/11.svg')}
            className="max-h-[200px]"
            alt=""
          />
        </div>

        <div className="text-lg font-semibold text-gray-800 text-center">
          Upload Item to Get Started
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm font-medium text-gray-600">
            Begin by crafting your inaugural list in minutes.
          </span>
          <a href="#" className="text-sm font-semibold text-primary hover:text-primary-active">
            Get Started!
          </a>
        </div>
      </div>
    </div>
  );
};

export { PlainGettingStarted };
