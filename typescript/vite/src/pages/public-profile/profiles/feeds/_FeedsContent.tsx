import { BloggerCollaborate } from '../blogger';
import { CreatorStatistics, CreatorSummary } from '../creator';
import { ICreatorStatisticsItems } from '../creator/interfaces';
import { DefaultTags } from '../default';
import { FeedsPost1, FeedsPost2, FeedsPost3, FeedsPost4 } from '.';

const FeedsContent = () => {
  const data: ICreatorStatisticsItems = [
    { title: 'Connections', value: '5.3k' },
    { title: 'Uploads', value: '28.9k' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <CreatorStatistics data={data} />
          <CreatorSummary title="Profile" />
          <BloggerCollaborate title="Open to work" url="#" />
          <DefaultTags title="Skills" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <FeedsPost1 />
          <FeedsPost2 />
          <FeedsPost3 />
          <FeedsPost4 />
        </div>
      </div>
    </div>
  );
};

export { FeedsContent };
