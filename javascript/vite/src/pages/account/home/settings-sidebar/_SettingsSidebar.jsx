import { ScrollspyMenu } from '@/partials/menu';
const SettingsSidebar = () => {
  const items = [{
    title: 'Basic Settings',
    url: '#basic_settings',
    active: true
  }, {
    title: 'Authentication',
    children: [{
      title: 'Email',
      url: '#auth_email',
      active: false
    }, {
      title: 'Password',
      url: '#auth_password'
    }, {
      title: 'Social Sign in',
      url: '#auth_social_sign_in'
    }, {
      title: 'Single Sign On(SSO)',
      url: '#auth_social_sign_in_sso'
    }, {
      title: 'Two-Factor auth(2FA)',
      url: '#auth_two_factor'
    }]
  }, {
    title: 'Advanced Settings',
    children: [{
      title: 'Preferences',
      url: '#advanced_settings_preferences'
    }, {
      title: 'Appearance',
      url: '#advanced_settings_appearance'
    }, {
      title: 'Notifications',
      url: '#advanced_settings_notifications'
    }, {
      title: 'Address',
      url: '#advanced_settings_address'
    }]
  }, {
    title: 'External Services',
    children: [{
      title: 'Manage API',
      url: '#external_services_manage_api'
    }, {
      title: 'Integrations',
      url: '#external_services_integrations'
    }]
  }, {
    title: 'Delete Account',
    url: '#delete_account'
  }];
  return <ScrollspyMenu items={items} offset="80px|lg:110px" />;
};
export { SettingsSidebar };