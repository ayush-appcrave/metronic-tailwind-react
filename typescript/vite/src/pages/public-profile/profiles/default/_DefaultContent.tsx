import { DefaultCommunityBadges } from './_DefaultCommunityBadges';
import { DefaultTags } from './_DefaultTags';

const DefaultContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <DefaultCommunityBadges />

          <DefaultTags title="Skills" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="flex flex-col gap-5 lg:gap-7.5"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5"></div>
        </div>
      </div>
    </div>
  );
};

export { DefaultContent };
