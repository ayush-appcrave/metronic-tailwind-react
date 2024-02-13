import { KeenIcon } from '@/components';

const DefaultMediaUploads = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Media Uploads</h3>

          <div className="menu" data-menu="true">
            <div
              className="menu-item"
              data-menu-item-trigger="click"
              data-menu-item-toggle="dropdown"
              data-menu-item-placement="bottom-end"
            >
              <button className="btn btn-icon btn-light btn-clear btn-xs menu-toggle">
                <KeenIcon icon="dots-vertical" className="!text-xl" />
              </button>

              <div className="menu-dropdown w-[175px] text-gray-700 px-3 py-3 text-2xs">
                Menu content
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-1">
          <div id="media_uploads_chart"></div>
        </div>
      </div>
    </>
  );
};

export { DefaultMediaUploads };
