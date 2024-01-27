import { type MenuConfigType } from '../components/menu';
import { type PathsType } from '.';

// Auth paths
const PATHS_AUTH: PathsType = {
  login: '/auth/login',
  register: '/auth/register',
  verify: '/auth/verify',
  resetPassword: '/auth/reset-password',
  newPassword: '/auth/new-password'
};

// General paths
const PATHS_GENERAL: PathsType = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500'
};

const MENU_SIDEBAR: MenuConfigType = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'element-11'
  },
  {
    heading: 'User'
  },
  {
    title: 'Public Profile',
    icon: 'profile-circle',
    toggle: 'accordion',
    children: [
      {
        title: 'Profiles',
        icon: 'profile-circle',
        path: '/dashboard',
        toggle: 'accordion',
        children: [
          {
            title: 'Default',
            path: 'public-profile/profiles/default/index.html',
            bullet: true
          },
          {
            title: 'Creator',
            bullet: true,
            path: 'public-profile/profiles/creator/index.html'
          },
          {
            title: 'Company',
            bullet: true,
            path: 'public-profile/profiles/company/index.html'
          },
          {
            title: 'NFT',
            bullet: true,
            path: 'public-profile/profiles/nft/index.html'
          },
          {
            title: 'Blogger',
            bullet: true,
            path: 'public-profile/profiles/blogger/index.html'
          },
          {
            title: 'CRM',
            bullet: true,
            path: 'public-profile/profiles/crm/index.html'
          },
          {
            title: 'More',
            bullet: true,
            collapse: true,
            collapseTitle: 'Show less',
            expandTitle: 'Show 4 more',
            children: [
              {
                title: 'Gamer',
                bullet: true,
                path: 'public-profile/profiles/gamer/index.html'
              },
              {
                title: 'Feeds',
                bullet: true,
                path: 'public-profile/profiles/feeds/index.html'
              },
              {
                title: 'Plain',
                bullet: true,
                path: 'public-profile/profiles/plain/index.html'
              },
              {
                title: 'Modal',
                bullet: true,
                path: 'public-profile/profiles/modal/index.html'
              }
            ]
          }
        ]
      },
      {
        title: 'Projects',
        children: [
          {
            title: '3 Columns',
            path: 'public-profile/projects/3-columns/index.html',
            bullet: true
          },
          {
            title: '2 Columns',
            path: 'public-profile/projects/2-columns/index.html',
            bullet: true
          }
        ]
      },
      {
        title: 'Works',
        path: 'public-profile/works/index.html'
      },
      {
        title: 'Teams',
        path: 'public-profile/teams/index.html'
      },
      {
        title: 'Network',
        path: 'public-profile/network/index.html'
      },
      {
        title: 'Activity',
        path: 'public-profile/activity/index.html'
      },
      {
        title: 'More',
        collapse: true,
        collapseTitle: 'Show less',
        expandTitle: 'Show 3 more',
        children: [
          {
            title: 'Campaigns - Card',
            path: 'public-profile/campaigns/card/index.html'
          },
          {
            title: 'Campaigns - List',
            path: 'public-profile/campaigns/list/index.html'
          },
          {
            title: 'Empty',
            path: 'public-profile/empty/index.html'
          }
        ]
      }
    ]
  },
  {
    title: 'My Account',
    icon: 'profile-circle',
    children: [
      {
        title: 'Account Home',
        children: [
          {
            title: 'Get Started',
            path: 'account/home/get-started/index.html',
            bullet: true
          },
          {
            title: 'User Profile',
            path: 'account/home/user-profile/index.html',
            bullet: true
          },
          {
            title: 'Company Profile',
            path: 'account/home/company-profile/index.html',
            bullet: true
          },
          {
            title: 'Settings - With Sidebar',
            path: 'account/home/settings-sidebar/index.html',
            bullet: true
          },
          {
            title: 'Settings - Enterprise',
            path: 'account/home/settings-enterprise/index.html',
            bullet: true
          },
          {
            title: 'Settings - Plain',
            path: 'account/home/settings-plain/index.html',
            bullet: true
          },
          {
            title: 'Settings - Modal',
            path: 'account/home/settings-modal/index.html',
            bullet: true
          }
        ]
      },
      {
        title: 'Billing',
        children: [
          {
            title: 'Billing - Basic',
            path: 'account/billing/basic/index.html',
            bullet: true
          },
          {
            title: 'Billing - Enterprise',
            path: 'account/billing/enterprise/index.html',
            bullet: true
          },
          {
            title: 'Plans',
            path: 'account/billing/plans/index.html',
            bullet: true
          },
          {
            title: 'Billing History',
            path: 'account/billing/history/index.html',
            bullet: true
          }
        ]
      },
      {
        title: 'Security',
        children: [
          {
            title: 'Get Started',
            path: 'account/security/get-started/index.html',
            bullet: true
          },
          {
            title: 'Security Overview',
            path: 'account/security/overview/index.html',
            bullet: true
          },
          {
            title: 'Allowed IP Addresses',
            path: 'account/security/allowed-ip-addresses/index.html',
            bullet: true
          },
          {
            title: 'Privacy Settings',
            path: 'account/security/privacy-settings/index.html',
            bullet: true
          },
          {
            title: 'Device Management',
            path: 'account/security/device-management/index.html',
            bullet: true
          },
          {
            title: 'Backup & Recovery',
            path: 'account/security/backup-and-recovery/index.html',
            bullet: true
          },
          {
            title: 'Current Sessions',
            path: 'account/security/current-sessions/index.html',
            bullet: true
          },
          {
            title: 'Security Log',
            path: 'account/security/log/index.html',
            bullet: true
          }
        ]
      },
      {
        title: 'Members & Roles',
        children: [
          {
            title: 'Teams Starter',
            path: 'account/members/team-starter/index.html',
            bullet: true
          },
          {
            title: 'Teams',
            path: 'account/members/teams/index.html',
            bullet: true
          },
          {
            title: 'Team Details',
            path: 'account/members/team-details/index.html',
            bullet: true
          },
          {
            title: 'Teams Members',
            path: 'account/members/team-members/index.html',
            bullet: true
          },
          {
            title: 'Member Details',
            path: 'account/members/member-details/index.html',
            bullet: true
          },
          {
            title: 'Import Members',
            path: 'account/members/import/index.html',
            bullet: true
          },
          {
            title: 'Roles',
            path: 'account/members/roles/index.html',
            bullet: true
          },
          {
            title: 'Teams Starter',
            path: 'account/members/role-settings/index.html',
            bullet: true
          },
          {
            title: 'Teams Starter',
            path: 'account/members/role-members/index.html',
            bullet: true
          }
        ]
      }
    ]
  },
  {
    title: 'Community',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  {
    title: 'User Management',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  {
    title: 'Authentication',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  { heading: 'Pages' },
  {
    title: 'Marketplace',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  {
    title: 'Social',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  {
    title: 'Company',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  {
    title: 'Blog',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  { heading: 'Miscellaneous' },
  {
    title: 'Modals',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  {
    title: 'Wizards',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  {
    title: 'Search',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  { heading: 'Apps' },
  {
    title: 'Projects',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  },
  {
    title: 'eCommerce',
    icon: 'profile-circle',
    children: [
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' },
      { title: 'Link', path: '#' }
    ]
  }
];

export { MENU_SIDEBAR, PATHS_AUTH, PATHS_GENERAL };
