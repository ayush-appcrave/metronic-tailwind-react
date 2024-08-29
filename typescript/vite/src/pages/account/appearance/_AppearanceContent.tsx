import { Engage, Faq, HighlightedPosts } from "@/partials/misc";
import { IHighlightedPostsItems } from "@/partials/misc/interfaces";
import { toAbsoluteUrl } from "@/utils";
import { CompanyProfileBranding } from "../home/company-profile";
import { SettingsSidebarAdvancedSettingsAppearance } from "../home/settings-sidebar";
import { Accessibility, DisableDefaultBrand } from ".";

const AppearanceContent = () => {
  const posts: IHighlightedPostsItems = [
    {
      icon: 'emoji-happy',
      title: 'Enhancing Usability: Adaptive Shortcut Controls',
      summary: 'Integrate modifier keys for activating shortcuts to streamline your navigation and enhance productivity without disrupting your typing flow.',
      path: '#'
    },
    {
      icon: 'picture',
      title: 'Visual Accessibility: High Contrast Theme Activation',
      summary: 'Switch to a high-contrast color scheme to improve on-screen text readability, reduce eye strain, and facilitate better visual ergonomics for long work sessions.',
      path: '#'
    },
    {
      icon: 'mouse-square',
      title: 'Media Handling: Autoplay Videos Customization Options',
      summary: 'Customize your video engagement experience with user-centric autoplay settings that align with your system preferences or manual selection for a tailored approach.',
      path: '#'
    },
    {
      icon: 'route',
      title: 'Navigation Preferences: Desktop App Link Integration Features',
      summary: 'Enhance your workflow integration by configuring external links to open seamlessly within the desktop application, providing a unified and efficient user experience.',
      path: '#'
    }
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <SettingsSidebarAdvancedSettingsAppearance title="Theme" />
          <CompanyProfileBranding />
          <Accessibility />
          <Faq />

          <Engage
            title='Contact Support'
            description='Need assistance? Contact our support team for prompt, personalized help your queries & concerns.'
            image={
              <>
                <img
                  src={toAbsoluteUrl('/media/illustrations/31.svg')}
                  className="dark:hidden max-h-[150px]"
                  alt=""
                />
                <img
                  src={toAbsoluteUrl('media/illustrations/31-dark.svg')}
                  className="light:hidden max-h-[150px]"
                  alt=""
                />
              </>
            }
            more={{
              title: 'Contact Support',
              url: ''
            }}
          />
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <DisableDefaultBrand />

          <HighlightedPosts posts={posts} />
        </div>
      </div>
    </div>
  );
};

export { AppearanceContent };
