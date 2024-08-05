import {
  BloggingConference,
  Login,
  NewProduct,
  ProductSpecific,
  ProductWebinar
} from '@/partials/activities/items';

import { IGamerActivityProps } from './interfaces';

const GamerActivity = ({ url }: IGamerActivityProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Recent Activity</h3>

        <div className="flex items-center gap-2x">
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
        <NewProduct />
        <ProductWebinar url="#" />
        <Login />
        <BloggingConference
          image="/media/illustrations/10.svg"
          heading="Email campaign sent to Jenny for a special promotion."
          datetime="1 week ago, 11:45 AM"
          title="First Campaign Created"
        />
        <ProductSpecific />
      </div>

      <div className="card-footer justify-center">
        <a href={url} className="btn btn-link">
          All-time Activities
        </a>
      </div>
    </div>
  );
};

export { GamerActivity };
