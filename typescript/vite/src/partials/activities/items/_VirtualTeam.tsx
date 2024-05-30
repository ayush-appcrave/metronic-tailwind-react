import { TimelinesWrapper } from '@/partials/timelines/default/item';

const VirtualTeam = () => {
  return (
    <TimelinesWrapper icon="like-shapes" line={false}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          Hosted a virtual
          <a href="#" className="text-sm font-medium text-primary hover:text-primary-active">
            &nbsp;team-building event
          </a>
          , fostering collaboration and strengthening bonds among team members.
        </div>
        <span className="text-xs font-medium text-gray-500">1 month ago, 13:56 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { VirtualTeam };
