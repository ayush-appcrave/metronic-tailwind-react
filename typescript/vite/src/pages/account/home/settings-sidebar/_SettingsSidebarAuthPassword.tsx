const SettingsSidebarAuthPassword = () => {
  return (
    <div className="card">
      <div className="card-header" id="auth_password">
        <h3 className="card-title">Password</h3>
      </div>

      <div className="card-body grid gap-5">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">
            Current Password
          </span>
          <div className="grow min-w-48">
            <input
              type="text"
              className="input w-full placeholder:text-gray-500"
              placeholder="Your current password"
              value=""
            />
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">New Password</span>
          <div className="grow min-w-48">
            <input
              type="text"
              className="input w-full placeholder:text-gray-500"
              placeholder="New password"
              value=""
            />
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5 mb-2.5">
          <span className="text-2sm font-medium text-gray-700 max-w-56 w-full">
            Confirm New Password
          </span>
          <div className="grow min-w-48">
            <input
              type="text"
              className="input w-full placeholder:text-gray-500"
              placeholder="Confirm new password"
              value=""
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export { SettingsSidebarAuthPassword };
