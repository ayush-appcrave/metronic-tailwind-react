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
  comingSoon: '/coming-disabled',
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
        path: '/'
      },
      {
        title: 'Dark Sidebar',
        path: '/dark-sidebar'
      }
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
        path: '/public-profile/teams'
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
            path: '/account/security/security-log'
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
        path: '/account/integrations'
      },
      {
        title: 'Notifications',
        path: '/account/notifications'
      },
      {
        title: 'API Keys',
        path: '/account/api-keys'
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
            path: '/account/activity'
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
          }
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
          }
        ]
      },
      {
        title: 'Cooperations',
        path: '/network/cooperations',
        disabled: true
      },
      {
        title: 'Leads',
        path: '/network/leads',
        disabled: true
      },
      {
        title: 'Donators',
        path: '/network/donators',
        disabled: true
      }
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
              }
            ]
          }
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
              }
            ]
          }
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
      }
    ]
  },
  { heading: 'Apps' },
  {
    title: 'User Management',
    icon: 'users',
    disabled: true
  },
  {
    title: 'Projects',
    icon: 'questionnaire-tablet',
    disabled: true
  },
  {
    title: 'eCommerce',
    icon: 'handcart',
    disabled: true
  },
  { heading: 'Miscellaneous' },
  {
    title: 'Modals',
    icon: 'some-files',
    disabled: true
  },
  {
    title: 'Wizards',
    icon: 'note-2',
    disabled: true
  }
];

