import { Faq, HighlightedPosts } from "@/partials/misc";
import { IHighlightedPostsItems } from "@/partials/misc/interfaces";
import {
  PrivacySettingsBlockList,
  PrivacySettingsManageData,
  PrivacySettingsPrivacySettings,
  PrivacySettingsReportSettings
} from ".";

const PrivacySettingsContent = () => {
  const posts: IHighlightedPostsItems = [
    {
      icon: 'toggle-on-circle',
      title: 'Fortifying Privacy Controls: Customization and Guidelines',
      summary: 'Enhance your privacy framework with customizable settings. Understand and apply robust controls with our comprehensive guidelines to protect member data.',
      path: '#'
    },
    {
      icon: 'setting',
      title: 'Navigating Privacy Preferences: Secure Configuration Tools',
      summary: 'Take command of your privacy settings with our secure configuration tools. Detailed resources and expert insights ensure your preferences are set for maximum protection.',
      path: '#'
    }
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <PrivacySettingsPrivacySettings />

          <div className="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
            <PrivacySettingsReportSettings limit={3} />

            <PrivacySettingsManageData />
          </div>

          <Faq />
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <PrivacySettingsBlockList text="Users on the block list are unable to send chat requests or messages to you." />
          <HighlightedPosts posts={posts} />
        </div>
      </div>
    </div>
  );
};

export { PrivacySettingsContent };
