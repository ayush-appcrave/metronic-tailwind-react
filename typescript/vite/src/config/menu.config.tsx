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
    children: [
      {
        title: 'Profiles',
        icon: 'profile-circle',
        children: [
          {
            title: 'Default',
            path: '/marketing'
          },
          {
            title: 'Creator',
            path: '#'
          },
          {
            title: 'Company',
            path: ''
          },
          {
            title: 'NFT',
            path: ''
          },
          {
            title: 'Blogger',
            path: 'public-profile/profiles/blogger/index.html'
          },
          {
            title: 'CRM',
            path: 'public-profile/profiles/crm/index.html'
          },
          {
            title: 'More',
            collapse: true,
            collapseTitle: 'Show less',
            expandTitle: 'Show 4 more',
            children: [
              {
                title: 'Gamer',
                path: '/ecommerce'
              },
              {
                title: 'Feeds',
                path: '#'
              },
              {
                title: 'Plain',
                path: '#'
              },
              {
                title: 'Modal',
                path: '#'
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
            path: 'public-profile/projects/3-columns/index.html'
          },
          {
            title: '2 Columns',
            path: 'public-profile/projects/2-columns/index.html'
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
            path: 'account/home/get-started/index.html'
          },
          {
            title: 'User Profile',
            path: 'account/home/user-profile/index.html'
          },
          {
            title: 'Company Profile',
            path: 'account/home/company-profile/index.html'
          },
          {
            title: 'Settings - With Sidebar',
            path: 'account/home/settings-sidebar/index.html'
          },
          {
            title: 'Settings - Enterprise',
            path: 'account/home/settings-enterprise/index.html'
          },
          {
            title: 'Settings - Plain',
            path: 'account/home/settings-plain/index.html'
          },
          {
            title: 'Settings - Modal',
            path: 'account/home/settings-modal/index.html'
          }
        ]
      },
      {
        title: 'Billing',
        children: [
          {
            title: 'Billing - Basic',
            path: 'account/billing/basic/index.html'
          },
          {
            title: 'Billing - Enterprise',
            path: 'account/billing/enterprise/index.html'
          },
          {
            title: 'Plans',
            path: 'account/billing/plans/index.html'
          },
          {
            title: 'Billing History',
            path: 'account/billing/history/index.html'
          }
        ]
      },
      {
        title: 'Security',
        children: [
          {
            title: 'Get Started',
            path: 'account/security/get-started/index.html'
          },
          {
            title: 'Security Overview',
            path: 'account/security/overview/index.html'
          },
          {
            title: 'Allowed IP Addresses',
            path: 'account/security/allowed-ip-addresses/index.html'
          },
          {
            title: 'Privacy Settings',
            path: 'account/security/privacy-settings/index.html'
          },
          {
            title: 'Device Management',
            path: 'account/security/device-management/index.html'
          },
          {
            title: 'Backup & Recovery',
            path: 'account/security/backup-and-recovery/index.html'
          },
          {
            title: 'Current Sessions',
            path: 'account/security/current-sessions/index.html'
          },
          {
            title: 'Security Log',
            path: 'account/security/log/index.html'
          }
        ]
      },
      {
        title: 'Members & Roles',
        children: [
          {
            title: 'Teams Starter',
            path: 'account/members/team-starter/index.html'
          },
          {
            title: 'Teams',
            path: 'account/members/teams/index.html'
          },
          {
            title: 'Team Details',
            path: 'account/members/team-details/index.html'
          },
          {
            title: 'Teams Members',
            path: 'account/members/team-members/index.html'
          },
          {
            title: 'Member Details',
            path: 'account/members/member-details/index.html'
          },
          {
            title: 'Import Members',
            path: 'account/members/import/index.html'
          },
          {
            title: 'Roles',
            path: 'account/members/roles/index.html'
          },
          {
            title: 'Teams Starter',
            path: 'account/members/role-settings/index.html'
          },
          {
            title: 'Teams Starter',
            path: 'account/members/role-members/index.html'
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
