import { KeenIcon } from '@/components';
import { Link } from 'react-router-dom';

const Card2 = () => {
  return (
    <div className="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
      <div className="menu-item">
        <Link to="/account/home/settings-enterprise" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="setting-3" /></span>
          <span className="menu-title">Settings</span>
        </Link>
      </div>

      <div className="menu-item">
        <Link to="/account/members/import-members" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="some-files" /></span>
          <span className="menu-title">Import</span>
        </Link>
      </div>

      <div className="menu-item">
        <Link to="/account/activity" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="cloud-change" /></span>
          <span className="menu-title">Activity</span>
        </Link>
      </div>

      <div className="menu-item">
        <a href="#" className="menu-link" data-modal-toggle="#report_user_modal">
          <span className="menu-icon"><KeenIcon icon="dislike" /></span>
          <span className="menu-title">Report</span>
        </a>
      </div>
    </div>
  );
};

export { Card2 };
