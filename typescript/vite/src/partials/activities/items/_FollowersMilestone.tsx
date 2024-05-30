import { TimelinesWrapper } from '@/partials/timelines/default/item';

const FollowersMilestone = () => {
  return (
    <TimelinesWrapper icon="coffee" line={true}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          Reaching the milestone of
          <a href="#" className="text-sm font-medium text-primary hover:text-primary-active">
            &nbsp;10,000 followers&nbsp;
          </a>
          on the blog was a dream come true
        </div>
        <span className="text-xs font-medium text-gray-500">5 days ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { FollowersMilestone };
