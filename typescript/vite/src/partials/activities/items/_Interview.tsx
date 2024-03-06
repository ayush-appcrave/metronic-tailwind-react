import { TimelinesWrapper } from '@/partials/timelines/default/item';

const Interview = () => {
  return (
    <TimelinesWrapper icon="entrance-left" line={true}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          I had the privilege of interviewing an industry expert for an
          <a href="#" className="text-sm font-medium text-primary hover:text-primary-active">
            &nbsp;upcoming blog post&nbsp;
          </a>
        </div>
        <span className="text-xs font-medium text-gray-500">2 days ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { Interview };
