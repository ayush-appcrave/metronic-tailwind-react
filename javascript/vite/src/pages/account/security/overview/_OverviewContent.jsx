import { toAbsoluteUrl } from '@/utils';
import { OverviewAuthentification, OverviewGeneralSettings, OverviewLoginSessions, OverviewProductInsight, OverviewQuickSettings, OverviewTrustedDevices } from '.';
import { MiscHighlightedPosts } from '@/partials/misc';
import { CreatorFeaturesHighlight } from '@/pages/public-profile/profiles/creator';
const OverviewContent = () => {
  const posts = [{
    icon: 'shield-slash',
    title: 'Enhancing Security Knowledge: Guides, Tips, and Documentation',
    summary: 'Explore comprehensive resources to strengthen security understanding through detailed guides, expert tips, and documentation.',
    path: '#'
  }, {
    icon: 'ensure',
    title: 'Mastering Security Protocols: Learning Through Expert Guidance',
    summary: 'Delve into the realm of security with specialized learning materials, expert guidance, and practical tips for implementation.',
    path: '#'
  }, {
    icon: 'shield-search',
    title: 'Navigating Digital Security: A Comprehensive Learning Journey',
    summary: 'Embark on a journey of digital security enlightenment with our extensive collection of educational guides and practical advice..',
    path: '#'
  }];
  return <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <CreatorFeaturesHighlight image={<>
                <img src={toAbsoluteUrl('/media/illustrations/5.svg')} className="dark:hidden max-h-36" alt="" />
                <img src={toAbsoluteUrl('/media/illustrations/5-dark.svg')} className="light:hidden max-h-36" alt="" />
              </>} title="Essential Personal Security Tips for Enhanced Safety" description="Transform your living space beautifully with our Restyle Your Space: Soft Goods Makeover Ideas tutorial" more={{
          title: 'Review Security Tips',
          url: '#'
        }} features={[['Strong Passwords', 'Budget-Friendly'], ['Two-Factor Authentication', 'Fresh Look']]} />

          <OverviewGeneralSettings />
          <OverviewAuthentification />
          <OverviewQuickSettings />
          <OverviewLoginSessions />
          <OverviewTrustedDevices />
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <OverviewProductInsight image={<>
                <img src={toAbsoluteUrl('/media/brand-logos/apple-black.svg')} className="dark:hidden h-5" alt="" />
                <img src={toAbsoluteUrl('/media/brand-logos/apple-white.svg')} className="light:hidden h-5" alt="" />
              </>} title="iOS" description="Active Sessions" number={24} />

          <OverviewProductInsight image={<img src={toAbsoluteUrl('/media/brand-logos/android.svg')} className="h-5" alt="" />} title="Android" description="Active Sessions" number={35} />

          <MiscHighlightedPosts posts={posts} />
        </div>
      </div>
    </div>;
};
export { OverviewContent };