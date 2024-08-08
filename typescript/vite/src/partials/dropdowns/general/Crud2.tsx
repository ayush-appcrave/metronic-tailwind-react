import { KeenIcon } from '@/components';

import { Link } from 'react-router-dom';

const Crud2 = () => {
  return (
    <div className="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">
      <div className="menu-item">
        <a href="#" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="document" /></span>
          <span className="menu-title">View</span>
        </a>
      </div>

      <div
        className="menu-item"
        data-menu-item-trigger="click|lg:hover"
        data-menu-item-toggle="dropdown"
        data-menu-item-placement="right-start"
        data-menu-item-offset="-15px, 0"
      >
        <div className="menu-link">
          <span className="menu-icon"><KeenIcon icon="notification-status" /></span>
          <span className="menu-title">Export</span>
          <span className="menu-arrow"><KeenIcon icon="right" className="text-3xs" /></span>
        </div>

        <div className="menu-dropdown menu-default w-full max-w-[175px]">
          <div className="menu-item">
            <Link to="/account/home/settings-sidebar" className="menu-link">
              <span className="menu-icon"><KeenIcon icon="sms" /></span>
              <span className="menu-title">Email</span>
            </Link>
          </div>

          <div className="menu-item">
            <Link to="/account/home/settings-sidebar" className="menu-link">
              <span className="menu-icon"><KeenIcon icon="message-notify" /></span>
              <span className="menu-title">SMS</span>
            </Link>
          </div>

          <div className="menu-item">
            <Link to="/account/home/settings-sidebar" className="menu-link">
              <span className="menu-icon"><KeenIcon icon="notification-status" /></span>
              <span className="menu-title">Push</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-item">
        <a href="#" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="pencil" /></span>
          <span className="menu-title">Edit</span>
        </a>
      </div>

      <div className="menu-item">
        <a href="#" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="trash" /></span>
          <span className="menu-title">Delete</span>
        </a>
      </div>
    </div>
  );
};

export { Crud2 };
