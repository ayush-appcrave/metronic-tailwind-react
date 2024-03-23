const BloggerActivities = () => {
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">Activity</h3>

        <div className="flex items-center gap-2">
          <label className="switch">
            <input className="order-2" type="checkbox" value="1" name="check" defaultChecked />
            <span className="switch-label order-1">
              Auto refresh:
              <span className="hidden switch-off:inline">Off</span>
              <span className="hidden switch-on:inline">On</span>
            </span>
          </label>
        </div>
      </div>
      <div className="card-body">Example content</div>
    </div>;
};
export { BloggerActivities };