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
    title: 'Dashboards',
    icon: 'element-11',
    children: [
      {
        title: 'Light Sidebar',
        path: '/dashboard'
      },
      {
        title: 'Dark Sidebar',
        path: '/dashboard/dark-sidebar'
      },
    ]
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
        dropdownProps: {
          placement: 'right-start'
        },
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
    icon: 'setting-2',
    children: [
      {
        title: 'Account Home',
        children: [
          {
            title: 'Account',
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
        title: 'Billing History',
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
            title: 'Team Info',
            path: '/account/members/team-info'
          },
          {
            title: 'Members Starter',
            path: '/account/members/members-starter'
          },
          {
            title: 'Team Members',
            path: '/account/members/team-members'
          },
          {
            title: 'Import Members',
            path: '/account/members/import-members'
          },
          {
            title: 'Roles',
            path: '/account/members/roles'
          },
          {
            title: 'Permissions - Toggler',
            path: '/account/members/permissions-toggler'
          },
          {
            title: 'Permissions - Check',
            path: '/account/members/permissions-check'
          }
        ]
      },
      {
        title: 'Integrations',
        path: '/account/members/integrations'
      },
      {
        title: 'Notifications',
        path: '/account/members/notifications'
      },
      {
        title: 'API Keys',
        path: '/account/members/api-keys'
      },
      {
        title: 'More',
        collapse: true,
        collapseTitle: 'Show less',
        expandTitle: 'Show 3 more',
        dropdownProps: {
          placement: 'right-start'
        },
        children: [
          {
            title: 'Appearance',
            path: '/account/members/appearance'
          },
          {
            title: 'Invite a Friend',
            path: '/account/members/invite-a-friend'
          },
          {
            title: 'Activity',
            path: '/account/members/activity'
          }
        ]
      }
    ]
  },
  {
    title: 'Network',
    icon: 'users',
    children: [
      { 
        title: 'Get Started', 
        path: '/network/get-started' 
      },
      {
        title: 'User Cards',
        children: [
          {
            title: 'Mini Cards',
            path: '/network/user-cards/mini-cards'
          },
          {
            title: 'Team Crew',
            path: '/network/user-cards/team-crew'
          },
          {
            title: 'Author',
            path: '/network/user-cards/author'
          },
          {
            title: 'NFT',
            path: '/network/user-cards/nft'
          },
          {
            title: 'Social',
            path: '/network/user-cards/social'
          },
        ]
      },
      {
        title: 'User Table',
        children: [
          {
            title: 'Team Crew',
            path: '/network/user-table/team-crew'
          },
          {
            title: 'App Roster',
            path: '/network/user-table/app-roster'
          },
          {
            title: 'Market Authors',
            path: '/network/user-table/market-authors'
          },
          {
            title: 'SaaS Users',
            path: '/network/user-table/saas-users'
          },
          {
            title: 'Store Clients',
            path: '/network/user-table/store-clients'
          },
          {
            title: 'Visitors',
            path: '/network/user-table/visitors'
          },
        ]
      },
      { 
        title: 'Cooperations', 
        path: '/network/cooperations',
        soon: true,
      },
      { 
        title: 'Leads', 
        path: '/network/leads',
        soon: true,
      },
      { 
        title: 'Donators', 
        path: '/network/donators',
        soon: true,
      },
    ]
  },
  {
    title: 'Authentication',
    icon: 'security-user',
    children: [
      {
        title: 'Classic',
        children: [
          {
            title: 'Sign In',
            path: '/authentication/classic/sign-in'
          },
          {
            title: 'Sign Up',
            path: '/authentication/classic/sign-up'
          },
          {
            title: '2FA',
            path: '/authentication/classic/2fa'
          },
          {
            title: 'Check Email',
            path: '/authentication/classic/check-email'
          },
          {
            title: 'Reset Password',
            children: [
              {
                title: 'Enter Email',
                path: '/authentication/classic/reset-password/enter-email'
              },
              {
                title: 'Check Email',
                path: '/authentication/classic/reset-password/check-email'
              },
              {
                title: 'Change Password',
                path: '/authentication/classic/reset-password/change-password'
              },
              {
                title: 'Password is Changed',
                path: '/authentication/classic/reset-password/password-is-changed'
              },
              
            ]
          },
        ]
      },
      {
        title: 'Branded',
        children: [
          {
            title: 'Sign In',
            path: '/authentication/branded/sign-in'
          },
          {
            title: 'Sign Up',
            path: '/authentication/branded/sign-up'
          },
          {
            title: '2FA',
            path: '/authentication/branded/2fa'
          },
          {
            title: 'Check Email',
            path: '/authentication/branded/check-email'
          },
          {
            title: 'Reset Password',
            children: [
              {
                title: 'Enter Email',
                path: '/authentication/branded/reset-password/enter-email'
              },
              {
                title: 'Check Email',
                path: '/authentication/branded/reset-password/check-email'
              },
              {
                title: 'Change Password',
                path: '/authentication/branded/reset-password/change-password'
              },
              {
                title: 'Password is Changed',
                path: '/authentication/branded/reset-password/password-is-changed'
              },
              
            ]
          },
        ]
      },
      { 
        title: 'Welcome Message', 
        path: '/authentication/welcome-message' 
      },
      { 
        title: 'Account Deactivated', 
        path: '/authentication/account-deactivated' 
      },
      { 
        title: 'Error 404', 
        path: '/authentication/error-404' 
      },
      { 
        title: 'Error 500', 
        path: '/authentication/error-500' 
      },
    ]
  },
  { heading: 'Apps' },
  {
    title: 'User Management',
    icon: 'users',
    soon: true,
  },
  {
    title: 'Projects',
    icon: 'questionnaire-tablet',
    soon: true,
  },
  {
    title: 'eCommerce',
    icon: 'handcart',
    soon: true,
  },
  { heading: 'Miscellaneous' },
  {
    title: 'Modals',
    icon: 'some-files',
    soon: true,
  },
  {
    title: 'Wizards',
    icon: 'note-2',
    soon: true,
  },
];

export { MENU_SIDEBAR, PATHS_AUTH, PATHS_GENERAL };
