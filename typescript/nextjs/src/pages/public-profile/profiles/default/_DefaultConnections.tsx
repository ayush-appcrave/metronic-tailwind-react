import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import {
  IDefaultConnectionsItem,
  IDefaultConnectionsItems,
  IDefaultConnectionsProps
} from './interfaces';

const DefaultConnections = ({ title, url }: IDefaultConnectionsProps) => {
  const items: IDefaultConnectionsItems = [
    {
      avatar: '300-3.jpg',
      name: 'Tyler Hero',
      connections: 6,
      connected: false
    },
    {
      avatar: '300-2.jpg',
      name: 'Esther Howard',
      connections: 29,
      connected: true
    },
    {
      avatar: '300-7.jpg',
      name: 'Cody Fisher',
      connections: 34,
      connected: false
    },
    {
      avatar: '300-14.jpg',
      name: 'Arlene McCoy',
      connections: 1,
      connected: true
    }
  ];

  const renderItem = (item: IDefaultConnectionsItem) => {
    return (
      <>
        <div className="flex items-center gap-2">
          <div className="flex items-center grow gap-2.5">
            <img
              src={toAbsoluteUrl(`/images/content/avatars/${item.avatar}`)}
              className="rounded-full size-9 shrink-0"
              alt=""
            />
            <div className="flex flex-col">
              <a
                href="#"
                className="text-sm font-semibold text-gray-800 hover:text-primary-active mb-px"
              >
                {item.name}
              </a>
              <span className="text-xs font-normal text-gray-500">
                {item.connections} connections
              </span>
            </div>
          </div>

          {item.connected ? (
            <button className="btn btn-xs btn-icon btn-light btn-primary active rounded-full">
              <KeenIcon icon="check" />
            </button>
          ) : (
            <button className="btn btn-xs btn-icon btn-light btn-primary rounded-full">
              <KeenIcon icon="plus" />
            </button>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>

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
      <div className="card-body">
        <div className="flex flex-col gap-2 lg:gap-5">
          {items.map((item, index) => {
            return renderItem(item);
          })}
        </div>
      </div>

      <div className="card-footer justify-center">
        <a href={url} className="btn btn-link">
          All Connections
        </a>
      </div>
    </div>
  );
};

export { DefaultConnections }
