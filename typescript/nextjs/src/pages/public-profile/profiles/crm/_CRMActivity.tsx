import {
  ActivitiesBloggingConference,
  ActivitiesLogin,
  ActivitiesNewProduct,
  ActivitiesProductSpecific,
  ActivitiesProductWebinar
} from '@/partials/activities/items';
import Link from 'next/link';

const CRMActivity = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Recent Activity</h3>

        <div className="flex items-center gap-2">
          <label className="switch">
            <span className="switch-label">
              Auto refresh:&nbsp;
              <span className="switch-on:hidden">Off</span>
              <span className="hidden switch-on:inline">On</span>
            </span>

            <input className="order-2" type="checkbox" value="1" name="check" defaultChecked />
          </label>
        </div>
      </div>

      <div className="card-body">
        <ActivitiesNewProduct />
        <ActivitiesProductWebinar />
        <ActivitiesLogin />
        <ActivitiesBloggingConference
          heading="Email campaign sent to Jenny for a special promotion."
          datetime="1 week ago, 11:45 AM"
          title="First Campaign Created"
        />
        <ActivitiesProductSpecific />
      </div>

      <div className="card-footer justify-center">
        <Link to="/public-profile/activity" className="btn btn-link">
          All-time Activities
        </Link>
      </div>
    </div>
  );
};

export default  CRMActivity ;
