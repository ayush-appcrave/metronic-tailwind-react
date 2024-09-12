import {
  ActivitiesAnniversary,
  ActivitiesBloggingConference,
  ActivitiesFollowersMilestone,
  ActivitiesInterview,
  ActivitiesNewArticle,
  ActivitiesUpcomingContent
} from '@/partials/activities/items';
import { Link } from 'react-router-dom';

const BloggerActivities = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Activity</h3>

        <div className="flex items-center gap-2">
          <label className="switch">
            <input className="order-2" type="checkbox" value="1" name="check" defaultChecked />
            <span className="switch-label order-1">
              Auto refresh:&nbsp;
              <span className="switch-on:hidden">Off</span>
              <span className="hidden switch-on:inline">On</span>
            </span>
          </label>
        </div>
      </div>
      <div className="card-body">
        <ActivitiesNewArticle />
        <ActivitiesInterview />
        <ActivitiesUpcomingContent />
        <ActivitiesBloggingConference image="/media/illustrations/3.svg" />
        <ActivitiesFollowersMilestone />
        <ActivitiesAnniversary />
      </div>

      <div className="card-footer justify-center">
        <Link to="/public-profile/activity" className="btn btn-link">All-time Activities</Link>
      </div>
    </div>
  );
};

export { BloggerActivities };
