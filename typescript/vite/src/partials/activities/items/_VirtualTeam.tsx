import { TimelinesWrapper } from '@/partials/timelines/default/item';
import { Link } from 'react-router-dom';

const VirtualTeam = () => {
  return (
    <TimelinesWrapper icon="like-shapes" line={false}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          Hosted a virtual
          <Link to="/public-profile/profiles/creator" className="text-sm font-medium link">
            &nbsp;team-building event
          </Link>
          , fostering collaboration and strengthening bonds among team members.
        </div>
        <span className="text-xs font-medium text-gray-500">1 month ago, 13:56 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { VirtualTeam };
