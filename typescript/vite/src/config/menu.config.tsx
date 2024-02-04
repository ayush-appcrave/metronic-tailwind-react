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
        trigger: 'click',
        dropdownProps: {
          placement: 'bottom-start'
        },
        children: [
          {
            title: 'Default',
            path: '/public-profile/profiles/default'
          },
          {
            title: 'Creator',
            path: '/public-profile/profiles/creator'
          },
          {
            title: 'Company',
            path: '/public-profile/profiles/company'
          },
          {
            title: 'NFT',
            path: '/public-profile/profiles/nft'
          },
          {
            title: 'Blogger',
            path: '/public-profile/profiles/blogger'
          },
          {
            title: 'CRM',
            path: '/public-profile/profiles/crm'
          },
          {
            title: 'More',
            collapse: true,
            collapseTitle: 'Show less',
            expandTitle: 'Show 4 more',
            dropdownProps: {
              placement: 'right-start'
            },
            children: [
              {
                title: 'Gamer',
                path: '/public-profile/profiles/gamer'
              },
              {
                title: 'Feeds',
                path: '/public-profile/profiles/feeds'
              },
              {
                title: 'Plain',
                path: '/public-profile/profiles/plain'
              },
              {
                title: 'Modal',
                path: '/public-profile/profiles/modal'
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
            path: '/public-profile/projects/3-columns'
          },
          {
            title: '2 Columns',
            path: '/public-profile/projects/2-columns'
          }
        ]
      },
      {
        title: 'Works',
        path: '/public-profile/works'
      },
      {
        title: 'Teams',
        path: 'public-profile/teams'
      },
      {
        title: 'Network',
        path: '/public-profile/network'
      },
      {
        title: 'Activity',
        path: '/public-profile/activity'
      },
      {
        title: 'More',
        collapse: true,
        collapseTitle: 'Show less',
        expandTitle: 'Show 3 more',
        children: [
          {
            title: 'Campaigns - Card',
            path: '/public-profile/campaigns/card'
          },
          {
            title: 'Campaigns - List',
            path: '/public-profile/campaigns/list'
          },
          {
            title: 'Empty',
            path: '/public-profile/empty'
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
            path: '/account/home/get-started'
          },
          {
            title: 'User Profile',
            path: '/account/home/user-profile'
          },
          {
            title: 'Company Profile',
            path: '/account/home/company-profile'
          },
          {
            title: 'Settings - With Sidebar',
            path: '/account/home/settings-sidebar'
          },
          {
            title: 'Settings - Enterprise',
            path: '/account/home/settings-enterprise'
          },
          {
            title: 'Settings - Plain',
            path: '/account/home/settings-plain'
          },
          {
            title: 'Settings - Modal',
            path: '/account/home/settings-modal'
          }
        ]
      },
      {
        title: 'Billing',
        children: [
          {
            title: 'Billing - Basic',
            path: '/account/billing/basic'
          },
          {
            title: 'Billing - Enterprise',
            path: '/account/billing/enterprise'
          },
          {
            title: 'Plans',
            path: '/account/billing/plans'
          },
          {
            title: 'Billing History',
            path: '/account/billing/history'
          }
        ]
      },
      {
        title: 'Security',
        children: [
          {
            title: 'Get Started',
            path: '/account/security/get-started'
          },
          {
            title: 'Security Overview',
            path: '/account/security/overview'
          },
          {
            title: 'Allowed IP Addresses',
            path: '/account/security/allowed-ip-addresses'
          },
          {
            title: 'Privacy Settings',
            path: '/account/security/privacy-settings'
          },
          {
            title: 'Device Management',
            path: '/account/security/device-management'
          },
          {
            title: 'Backup & Recovery',
            path: '/account/security/backup-and-recovery'
          },
          {
            title: 'Current Sessions',
            path: '/account/security/current-sessions'
          },
          {
            title: 'Security Log',
            path: '/account/security/log'
          }
        ]
      },
      {
        title: 'Members & Roles',
        children: [
          {
            title: 'Teams Starter',
            path: '/account/members/team-starter'
          },
          {
            title: 'Teams',
            path: '/account/members/teams'
          },
          {
            title: 'Team Details',
            path: '/account/members/team-details'
          },
          {
            title: 'Teams Members',
            path: '/account/members/team-members'
          },
          {
            title: 'Member Details',
            path: '/account/members/member-details'
          },
          {
            title: 'Import Members',
            path: '/account/members/import'
          },
          {
            title: 'Roles',
            path: '/account/members/roles'
          },
          {
            title: 'Teams Starter',
            path: '/account/members/role-settings'
          },
          {
            title: 'Teams Starter',
            path: '/account/members/role-members'
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
