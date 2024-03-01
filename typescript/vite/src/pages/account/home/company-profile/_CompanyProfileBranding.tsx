import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

const CompanyProfileBranding = () => {
  return (
    <div className="card min-w-full">
      <div className="card-header gap-2">
        <h3 className="card-title">Branding</h3>

        <div className="flex items-center gap-2">
          <label className="switch">
            <input className="order-2" type="checkbox" value="1" name="check" />
            <span className="switch-label order-1">
              &nbsp;Publish
              <span className="hidden switch-off:inline"></span>
              <span className="hidden switch-on:inline"></span>
            </span>
          </label>
        </div>
      </div>

      <div className="card-body lg:py-7.5 py-5">
        <div className="flex flex-wrap md:flex-nowrap gap-5 lg:gap-14">
          <div className="flex flex-col max-w-72 w-full">
            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-primary-active">
              Company Logo
            </a>
            <span className="text-gray-600 text-2sm font-medium">
              Emblematic Corporate Identity Symbol
            </span>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap w-full gap-5 lg:gap-7.5">
            <div className="mt-1.5">
              <img
                src={toAbsoluteUrl('/images/content/brand-logos/html.svg')}
                className="h-9 min-w-32"
                alt=""
              />
            </div>

            <div
              className="flex bg-center min-w-48 lg:w-full p-5 lg:p-7 bg-no-repeat bg-[length:450px] border border-gray-300 rounded-xl border-dashed"
              style={{ backgroundImage: toAbsoluteUrl('/images/content/2600x1200/bg-5.png') }}
            >
              <div className="flex flex-col place-items-center place-content-center text-center rounded-xl w-full">
                <div className="flex items-center mb-2.5">
                  <div className="relative size-11 shrink-0">
                    <svg
                      className="w-full h-full stroke-danger fill-danger-light"
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
                      <KeenIcon icon="picture" className="text-xl ps-px text-danger" />
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-gray-800 text-[0.75rem] font-semibold hover:text-primary-active mb-px"
                >
                  Click or Drag & Drop
                </a>
                <span className="text-2xs font-medium text-gray-600">
                  SVG,PNG, JPG (max. 800x400)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 my-7.5"></div>

        <div className="flex flex-wrap md:flex-nowrap gap-5 lg:gap-14">
          <div className="flex flex-col max-w-72 w-full">
            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-primary-active">
              Brand Color
            </a>
            <span className="text-gray-600 text-2sm font-medium">
              Signature Palette Branding Element
            </span>
          </div>

          <div className="relative grow">
            <input
              type="text"
              className="input min-w-48 w-full pl-10"
              placeholder="#BA35A0"
              value=""
            />
            <button className="btn btn-clear btn-icon btn-md absolute start-0 top-2/4 -translate-y-2/4 ms-1.5">
              <KeenIcon icon="mouse-square" className="text-success solid" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 my-7.5"></div>

        <div className="flex flex-wrap md:flex-nowrap gap-5 lg:gap-14">
          <div className="flex flex-col max-w-72 w-full">
            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-primary-active">
              Branding
            </a>
            <span className="text-gray-600 text-2sm font-medium">
              Comprehensive Image Identity Design
            </span>
          </div>

          <div className="grow">
            <label className="flex items-center gap-1.5">
              <input type="checkbox" className="checkbox checkbox-sm" value="1" />
              <span className="switch-label text-2sm font-semibold text-gray-800">
                Security Questionaries
              </span>
            </label>
            <span className="text-2xs font-medium text-gray-600">
              Detailed Risk Assessment & Compliance Verification
            </span>

            <label className="flex items-center gap-1.5 pt-4">
              <input type="checkbox" className="checkbox checkbox-sm" defaultChecked value="1" />
              <span className="switch-label text-2sm font-semibold text-gray-800">Emails</span>
            </label>
            <span className="text-2xs font-medium text-gray-600">
              Electronic Message Communication
            </span>

            <label className="flex items-center gap-1.5 pt-4">
              <input type="checkbox" className="checkbox checkbox-sm" defaultChecked value="1" />
              <span className="switch-label text-2sm font-semibold text-gray-800">
                Vendor Reports
              </span>
            </label>
            <span className="text-2xs font-medium text-gray-600">
              Supplier Performance & Reliability Evaluations
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200 my-7.5"></div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export { CompanyProfileBranding };
