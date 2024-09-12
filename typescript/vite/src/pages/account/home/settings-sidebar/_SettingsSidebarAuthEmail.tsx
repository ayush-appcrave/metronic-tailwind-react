const SettingsSidebarAuthEmail = () => {
  return (
    <div className="card pb-2.5">
      <div className="card-header" id="auth_email">
        <h3 className="card-title">Email</h3>
      </div>
      <div className="card-body grid gap-5 pt-7.5">
        <div className="flex flex-wrap md:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full pt-2">Email</span>

          <div className="grow grid gap-7.5">
            <input type="text" className="input min-w-48" placeholder="jason@studio.io" value="" readOnly />

            <div className="flex items-center gap-7.5">
              <label className="switch">
                <span className="switch-label">Active&nbsp;</span>
                <input type="checkbox" defaultChecked value="1" readOnly />
              </label>

              <label className="switch">
                <span className="switch-label">Primary&nbsp;</span>
                <input type="checkbox" value="2" readOnly />
              </label>
            </div>

            <p className="text-2sm font-medium text-gray-700">
              Input your email, designate as primary for priority updates. Toggle to seamlessly
              customize your communication preferences
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export { SettingsSidebarAuthEmail };
