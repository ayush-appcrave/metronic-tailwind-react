import { GetStartedOptions } from '../../home/get-started';
import { IGetStartedContentItems } from './interfaces';

const SecurityGetStartedContent = () => {
  const items: IGetStartedContentItems = [
    {
      icon: 'subtitle', 
      title: 'Overview', 
      desc: "A Broad Perspective on Our Comprehensive Security Features and Policies.",
      path: 'account/security/overview/index.html'
    },
    {
      icon: 'icon', 
      title: 'Allowed IP Addresses', 
      desc: 'Specify and Restrict Access Through Authorized IP Address Filtering.',
      path: 'account/security/allowed-ip-addresses/index.html'
    },
    {
      icon: 'setting', 
      title: 'Privacy Settings', 
      desc: 'Customize Your Privacy with User-Controlled Settings and Preferences.',
      path: 'account/security/privacy-settings/index.html'
    },
    {
      icon: 'desktop-mobile', 
      title: 'Trusted Devices', 
      desc: 'Identify and Authorize Devices for Enhanced Account Security.',
      path: 'account/security/device-management/index.html'
    },
    {
      icon: 'cloud-change', 
      title: 'Backup & Recovery', 
      desc: 'Secure and Efficient Backup Solutions with Reliable Recovery Options.',
      path: 'account/security/backup-and-recovery/index.html'
    },
    {
      icon: 'key-square', 
      title: 'Login Sessions', 
      desc: 'Track and Manage Active User Sessions for Security Purposes.',
      path: 'account/security/current-sessions/index.html'
    },
    {
      icon: 'shield-slash', 
      title: 'Security Log', 
      desc: 'Detailed Records of Security Events and Activities for Monitoring.',
      path: 'account/security/security-log/index.html'
    }
  ];

  return (
    <GetStartedOptions items={items} dropdown={true} />
  );
};

export { SecurityGetStartedContent };
