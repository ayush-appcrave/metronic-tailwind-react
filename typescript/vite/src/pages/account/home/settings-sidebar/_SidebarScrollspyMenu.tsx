import { ScrollspyMenu, ScrollspyMenuItemsType } from '@/partials/menu';

const SidebarScrollspyMenu = () => {
  const scrollspyItems: ScrollspyMenuItemsType = [
    {
      title: 'Basic Settings',
      path: '#basic_settings',
      active: true
    },
    {
      title: 'Authentication',
      children: [
        {
          title: 'Email',
          path: '#auth_email'
        },
        {
          title: 'Password',
          path: '#auth_password'
        },
        {
          title: 'Social Sign in',
          path: '#auth_social_sign_in'
        },
        {
          title: 'Single Sign On(SSO)',
          path: '#auth_social_sign_in_sso'
        },
        {
          title: 'Two-Factor auth(2FA)',
          path: '#auth_two_factor'
        }
      ]
    },
    {
      title: 'Advanced Settings',
      children: [
        {
          title: 'Preferences',
          path: '#advanced_settings_preferences'
        },
        {
          title: 'Appearance',
          path: '#advanced_settings_appearance'
        },
        {
          title: 'Notifications',
          path: '#advanced_settings_notifications'
        },
        {
          title: 'Address',
          path: '#advanced_settings_address'
        }
      ]
    },
    {
      title: 'External Services',
      children: [
        {
          title: 'Manage API',
          path: '#external_services_manage_api'
        },
        {
          title: 'Integrations',
          path: '#external_services_integrations'
        }
      ]
    },
    {
      title: 'Delete Account',
      path: '#delete_account'
    }
  ];

  return (
    <div className="w-[230px] bg-light shrink-0">
      <div className="w-[230px]">
        <ScrollspyMenu items={scrollspyItems} />
      </div>
    </div>
  );
};

export { SidebarScrollspyMenu };
