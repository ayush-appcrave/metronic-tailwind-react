import { DefaultAbout } from '@/pages/public-profile/profiles/default/_DefaultAbout'
import { DefaultCommunityBadges } from '@/pages/public-profile/profiles/default/_DefaultCommunityBadges'
import { DefaultConnections } from '@/pages/public-profile/profiles/default/_DefaultConnections'
import { DefaultContributions } from '@/pages/public-profile/profiles/default/_DefaultContributions'
import { DefaultMediaUploads } from '@/pages/public-profile/profiles/default/_DefaultMediaUploads'
import { DefaultProjects } from '@/pages/public-profile/profiles/default/_DefaultProjects'
import { DefaultRecentUploads } from '@/pages/public-profile/profiles/default/_DefaultRecentUploads'
import { DefaultTags } from '@/pages/public-profile/profiles/default/_DefaultTags'
import { DefaultUnlockPartnerships } from '@/pages/public-profile/profiles/default/_DefaultUnlockPartnerships'
import { DefaultWorkExperience } from '@/pages/public-profile/profiles/default/_DefaultWorkExperience'

const DefaultContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <DefaultCommunityBadges />
          <DefaultAbout />
          <DefaultWorkExperience url="#" />
          <DefaultTags title="Skills" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <DefaultUnlockPartnerships url="#" />
            <DefaultMediaUploads />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            <DefaultConnections title="Connections" url="#" />
            <DefaultContributions title="Contributions" />
          </div>

          <DefaultProjects />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            <DefaultRecentUploads title="Recent Uploads" url="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { DefaultContent }
