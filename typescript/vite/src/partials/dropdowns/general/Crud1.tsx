import { KeenIcon } from '@/components';

import { Link } from 'react-router-dom';

const Crud1 = () => {
  return (
    <div className="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">
      <div className="menu-item">
        <Link to="/account/home/settings-plain" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="add-files" /></span>
          <span className="menu-title">Add</span>
        </Link>
      </div>

      <div className="menu-item">
        <Link to="/account/members/import-members" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="file-down" /></span>
          <span className="menu-title">Import</span>
        </Link>
      </div>

      <div
        className="menu-item"
        data-menu-item-trigger="click|lg:hover"
        data-menu-item-toggle="dropdown"
        data-menu-item-placement="right-start"
        data-menu-item-offset="-15px, 0"
      >
        <div className="menu-link">
          <span className="menu-icon"><KeenIcon icon="file-up" /></span>
          <span className="menu-title">Export</span>
          <span className="menu-arrow"><KeenIcon icon="right" className="text-3xs" /></span>
        </div>

        <div className="menu-dropdown menu-default w-full max-w-[125px]">
          <div className="menu-item">
            <Link to="/account/home/settings-sidebar" className="menu-link">
              <span className="menu-title">PDF</span>
            </Link>
          </div>

          <div className="menu-item">
            <Link to="/account/home/settings-sidebar" className="menu-link">
              <span className="menu-title">CVS</span>
            </Link>
          </div>

          <div className="menu-item">
            <Link to="/account/home/settings-sidebar" className="menu-link">
              <span className="menu-title">Excel</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-item">
        <Link to="/account/security/privacy-settings" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="setting-3" /></span>
          <span className="menu-title">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export { Crud1 };
