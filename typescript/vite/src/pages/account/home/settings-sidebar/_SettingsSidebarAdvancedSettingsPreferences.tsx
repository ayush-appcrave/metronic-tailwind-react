const SettingsSidebarAdvancedSettingsPreferences = () => {
  return (
    <div className="card">
      <div className="card-header" id="advanced_settings_preferences">
        <h3 className="card-title">Preferences</h3>
      </div>
      <div className="card-body grid gap-5 lg:py-7.5">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">Language</span>
          <div className="grow min-w-48">
            <select className="select w-full">
              <option>American English</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">Time zone</span>
          <div className="grow min-w-48">
            <select className="select w-full">
              <option>GMT -5:00 - Eastern Time(US & Canada)</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5 mb-2">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">Currency</span>
          <div className="grow min-w-48">
            <select className="select w-full">
              <option>United States Dollar (USD)</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5 mb-2">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">
            Open tasks as...
          </span>
          <div className="flex items-center grow min-w-48 gap-5">
            <label className="flex items-center gap-1.5">
              <input type="radio" className="radio" name="radio" defaultChecked value="1" readOnly />
              <span className="switch-label">Modal</span>
            </label>
            <label className="flex items-center gap-1.5">
              <input type="radio" className="radio" name="radio" value="1" readOnly />
              <span className="switch-label">Fullscreen</span>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-2.5 mb-1.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full pt-0.5">
            Attributes
          </span>
          <div className="grow min-w-48">
            <label className="flex items-center gap-1.5">
              <input type="checkbox" className="checkbox" value="1" readOnly />
              <span className="switch-label">Show list names</span>
            </label>
            <span className="text-2xs font-medium text-gray-600">
              See the name next to each icon
            </span>

            <label className="flex items-center gap-1.5 pt-4">
              <input type="checkbox" className="checkbox" defaultChecked value="1" readOnly />
              <span className="switch-label">Show linked task names</span>
            </label>
            <span className="text-2xs font-medium text-gray-600">
              Show task names next to ids for linked project tasks.
            </span>
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">
            Email visibility
          </span>
          <div className="grow min-w-48">
            <label className="switch">
              <input type="checkbox" defaultChecked value="1" readOnly />
              <span className="switch-label">Visible</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export { SettingsSidebarAdvancedSettingsPreferences };
