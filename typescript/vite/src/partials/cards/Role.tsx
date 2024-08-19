import { KeenIcon } from '@/components';

import { IRoleProps } from './interfaces';
import { HexagonBadge } from '../common';
import { CardItem1 } from '../dropdowns/general';
import { Link } from 'react-router-dom';

const Role = ({ path, title, subTitle, description, team }: IRoleProps) => {
  return (
    <div className="card flex flex-col gap-5 p-5 lg:p-7.5">
      <div className="flex items-center flex-wrap justify-between gap-1">
        <div className="flex items-center gap-2.5">
          <HexagonBadge />
          
          <div className="flex flex-col">
            <Link to={`/${path}`} className="text-md font-semibold text-gray-900 hover:text-primary-active mb-px">
              {title}
            </Link>
            <span className="text-2sm font-medium text-gray-600">{subTitle}</span>
          </div>
        </div>

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

            <CardItem1 />
          </div>
        </div>
      </div>

      <p className="text-2sm text-gray-600 font-medium">{description}</p>

      <span className="text-2sm text-gray-700 font-medium">{team}</span>
    </div>
  );
};

export { Role };
