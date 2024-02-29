import { GetStartedOptions } from '.';
import { IGetStartedContentItems } from './interfaces';

const GetStartedContent = () => {
  const items: IGetStartedContentItems = [
    {
      icon: 'badge',
      title: 'Personal info',
      desc: "We're open to partnerships, guest posts, promo bannersand more.",
      path: ''
    },
    {
      icon: 'security-user',
      title: 'Login & Security',
      desc: '',
      path: ''
    },
    {
      icon: 'cheque',
      title: 'Billing & Payments',
      desc: '',
      path: ''
    },
    {
      icon: 'notification-on',
      title: 'Notifications',
      desc: '',
      path: ''
    },
    {
      icon: 'dropbox',
      title: 'Integrations',
      desc: '',
      path: ''
    },
    {
      icon: 'profile-user',
      title: 'Members, Teams & Roles',
      desc: '',
      path: ''
    },
    {
      icon: 'key-square',
      title: 'API Keys',
      desc: '',
      path: ''
    },
    {
      icon: 'mouse-square',
      title: 'Appearance',
      desc: '',
      path: ''
    },
    {
      icon: 'monitor-mobile',
      title: 'Devices',
      desc: '',
      path: ''
    },
    {
      icon: 'color-swatch',
      title: 'Brand',
      desc: '',
      path: ''
    },
    {
      icon: 'chart-line-star',
      title: 'Activity',
      desc: '',
      path: ''
    }
  ];

  return (
    <>
      <GetStartedOptions items={items} />

      <div className="flex grow justify-center pt-5 lg:pt-7.5">
        <a href="#" className="btn btn-link">
          More Account Options
        </a>
      </div>
    </>
  );
};

export { GetStartedContent };
