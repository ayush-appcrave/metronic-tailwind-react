import { TimelinesWrapper } from '@/partials/timelines/default/item';

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
              Auto refresh:
              <span className="hidden switch-off:inline">Off</span>
              <span className="hidden switch-on:inline">On</span>
            </span>
          </label>
        </div>
      </div>

      <div className="card-body">
        <TimelinesWrapper icon="people" line={true} />
        <TimelinesWrapper icon="entrance-left" line={true} />
        <TimelinesWrapper icon="share" line={true} />
        <TimelinesWrapper icon="directbox-default" line={true} />
        <TimelinesWrapper icon="coffee" line={true} />
        <TimelinesWrapper icon="cup" line={false} />
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
