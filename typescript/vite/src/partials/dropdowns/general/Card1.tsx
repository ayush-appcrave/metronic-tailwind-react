import { KeenIcon } from '@/components';

import { Link } from 'react-router-dom';

const Card1 = () => {
  return (
    <div className="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
      <div className="menu-item">
        <Link to="/account/activity" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="cloud-change" /></span>
          <span className="menu-title">Activity</span>
        </Link>
      </div>

      <div className="menu-item">
        <a href="#" className="menu-link" data-modal-toggle="#share_profile_modal">
          <span className="menu-icon"><KeenIcon icon="share" /></span>
          <span className="menu-title">Share</span>
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
          <span className="menu-title">Notifications</span>
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
        <a href="#" className="menu-link" data-modal-toggle="#report_user_modal">
          <span className="menu-icon"><KeenIcon icon="dislike" /></span>
          <span className="menu-title">Report</span>
        </a>
      </div>

      <div className="menu-separator"></div>

      <div className="menu-item">
        <Link to="/account/home/settings-enterprise" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="setting-3" /></span>
          <span className="menu-title">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export { Card1 };
