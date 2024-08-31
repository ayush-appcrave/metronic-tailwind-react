import { KeenIcon } from '@/components';

const DropdownCardItem1 = () => {
  return (
    <div className="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">
      <div className="menu-item">
        <a href="#" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="document" /></span>
          <span className="menu-title">Details</span>
        </a>
      </div>

      <div className="menu-item">
        <a href="#" className="menu-link" data-modal-toggle="#share_profile_modal">
          <span className="menu-icon"><KeenIcon icon="share" /></span>
          <span className="menu-title">Share</span>
        </a>
      </div>

      <div className="menu-item">
        <a href="#" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="file-up" /></span>
          <span className="menu-title">Export</span>
        </a>
      </div>
    </div>
  );
};

export { DropdownCardItem1 };
