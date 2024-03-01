import { DefaultRecentUploads } from '@/pages/public-profile/profiles/default';

import {
  UserProfileBasicSettings,
  UserProfileCalendarAccounts,
  UserProfileCommunityBadges,
  UserProfileConnections,
  UserProfilePersonalInfo,
  UserProfileStartNow,
  UserProfileWork
} from '.';

const UserProfileContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <UserProfilePersonalInfo />
          <UserProfileBasicSettings title="Basic Settings" />
          <UserProfileWork />
          <UserProfileCommunityBadges />
        </div>
      </div>

      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <UserProfileStartNow />
          <UserProfileCalendarAccounts />
          <UserProfileConnections url="#" />
          <DefaultRecentUploads title="My Files" url="#" />
        </div>
      </div>
    </div>
  );
};

export { UserProfileContent };
