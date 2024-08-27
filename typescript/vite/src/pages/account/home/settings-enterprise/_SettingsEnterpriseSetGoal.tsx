import { KeenIcon } from '@/components';
import { Card2 } from '@/partials/dropdowns/general';

const SettingsEnterpriseSetGoal = () => {
  return (
    <div className="card">
      <div className="card-header gap-2" id="settings_set_goal">
        <h3 className="card-title">Set a Goal</h3>

        <div className="menu" data-menu="true">
          <div
            className="menu-item"
            data-menu-item-trigger="click|lg:click"
            data-menu-item-toggle="dropdown"
            data-menu-item-placement="bottom-end"
            data-menu-item-offset="0, 10px"
          >
            <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
              <KeenIcon icon="dots-vertical" />
            </button>

            <Card2 />
          </div>
        </div>
      </div>
      <div className="card-body lg:p-7.5 p-5">
        <p className="text-2sm font-medium text-gray-700 leading-5 mb-3.5">
          Define aspirations, outline the path. Set a goal to transform dreams into <br/>
          measurable achievements.
        </p>
        <div className="card shadow-none p-3.5">
          <div className="flex justify-between items-center flex-wrap gap-2 mb-7">
            <div className="flex items-center gap-3.5 pt-1">
              <span className="text-2.5xl font-semibold text-gray-800">$0</span>
              <span className="text-2sm font-medium text-gray-600">
                Pursuing opportunities, earning zero. Growth <br/> beyond monetary measures.
              </span>
            </div>

            <button className="btn btn-sm btn-light">Add a Goal</button>
          </div>

          <div className="mb-3">
            <input className="range card" id="range_1" max="10" min="0" type="range" value="1" readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export { SettingsEnterpriseSetGoal };
