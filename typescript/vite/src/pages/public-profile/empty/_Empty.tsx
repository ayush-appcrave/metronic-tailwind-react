import { toAbsoluteUrl } from '@/utils/Assets';

const Empty = () => {
  return (
    <>
      <div className="card p-8 lg:p-12">
        <div className="card-body">
          <div className="grid justify-center">
            <img
              src={toAbsoluteUrl('/images/content/illustration/11.svg')}
              className="max-h-[200px]"
              alt=""
            />
          </div>

          <div className="text-lg font-semibold text-gray-800 text-center">
            Upload Item to Get Started
          </div>
          <div className="text-sm font-medium text-gray-600 text-center gap-1">
            Begin by crafting your inaugural list in minutes.&nbsp;
            <a href="#" className="text-sm font-medium text-primary hover:text-primary-active">
              Get Started!
            </a>
          </div>
        </div>
      </div>

      <div className="flex grow justify-center pt-5 lg:pt-7.5">
        <a href="#" className="btn btn-link">
          Check ready Templates
        </a>
      </div>
    </>
  );
};

export { Empty };
