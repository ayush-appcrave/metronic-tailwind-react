import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

const CompanyProfileDataImport = () => {
  return (
    <div className="card">
      <div className="card-header gap-2" id="auth_social_sign_in">
        <h3 className="card-title">Data import from Google Analytics</h3>
        <div className="btn btn-sm btn-icon btn-icon-lg text-gray-500 hover:text-primary-active">
          <KeenIcon icon="information-2" />
        </div>
      </div>
      <div className="card-body lg:py-7.5 py-5">
        <span className="text-md font-semibold text-gray-900 block mb-6">
          Define aspirations, outline the path. Set a goal to transform dreams into measurable
          achievements.
        </span>

        <div className="flex items-center group border border-gray-200 cursor-pointer rounded-md gap-1.5 px-3.5 py-2.5 max-w-43">
          <img
            src={toAbsoluteUrl('/images/content/brand-logos/google.svg')}
            className="size-4 shrink-0"
            alt=""
          />
          <a
            href="#"
            className="text-[0.75rem] font-medium text-gray-700 group-hover:text-primary-active"
          >
            Continue with Google
          </a>
        </div>
      </div>
    </div>
  );
};

export { CompanyProfileDataImport };
