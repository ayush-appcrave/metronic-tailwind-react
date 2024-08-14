import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import {
  IUserProfileConnectionsItem,
  IUserProfileConnectionsItems,
  IUserProfileConnectionsProps
} from './interfaces';
import { Crud1, CrudItem1 } from '@/partials/dropdowns/general';
import { Link } from 'react-router-dom';

const UserProfileConnections = ({ url }: IUserProfileConnectionsProps) => {
  const tables: IUserProfileConnectionsItems = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      connections: 26,
      jointLinks: 6,
      connected: true
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      connections: 639,
      jointLinks: 'none',
      connected: false
    },
    {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      connections: 125,
      jointLinks: 19,
      connected: false
    },
    {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      connections: 81,
      jointLinks: 'none',
      connected: true
    },
    {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      connections: 1203,
      jointLinks: 2,
      connected: false
    },
    {
      avatar: '300-9.png',
      name: 'Guy Hawkins',
      connections: 2,
      jointLinks: 'none',
      connected: true
    }
  ];

  const renderItem = (table: IUserProfileConnectionsItem, index: number) => {
    return (
      <tr key={index}>
        <td className="py-3.5">
          <div className="flex items-center grow gap-2.5">
            <img
              src={toAbsoluteUrl(`/media/avatars/${table.avatar}`)}
              className="rounded-full size-9 shrink-0"
              alt=""
            />

            <div className="flex flex-col gap-1">
              <Link
                to="/public-profile/profiles/creator"
                className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
              >
                {table.name}
              </Link>

              <span className="text-xs font-normal text-gray-600 leading-3">
                {table.connections} connections
              </span>
            </div>
          </div>
        </td>

        <td className="py-2 text-right">{table.jointLinks}</td>

        <td className="py-2 text-right">
          <button
            className={`btn btn-xs btn-icon btn-primary btn-outline rounded-full ${table.connected ? 'active' : ''}`}
          >
            {table.connected ? (
              <KeenIcon icon="check" />
            ) : (
              <KeenIcon icon="plus" />
            )}
          </button>
        </td>

        <td className="text-right">
          <div className="menu inline-flex" data-menu="true">
            <div
              className="menu-item"
              data-menu-item-trigger="click|lg:click"
              data-menu-item-toggle="dropdown"
              data-menu-item-placement="bottom-end"
              data-menu-item-offset="0, 10px"
            >
              <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                <KeenIcon icon="dots-vertical" />
              </button>

              <CrudItem1 />
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

        <div className="menu" data-menu="true">
          <div
            className="menu-item"
            data-menu-item-trigger="click|lg:click"
            data-menu-item-toggle="dropdown"
            data-menu-item-placement="bottom-end"
            data-menu-item-offset="0, 10px"
          >
            <button className="btn btn-icon btn-light btn-clear btn-xs menu-toggle">
              <KeenIcon icon="dots-vertical" />
            </button>

            <Crud1 />
          </div>
        </div>
      </div>

      <div className="card-table scrollable-x-auto">
        <div className="scrollable-auto">
          <table className="table align-middle text-2sm text-gray-600">
            <tbody>
              <tr className="bg-gray-100">
                <th className="text-start font-medium min-w-48 py-2.5">Name</th>
                <th className="text-right font-medium min-w-20 py-2.5">Joint Links</th>
                <th className="text-right font-medium min-w-20 py-2.5">Status</th>
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

export { UserProfileConnections };
