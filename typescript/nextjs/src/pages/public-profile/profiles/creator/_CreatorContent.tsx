import { DefaultTags } from '@/pages/public-profile/profiles/default/_DefaultTags'
import { DefaultCommunityBadges } from '@/pages/public-profile/profiles/default/_DefaultCommunityBadges'
import {CreatorActivities} from '@/pages/public-profile/profiles/creator/_CreatorActivities';
import {CreatorFeaturesHighlight} from '@/pages/public-profile/profiles/creator/_CreatorFeaturesHighlight';
import {CreatorStatistics} from '@/pages/public-profile/profiles/creator/_CreatorStatistics';
import {CreatorSummary} from '@/pages/public-profile/profiles/creator/_CreatorSummary';
import {CreatorUpcomingEvents} from '@/pages/public-profile/profiles/creator/_CreatorUpcomingEvents';
import {CreatorUsers} from '@/pages/public-profile/profiles/creator/_CreatorUsers';
import {CreatorWorks} from '@/pages/public-profile/profiles/creator/_CreatorWorks';
import { ICreatorStatisticsItems, ICreatorUsersItems } from './interfaces';

const CreatorContent = () => {
  const data: ICreatorStatisticsItems = [
    { title: 'Releases', value: '397' },
    { title: 'Earnigns', value: '89k' }
  ];

  const items: ICreatorUsersItems = [
    { image: '300-2.jpg' },
    { image: '300-1.jpg' },
    { image: '300-3.jpg' },
    { image: '300-4.jpg' },
    { image: '300-5.jpg' },
    { image: '300-6.jpg' },
    { image: '300-7.jpg' },
    { image: '300-8.jpg' }
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
            image="/images/content/illustrations/restile.png"
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
