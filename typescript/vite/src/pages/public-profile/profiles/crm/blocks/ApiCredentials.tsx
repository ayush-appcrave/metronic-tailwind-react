import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components';
import { useState } from 'react';

const ApiCredentials = () => {
  const [apiInput, setApiInput] = useState('');
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">API Credentials</h3>
      </div>
      <div className="card-body">
        <div className="text-sm text-gray-800 leading-5.5 pb-5">
          The granted credentials serve a twofold function, enabling
          <a href="#" className="link">
            &nbsp;API authentication&nbsp;
          </a>
          and governing JavaScript customization
        </div>

        <div className="flex flex-col flex-wrap gap-4">
          <div className="input input-sm">
            <input
              type="text"
              name="query"
              value={apiInput}
              onChange={(e) => setApiInput(e.target.value)}
              placeholder="hwewe4654fdd5sdfh"
            />
            <button className="btn btn-icon btn-sm">
              <KeenIcon icon="copy" />
            </button>
          </div>
          <div>
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

export { ApiCredentials };
