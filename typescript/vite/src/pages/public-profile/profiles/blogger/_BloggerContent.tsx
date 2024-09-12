import { CreatorStatistics, CreatorSummary } from '../creator';
import { DefaultCommunityBadges, DefaultTags, DefaultUnlockPartnerships } from '../default';
import { BloggerActivities, BloggerCollaborate, BloggerPosts, BloggerReplies } from '.';
import { ICreatorStatisticsItems } from './types';

const BloggerContent = () => {
  const data: ICreatorStatisticsItems = [
    { title: 'Topics', value: '397' },
    { title: 'Upvotes', value: '8.2k' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <CreatorStatistics data={data} />
          <CreatorSummary title="Profile" />
          <DefaultCommunityBadges title="Community Badges" />
          <BloggerCollaborate title="Collaborate" />
          <DefaultTags title="Skills" />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <DefaultUnlockPartnerships />
          <BloggerPosts />
          <BloggerReplies />
          <BloggerActivities />
        </div>
      </div>
    </div>
  );
};

export { BloggerContent };
