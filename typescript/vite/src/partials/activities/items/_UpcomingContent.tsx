import { TimelinesWrapper } from '@/partials/timelines/default/item';

const UpcomingContent = () => {
  return (
    <TimelinesWrapper icon="share" line={true}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          I couldn&apos;t resist sharing a sneak peek of our
          <a href="#" className="text-sm font-medium text-primary hover:text-primary-active">
            &nbsp;upcoming content&nbsp;
          </a>
        </div>
        <span className="text-xs font-medium text-gray-500">5 days ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { UpcomingContent };
