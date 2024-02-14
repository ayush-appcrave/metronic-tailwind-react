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

export { DefaultContent };
