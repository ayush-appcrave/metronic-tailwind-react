import { DefaultCommunityBadges, DefaultTags } from '../default';
import {
  CreatorActivities,
  CreatorFeaturesHighlight,
  CreatorStatistics,
  CreatorSummary,
  CreatorUpcomingEvents,
  CreatorUsers,
  CreatorWorks
} from '.';
import { ICreatorStatisticsItems, ICreatorUsersItems } from './interfaces';

const CreatorContent = () => {
  const data: ICreatorStatisticsItems = [
    { title: 'Releases', value: '397' },
    { title: 'Earnigns', value: '89k' }
  ];

  const items: ICreatorUsersItems = [
    { image: '300-1.png' },
    { image: '300-2.png' },
    { image: '300-3.png' },
    { image: '300-5.png' },
    { image: '300-6.png' },
    { image: '300-11.png' },
    { image: '300-7.png' },
    { image: '300-12.png' }
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <CreatorStatistics data={data} />
          <CreatorUsers title="Members" url="#" items={items} />
          <CreatorSummary title="About" />
          <DefaultCommunityBadges />
          <DefaultTags title="Skills" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <CreatorFeaturesHighlight
            image="/media/illustrations/18.svg"
            title="Restyle Your Space:<br>Soft Goods Makeover Ideas"
            description="Transform your living space beautifully with our Restyle Your Space: Soft Goods Makeover Ideas tutorial"
            more={{ title: 'Get Started', url: '#' }}
            features={['Time-Saving', 'Easy Revamp', 'Budget-Friendly', 'Fresh Look']}
          />
          <CreatorWorks />
          <CreatorUpcomingEvents />
          <CreatorActivities url="#" />
        </div>
      </div>
    </div>
  );
};

export { CreatorContent };
