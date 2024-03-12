import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

const SettingsEnterpriseUserAccess = () => {
  return (
    <div className="card rounded-xl">
      <div
        className="flex items-center justify-between flex-wrap grow gap-2 p-5 bg-right bg-no-repeat bg-[length:600px]"
        style={{ backgroundImage: toAbsoluteUrl('/images/content/2600x1200/bg-5.png') }}
      >
        <div className="flex items-center flex-wrap gap-4">
          <div className="relative size-[50px] shrink-0">
            <svg
              className="w-full h-full stroke-brand fill-brand-light"
              width="44"
              height="48"
              viewBox="0 0 44 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
                  18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
                  39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                fill=""
              />
              <path
                d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
                  18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
                  39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                stroke=""
                strokeOpacity="0"
              />
            </svg>

            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
              <KeenIcon icon="information-4" className="text-xl text-brand" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                className="text-base font-semibold text-gray-900 hover:text-primary-active"
              >
                User Access
              </a>
              <span className="badge badge-sm badge-outline">16 days left</span>
            </div>

            <div className="text-2sm font-medium text-gray-700">
              This API key can only access
              <a href="#" className="text-2sm font-medium text-primary hover:text-primary-active">
                &nbsp;@keenthemes
              </a>
              <br />
              Secure access with a unique API key for enhanced functionality.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div>
            <button className="btn btn-sm btn-dark">Start</button>
          </div>
          <a href="#" className="text-xs font-medium text-gray-700 hover:text-primary-active">
            Skip
          </a>
        </div>
      </div>
    </div>
  );
};

export { SettingsEnterpriseUserAccess };
