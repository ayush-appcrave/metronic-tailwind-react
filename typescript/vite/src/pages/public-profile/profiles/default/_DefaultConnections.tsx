import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import {
  IDefaultConnectionsItem,
  IDefaultConnectionsItems,
  IDefaultConnectionsProps
} from './interfaces';
import { Link } from 'react-router-dom';
import { Card1 } from '@/partials/dropdowns/general';

const DefaultConnections = ({ title }: IDefaultConnectionsProps) => {
  const items: IDefaultConnectionsItems = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      connections: 6,
      connected: false
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      connections: 29,
      connected: true
    },
    {
      avatar: '300-14.png',
      name: 'Cody Fisher',
      connections: 34,
      connected: false
    },
    {
      avatar: '300-7.png',
      name: 'Arlene McCoy',
      connections: 1,
      connected: true
    }
  ];

  const renderItem = (item: IDefaultConnectionsItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-2">
        <div className="flex items-center grow gap-2.5">
          <img
            src={toAbsoluteUrl(`/media/avatars/${item.avatar}`)}
            className="rounded-full size-9 shrink-0"
            alt=""
          />

          <div className="flex flex-col">
            <a href="#" className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px">{item.name}</a>
            <span className="text-xs font-medium text-gray-600">{item.connections} connections</span>
          </div>
        </div> 

        {item.connected ? (
          <button className="btn btn-xs btn-icon btn-primary btn-outline rounded-full active">
            <KeenIcon icon="check" />
          </button>
        ) : (
          <button className="btn btn-xs btn-icon btn-primary btn-outline rounded-full">
            <KeenIcon icon="plus" />
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header gap-2">
        <h3 className="card-title">{title}</h3>

        <div className="menu" data-menu="true">
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
            <Card1 />
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="flex flex-col gap-2 lg:gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>

      <div className="card-footer justify-center">
        <Link to="/public-profile/network" className="btn btn-link">All Contributors</Link>
      </div>
    </div>
  );
};

export { DefaultConnections };
