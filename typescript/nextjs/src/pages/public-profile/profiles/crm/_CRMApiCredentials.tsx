import { KeenIcon } from '@/components';
import Link from 'next/link';

const CRMApiCredentials = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">API Credentials</h3>
      </div>
      <div className="card-body">
        <div className="text-sm font-medium text-gray-700 leading-5.5 pb-5">
          The granted credentials serve a twofold function, enabling
          <a href="#" className="text-primary hover:text-primary-active">
            API authentication&nbsp;
          </a>
          and governing JavaScript customization
        </div>

        <div className="flex flex-col flex-wrap gap-4">
          <div className="relative grow">
            <input
              type="text"
              className="input w-full input-sm"
              placeholder="hwewe4654fdd5sdfh"
              value=""
              readOnly
            />
            <button className="btn btn-clear btn-icon btn-sm text-gray-600 absolute right-0 top-2/4 -translate-y-2/4 me-1.5">
              <KeenIcon icon="copy" />
            </button>
          </div>
          <div className="">
            <button className="btn btn-primary btn-sm">
              <KeenIcon icon="key" />
              Access Tokens
            </button>
          </div>
        </div>
      </div>

      <div className="card-footer justify-center">
        <Link to="/account/api-keys" className="btn btn-link">
          Check API’s
        </Link>
      </div>
    </div>
  );
};

export default  CRMApiCredentials ;
