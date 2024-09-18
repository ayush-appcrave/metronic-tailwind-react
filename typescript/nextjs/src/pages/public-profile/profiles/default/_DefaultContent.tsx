import {
  DefaultAbout,
  DefaultCommunityBadges,
  DefaultConnections,
  DefaultContributions,
  DefaultMediaUploads,
  DefaultProjects,
  DefaultRecentUploads,
  DefaultTags,
  DefaultUnlockPartnerships,
  DefaultWorkExperience
} from '.';

const DefaultContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <DefaultCommunityBadges title="Community Badges" />
          <DefaultAbout />
          <DefaultWorkExperience />
          <DefaultTags title="Skills" />
          <DefaultRecentUploads title="Recent Uploads" />
        </div>
      </div>

      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <DefaultUnlockPartnerships />
            <DefaultMediaUploads />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            <DefaultConnections title="Contributors" />
            <DefaultContributions title="Assistance" />
          </div>

          <DefaultProjects />
        </div>
      </div>
    </div>
  );
};

export default  DefaultContent ;
