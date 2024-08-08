import { KeenIcon } from '@/components';

const CardItem2 = () => {
  return (
    <div className="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">
      <div className="menu-item">
        <a href="#" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="search-list" /></span>
          <span className="menu-title">View</span>
        </a>
      </div>

      <div className="menu-item">
        <a href="#" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="pencil" /></span>
          <span className="menu-title">Edit</span>
        </a>
      </div>

      <div className="menu-item">
        <a href="#" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="file-up" /></span>
          <span className="menu-title">Export</span>
        </a>
      </div>

      <div className="menu-separator"></div>
      
      <div className="menu-item">
        <a href="#" className="menu-link">
          <span className="menu-icon"><KeenIcon icon="trash" /></span>
          <span className="menu-title">Share</span>
        </a>
      </div>
    </div>
  );
};

export { CardItem2 };
