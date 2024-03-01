import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import {
  ICompanyProfileMembersItem,
  ICompanyProfileMembersItems,
  ICompanyProfileMembersProps
} from './interfaces';

const CompanyProfileMembers = ({ url }: ICompanyProfileMembersProps) => {
  const tables: ICompanyProfileMembersItems = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      connections: 26,
      label: 'Project Member',
      joined: 'Today',
      disabled: true
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      connections: 639,
      label: 'Accountant',
      joined: '5 days ago',
      disabled: false
    },
    {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      connections: 125,
      label: 'Data Analyst',
      joined: '3 days ago',
      disabled: false
    },
    {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      connections: 81,
      label: 'Accountant',
      joined: '2 weeks ago',
      disabled: true
    },
    {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      connections: 1203,
      label: 'Director',
      joined: '3 weeks ago',
      disabled: false
    }
  ];

  const renderItem = (table: ICompanyProfileMembersItem, index: number) => {
    return (
      <tr key={index}>
        <td>
          <div className="flex items-center grow gap-2.5">
            <img
              src={toAbsoluteUrl(`/images/content/avatars/${table.avatar}`)}
              className="rounded-full size-9 shrink-0"
              alt=""
            />

            <div className="flex flex-col">
              <a
                href="#"
                className="text-sm font-semibold text-gray-800 hover:text-primary-active mb-px"
              >
                {table.name}
              </a>
              <span className="text-xs font-normal text-gray-500">
                {table.connections} connections
              </span>
            </div>
          </div>
        </td>

        <td className="text-right">
          <span className="badge badge-sm badge-outline">{table.label}</span>
        </td>

        <td className="text-right">
          <span
            className={`badge badge-sm badge-outline ${table.disabled ? 'badge-danger' : 'badge-success'}`}
          >
            {table.disabled ? 'Disabled' : 'Enabled'}
          </span>
        </td>

        <td className="text-right">{table.label}</td>

        <td>
          <div className="menu flex justify-end" data-menu="true">
            <div
              className="menu-item"
              data-menu-item-trigger="click"
              data-menu-item-toggle="dropdown"
              data-menu-item-placement="bottom-end"
            >
              <button className="btn btn-icon btn-light btn-clear btn-xs menu-toggle">
                <KeenIcon icon="dots-vertical" className="!text-xl" />
              </button>

              <div className="menu-dropdown w-[175px] text-gray-700 px-3 py-3 text-2xs">
                Menu content
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">Connections</h3>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <label className="switch">
              <input className="order-2" type="checkbox" value="1" name="check" />
              <span className="switch-label order-1">
                &nbsp;Enforce 2FA
                <span className="hidden switch-off:inline"></span>
                <span className="hidden switch-on:inline"></span>
              </span>
            </label>
          </div>

          <div className="menu" data-menu="true">
            <div
              className="menu-item"
              data-menu-item-trigger="click"
              data-menu-item-toggle="dropdown"
              data-menu-item-placement="bottom-end"
            >
              <button className="btn btn-icon btn-light btn-clear btn-xs menu-toggle">
                <KeenIcon icon="dots-vertical" className="!text-xl" />
              </button>

              <div className="menu-dropdown w-[175px] text-gray-700 px-3 py-3 text-2xs">
                Menu content
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-table scrollable-x-auto">
        <div className="scrollable-auto">
          <table className="table align-middle text-2sm text-gray-600">
            <tbody>
              <tr className="bg-gray-100">
                <th className="text-start font-medium min-w-51">Name</th>
                <th className="text-right font-medium min-w-35">Role</th>
                <th className="text-right font-medium min-w-31">2FA</th>
                <th className="text-right font-medium min-w-19">Joined</th>
                <th className="min-w-16"></th>
              </tr>

              {tables.map((table, index) => {
                return renderItem(table, index);
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card-footer justify-center">
        <a href={url} className="btn btn-link">
          View 64 more
        </a>
      </div>
    </div>
  );
};

export { CompanyProfileMembers };
