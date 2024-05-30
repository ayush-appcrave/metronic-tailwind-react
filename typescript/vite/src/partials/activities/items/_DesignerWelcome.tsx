import { TimelinesWrapper } from '@/partials/timelines/default/item';

const DesignerWelcome = () => {
  return (
    <TimelinesWrapper icon="design" line={true}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          Onboarded a talented designer to our creative team, adding valuable expertise to upcoming
          projects.
        </div>
        <span className="text-xs font-medium text-gray-500">2 weeks ago, 10:45 AM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { DesignerWelcome };
