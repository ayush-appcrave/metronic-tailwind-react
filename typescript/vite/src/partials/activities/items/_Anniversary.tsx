import { TimelinesWrapper } from '@/partials/timelines/default/item';

const Anniversary = () => {
  return (
    <TimelinesWrapper icon="cup" line={false}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-800">
          We recently
          <a href="#" className="text-sm font-medium link">
            &nbsp;celebrated&nbsp;
          </a>
          the blog&apos;s 1-year anniversary
        </div>
        <span className="text-xs font-medium text-gray-500">3 months ago, 4:07 PM</span>
      </div>
    </TimelinesWrapper>
  );
};

export { Anniversary };
