import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components/keenicons';

const Sidebar = () => {
  const items = [
    {
      icon: 'chart-line-star',
      path: '/',
      tooltip: 'Dashboard',
    },
    {
      icon: 'profile-circle',
      path: 'public-profile/profiles/default',
      tooltip: 'Profile',
    },
    {
      icon: 'setting-2',
      active: true,
      path: 'account/home/get-started',
      tooltip: 'Account',
    },
    {
      icon: 'users',
      path: 'network/get-started',
      tooltip: 'Network',
    },
    {
      icon: 'security-user',
      path: 'account/billing/plans',
      tooltip: 'Plans',
    },
    {
      icon: 'messages',
      path: 'account/security/security-log',
      tooltip: 'Security Logs',
    },
    {
      icon: 'shop',
      path: 'account/notifications',
      tooltip: 'Notifications',
    },
    {
      icon: 'cheque',
      path: 'account/members/roles',
      tooltip: 'ACL',
    },
    {
      icon: 'code',
      path: 'account/api-keys',
      tooltip: 'API Keys',
    },
    {
      icon: 'question',
      path: 'https://keenthemes.com/metronic/tailwind/docs/',
      tooltip: 'Docs',
    }
  ];

  return (
    <div
      id="sidebar"
      className="fixed w-[--tw-sidebar-width] lg:top-[--tw-header-height] top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0 group py-3 lg:py-0"
      data-drawer="true"
      data-drawer-enable="true|lg:false"
      data-drawer-class="drawer drawer-start top-0 bottom-0"
    >
      <div id="sidebar_content" className="flex grow shrink-0">
        <div 
          className="scrollable-y-auto grow gap-2.5 shrink-0 flex items-center flex-col"
          data-scrollable="true"
          data-scrollable-height="auto"
          data-scrollable-wrappers="#sidebar_content"
          data-scrollable-offset="0px"
        >
          {items.map((item, index) => (
            item.path.startsWith('http') ? (
              <a
                href={item.path}
                key={index}
                data-tooltip={item.tooltip}
                data-tooltip-placement="right"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-icon btn-icon-lg rounded-full size-10 border border-transparent text-gray-600 hover:bg-light hover:text-primary hover:border-gray-300 ${
                  item.active ? 'bg-light text-primary border-gray-300' : ''
                }`}
              >
                <span className="menu-icon">
                  <KeenIcon icon={item.icon} />
                </span>
                <span className="tooltip">{item.tooltip}</span>
              </a>
            ) : (
              <Link
                to={item.path}
                key={index}
                data-tooltip={item.tooltip}
                data-tooltip-placement="right"
                className={`btn btn-icon btn-icon-lg rounded-full size-10 border border-transparent text-gray-600 hover:bg-light hover:text-primary hover:border-gray-300 ${
                  item.active ? 'bg-light text-primary border-gray-300' : ''
                }`}
              >
                <span className="menu-icon">
                  <KeenIcon icon={item.icon} />
                </span>
                <span className="tooltip">{item.tooltip}</span>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
