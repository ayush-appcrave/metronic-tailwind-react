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
            <span className="switch-label">
              Auto refresh:&nbsp;
              <span className="switch-on:hidden">Off</span>
              <span className="hidden switch-on:inline">On</span>
            </span>
            <input type="checkbox" value="1" name="check" defaultChecked />
          </label>
        </div>
      </div>

      <div className="card-body">
        <div className="flex flex-col">
          <NewArticle />
          <Interview />
          <UpcomingContent />
          <BloggingConference image="/media/illustrations/3.svg" />
          <FollowersMilestone />
          <Anniversary />
        </div>
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