const MENU_MEGA: MenuConfigType = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Public Profile',
    children: [
      {
        title: 'Profiles',
        children: [
          {
            children: [
              {
                title: 'Default',
                icon: 'badge',
                path: '/public-profile/profiles/default'
              },
              {
                title: 'Creator',
                icon: 'coffee',
                path: '/public-profile/profiles/creator'
              },
              {
                title: 'Company',
                icon: 'abstract-41',
                path: '/public-profile/profiles/company'
              },
              {
                title: 'NFT',
                icon: 'bitcoin',
                path: '/public-profile/profiles/nft'
              },
              {
                title: 'Blogger',
                icon: 'message-text',
                path: '/public-profile/profiles/blogger'
              },
              {
                title: 'CRM',
                icon: 'devices',
                path: '/public-profile/profiles/crm'
              },
              {
                title: 'Gamer',
                icon: 'ghost',
                path: '/public-profile/profiles/gamer'
              }
            ]
          },
          {
            children: [
              {
                title: 'Feeds',
                icon: 'book',
                path: '/public-profile/profiles/feeds'
              },
              {
                title: 'Plain',
                icon: 'files',
                path: '/public-profile/profiles/plain'
              },
              {
                title: 'Modal',
                icon: 'mouse-square',
                path: '/public-profile/profiles/modal'
              },
              {
                title: 'Freelancer',
                icon: 'financial-schedule',
                path: '#',
                disabled: true
              },
              {
                title: 'Developer',
                icon: 'technology-4',
                path: '#',
                disabled: true
              },
              {
                title: 'Team',
                icon: 'users',
                path: '#',
                disabled: true
              },
              {
                title: 'Events',
                icon: 'calendar-tick',
                path: '#',
                disabled: true
              }
            ]
          }
        ]
      },
      {
        title: 'Other Pages',
        children: [
          {
            children: [
              {
                title: 'Projects - 3 Columns',
                icon: 'element-6',
                path: '/public-profile/projects/3-columns'
              },
              {
                title: 'Projects - 2 Columns',
                icon: 'element-4',
                path: '/public-profile/projects/2-columns'
              },
              {
                title: 'Works',
                icon: 'office-bag',
                path: '/public-profile/works'
              },
              {
                title: 'Teams',
                icon: 'people',
                path: '/public-profile/teams'
              },
              {
                title: 'Network',
                icon: 'icon',
                path: '/public-profile/network'
              },
              {
                title: 'Activity',
                icon: 'chart-line-up-2',
                path: '/public-profile/activity'
              },
              {
                title: 'Campaigns - Card',
                icon: 'element-11',
                path: '/public-profile/campaigns/card'
              }
            ]
          },
          {
            children: [
              {
                title: 'Campaigns - List',
                icon: 'kanban',
                path: '/public-profile/campaigns/list'
              },
              {
                title: 'Empty',
                icon: 'file-sheet',
                path: '/public-profile/empty'
              },
              {
                title: 'Documents',
                icon: 'document',
                path: '#',
                disabled: true
              },
              {
                title: 'Badges',
                icon: 'award',
                path: '#',
                disabled: true
              },
              {
                title: 'Awards',
                icon: 'gift',
                path: '#',
                disabled: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'My Account',
    children: [
      {
        title: 'General Pages',
        children: [
          { title: 'Integrations', icon: 'technology-2', path: '/account/integrations' },
          { title: 'Notifications', icon: 'notification-1', path: '/account/notifications' },
          { title: 'API Keys', icon: 'key', path: '/account/api-keys' },
          { title: 'Appearance', icon: 'eye', path: '/account/appearance' },
          { title: 'Invite a Friend', icon: 'user-tick', path: '/account/invite-a-friend' },
          { title: 'Activity', icon: 'support', path: '/account/activity' },
          { title: 'Brand', icon: 'verify', disabled: true },
          { title: 'Get Paid', icon: 'euro', disabled: true }
        ]
      },
      {
        title: 'Other pages',
        children: [
          {
            title: 'Account Home',
            children: [
              { title: 'Get Started + ', path: '/account/home/get-started' },
              { title: 'User Profile', path: '/account/home/user-profile' },
              { title: 'Company Profile', path: '/account/home/company-profile' },
              { title: 'With Sidebar', path: '/account/home/settings-sidebar' },
              { title: 'Enterprise', path: '/account/home/settings-enterprise' },
              { title: 'Plain', path: '/account/home/settings-plain' },
              { title: 'Modal', path: '/account/home/settings-modal' }
            ]
          },
          {
            title: 'Billing',
            children: [
              { title: 'Basic Billing', path: '/account/billing/basic' },
              { title: 'Enterprise', path: '/account/billing/enterprise' },
              { title: 'Plans', path: '/account/billing/plans' },
              { title: 'Billing History', path: '/account/billing/history' },
              { title: 'Tax Info', disabled: true },
              { title: 'Invoices', disabled: true },
              { title: 'Gateaways', disabled: true }
            ]
          },
          {
            title: 'Security',
            children: [
              { title: 'Get Started', path: '/security/get-started' },
              { title: 'Security Overview', path: '/account/security/overview' },
              { title: 'IP Addresses', path: '/account/security/allowed-ip-addresses' },
              { title: 'Privacy Settings', path: '/account/security/privacy-settings' },
              { title: 'Device Management', path: '/account/security/device-management' },
              { title: 'Backup & Recovery', path: '/account/security/backup-and-recovery' },
              { title: 'Current Sessions', path: '/account/security/current-sessions' },
              { title: 'Security Log', path: '/account/security/security-log' }
            ]
          },
          {
            title: 'Members & Roles',
            children: [
              { title: 'Teams Starter', path: '/account/members/team-starter' },
              { title: 'Teams', path: '/account/members/teams' },
              { title: 'Team Info', path: '/account/members/team-info' },
              { title: 'Members Starter', path: '/account/members/members-starter' },
              { title: 'Team Members', path: '/account/members/team-members' },
              { title: 'Import Members', path: '/account/members/import-members' },
              { title: 'Roles', path: '/account/members/roles' },
              { title: 'Permissions - Toggler', path: '/account/members/permissions-toggle' },
              { title: 'Permissions - Check', path: '/account/members/permissions-check' }
            ]
          },
          {
            title: 'Other Pages',
            children: [
              { title: 'Integrations', path: '/account/integrations' },
              { title: 'Notifications', path: '/account/notifications' },
              { title: 'API Keys', path: '/account/api-keys' },
              { title: 'Appearance', path: '/account/appearance' },
              { title: 'Invite a Friend', path: '/account/invite-a-friend' },
              { title: 'Activity', path: '/account/activity' }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Network',
    children: [
      {
        title: 'General Pages',
        children: [
          { title: 'Get Started', icon: 'flag', path: '/network/get-started' },
          { title: 'Colleagues', icon: 'users', path: '#', disabled: true },
          { title: 'Donators', icon: 'heart', path: '#', disabled: true },
          { title: 'Leads', icon: 'abstract-21', path: '#', disabled: true }
        ]
      },
      {
        title: 'Other pages',
        children: [
          {
            title: 'User Cards',
            children: [
              { title: 'Mini Cards', path: '/network/user-cards/mini-cards' },
              { title: 'Team Members', path: '/network/user-cards/author' },
              { title: 'Authors', path: '/network/user-cards/nft' },
              { title: 'NFT Users', path: '/network/user-cards/social' },
              { title: 'Social Users', path: '#' },
              { title: 'Gamers', path: '#', disabled: true }
            ]
          },
          {
            title: 'User Base',
            badge: 'Datatables',
            children: [
              { title: 'Team Crew', path: '/network/user-base/team-crew' },
              { title: 'App Roster', path: '/network/user-base/app-roster' },
              { title: 'Market Authors', path: '/network/user-base/market-authors' },
              { title: 'SaaS Users', path: '/network/user-base/saas-users' },
              { title: 'Store Clients', path: '/network/user-base/store-clients' },
              { title: 'Visitors', path: '/network/user-base/visitors' }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Authentication',
    children: [
      {
        title: 'General pages',
        children: [
          {
            title: 'Classic Layout',
            children: [
              { title: 'Sign In', path: 'authentication/classic/sign-in' },
              { title: 'Sign Up', path: 'authentication/classic/sign-up' },
              { title: '2FA', path: 'authentication/classic/2fa' },
              { title: 'Check Email', path: 'authentication/classic/check-email' },
              {
                title: 'Reset Password',
                children: [
                  {
                    title: 'Enter Email',
                    path: 'authentication/classic/reset-password/enter-email'
                  },
                  {
                    title: 'Check Email',
                    path: 'authentication/classic/reset-password/check-email'
                  },
                  {
                    title: 'Change Password',
                    path: 'authentication/classic/reset-password/change-password'
                  },
                  {
                    title: 'Password is Changed',
                    path: 'authentication/classic/reset-password/password-changed'
                  }
                ]
              }
            ]
          },
          {
            title: 'Branded Layout',
            children: [
              { title: 'Sign In', path: 'authentication/branded/sign-in' },
              { title: 'Sign Up', path: 'authentication/branded/sign-up' },
              { title: '2FA', path: 'authentication/branded/2fa' },
              { title: 'Check Email', path: 'authentication/branded/check-email' },
              {
                title: 'Reset Password',
                children: [
                  {
                    title: 'Enter Email',
                    path: 'authentication/branded/reset-password/enter-email'
                  },
                  {
                    title: 'Check Email',
                    path: 'authentication/branded/reset-password/check-email'
                  },
                  {
                    title: 'Change Password',
                    path: 'authentication/branded/reset-password/change-password'
                  },
                  {
                    title: 'Password is Changed',
                    path: 'authentication/branded/reset-password/password-changed'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Other Pages',
        children: [
          { title: 'Welcome Message', icon: 'like-2', path: 'authentication/welcome-message' },
          {
            title: 'Account Deactivated',
            icon: 'shield-cross',
            path: 'authentication/account-deactivated'
          },
          { title: 'Error 404', icon: 'message-question', path: 'authentication/error-404' },
          { title: 'Error 500', icon: 'information', path: 'authentication/error-500' }
        ]
      }
    ]
  },
  {
    title: 'Help',
    children: [
      {
        title: 'Getting Started',
        icon: 'coffee',
        path: 'https://keenthemes.com/metronic/tailwind/docs/getting-started/installation'
      },
      {
        title: 'Support Forum',
        icon: 'information',
        children: [
          {
            title: 'All Questions',
            icon: 'questionnaire-tablet',
            path: 'https://devs.keenthemes.com'
          },
          {
            title: 'Popular Questions',
            icon: 'star',
            path: 'https://devs.keenthemes.com/popular'
          },
          {
            title: 'Ask Question',
            icon: 'message-question',
            path: 'https://devs.keenthemes.com/question/create'
          }
        ]
      },
      {
        title: 'Licenses & FAQ',
        tooltip: 'Learn more about licenses',
        icon: 'subtitle',
        path: 'https://keenthemes.com/metronic/tailwind/docs/getting-started/license'
      },
      {
        title: 'Documentation',
        icon: 'questionnaire-tablet',
        path: 'https://keenthemes.com/metronic/tailwind/docs'
      },
      { separator: true },
      {
        title: 'Contact Us',
        icon: 'share',
        path: 'https://keenthemes.com/contact'
      }
    ]
  }
];

export { MENU_SIDEBAR, MENU_MEGA, PATHS_AUTH, PATHS_GENERAL };
