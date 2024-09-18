const SettingsSidebarAdvancedSettingsAddress = () => {
  return <div className="card">
      <div className="card-header" id="advanced_settings_address">
        <h3 className="card-title">Address</h3>
      </div>
      <div className="card-body grid gap-5 lg:py-7.5">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">Address</span>
          <div className="grow min-w-48">
            <input type="text" className="input w-full" placeholder="Avinguda Imaginària, 789" value="" readOnly />
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">Country</span>
          <div className="grow min-w-48">
            <select className="select w-full">
              <option>Spain</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">State</span>
          <div className="grow min-w-48">
            <input type="text" className="input w-full" placeholder="State" value="" readOnly />
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">City</span>
          <div className="grow min-w-48">
            <input type="text" className="input w-full placeholder:text-gray-500" placeholder="Barcelona" value="" readOnly />
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">Postcode</span>
          <div className="grow min-w-48">
            <input type="text" className="input w-full placeholder:text-gray-500" placeholder="08012" value="" readOnly />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>;
};
export { SettingsSidebarAdvancedSettingsAddress };