import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import {
  ISettingsSidebarExternalServicesIntegrationsItem,
  ISettingsSidebarExternalServicesIntegrationsItems
} from './interfaces';

const SettingsSidebarExternalServicesIntegrations = () => {
  const items: ISettingsSidebarExternalServicesIntegrationsItems = [
    {
      logo: 'google-webdev.svg',
      title: 'Google web.dev',
      email: 'webdev@webdevmail.com',
      description: 'Integrate for enhanced collaboration in web development.',
      checkbox: true
    },
    {
      logo: 'equacoin.svg',
      title: 'Equacoin',
      email: 'equacoin@cryptoemail.com',
      description: 'Streamline cryptocurrency transactions securely and efficiently.',
      checkbox: false
    },
    {
      logo: 'evernote.svg',
      title: 'Evernote',
      email: 'evernote@noteexample.com',
      description: 'Streamline cryptocurrency transactions securely and efficiently.',
      checkbox: true
    },
    {
      logo: 'inferno.svg',
      title: 'Inferno',
      email: 'inferno@dataexample.com',
      description: 'Robust email integration for data management.',
      checkbox: true
    },
    {
      logo: 'jira.svg',
      title: 'Jira',
      email: 'jira@projectmail.com',
      description: 'Streamline project management, enhance collaboration.',
      checkbox: false
    }
  ];

  const renderItem = (item: ISettingsSidebarExternalServicesIntegrationsItem, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between flex-wrap border border-gray-200 rounded-xl gap-2 p-3.5"
      >
        <div className="flex items-center flex-wrap gap-3.5">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
            className="size-8 shrink-0"
            alt=""
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <a href="#" className="text-sm font-semibold text-gray-800 hover:text-primary-active">
                {item.title}
              </a>
              <a href="#" className="text-2sm font-medium text-gray-600 hover:text-primary-active">
                {item.email}
              </a>
            </div>
            <span className="text-2sm font-medium text-gray-600">{item.description}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-5">
          {item.checkbox ? (
            <label className="switch switch-sm">
              <input type="checkbox" defaultChecked value="1" />
            </label>
          ) : (
            <label className="switch switch-sm">
              <input type="checkbox" value="2" />
            </label>
          )}

          <div className="btn btn-sm btn-icon btn-icon-lg text-gray-500 hover:text-primary-active">
            <KeenIcon icon="gear" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header" id="external_services_integrations">
        <h3 className="card-title">Integrations</h3>
      </div>
      <div className="card-body grid gap-5 lg:gap-7.5 lg:py-7.5 py-5">
        <div className="grid gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export { SettingsSidebarExternalServicesIntegrations };
