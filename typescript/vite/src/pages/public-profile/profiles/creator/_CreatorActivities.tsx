import {
  Anniversary,
  BloggingConference,
  FollowersMilestone,
  Interview,
  NewArticle,
  UpcomingContent
} from '@/partials/activities/items';

import { ICreatorActivitiesProps } from './interfaces';

const CreatorActivities = ({ url }: ICreatorActivitiesProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Activities</h3>

        <div className="flex items-center gap-2">
          <label className="switch">
            <input className="order-2" type="checkbox" value="1" name="check" defaultChecked />
            <span className="switch-label order-1">
              &nbsp;Auto refresh:
              <span className="hidden switch-off:inline">Off</span>
              <span className="hidden switch-on:inline">On</span>
            </span>
          </label>
        </div>
      </div>

      <div className="card-body">
        <NewArticle />
        <Interview />
        <UpcomingContent />
        <BloggingConference image="/media/illustrations/3.svg" />
        <FollowersMilestone />
        <Anniversary />
      </div>

      <div className="card-footer justify-center">
        <a href={url} className="btn btn-link">
          All-time Activities
        </a>
      </div>
    </div>
  );
};

export { CreatorActivities };
