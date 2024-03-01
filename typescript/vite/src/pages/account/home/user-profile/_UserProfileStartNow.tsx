import { toAbsoluteUrl } from '@/utils/Assets';

const UserProfileStartNow = () => {
  return (
    <div
      className="card bg-center bg-cover bg-no-repeat pt-5  px-5"
      style={{ backgroundImage: toAbsoluteUrl('/images/content/patterns/1600x800/2.jpg') }}
    >
      <div className="text-center">
        <h3 className="text-gray-900 text-lg font-semibold leading-6 mb-1.5">
          Individually Tailored
          <br />
          Deals for Personal Satisfaction
        </h3>

        <span className="text-gray-700 text-sm font-medium block mb-5">
          Discover promotions crafted to match your preferences.
        </span>

        <button className="btn btn-dark btn-sm">Start Now</button>
      </div>

      <div className="flex justify-center ">
        <img
          src={toAbsoluteUrl('/images/content/illustration/1.svg')}
          className="max-h-[160px]"
          alt=""
        />
      </div>
    </div>
  );
};

export { UserProfileStartNow };
