import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import {
  IDefaultRecentUploadsItem,
  IDefaultRecentUploadsItems,
  IDefaultRecentUploadsProps
} from './interfaces';
import { Link } from 'react-router-dom';
import { Card1, CardItem1 } from '@/partials/dropdowns/general';

const DefaultRecentUploads = ({ title }: IDefaultRecentUploadsProps) => {
  const items: IDefaultRecentUploadsItems = [
    {
      image: 'pdf.svg',
      desc: 'Project-pitch.pdf',
      date: '4.7 MB 26 Sep 2024 3:20 PM'
    },
    {
      image: 'doc.svg',
      desc: 'Report-v1.docx',
      date: '2.3 MB 1 Oct 2024 12:00 PM'
    },
    {
      image: 'ai.svg',
      desc: 'Framework-App.js',
      date: '0.8 MB 17 Oct 2024 6:46 PM'
    },
    {
      image: 'js.svg',
      desc: 'Mobile-logo.ai',
      date: '0.2 MB 4 Nov 2024 11:30 AM'
    }
  ];

  const renderItem = (item: IDefaultRecentUploadsItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-3">
        <div className="flex items-center grow gap-2.5">
          <img src={toAbsoluteUrl(`/media/file-types/${item.image}`)} alt="" />

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">{item.desc}</span>
            <span className="text-xs font-normal text-gray-600">{item.date}</span>
          </div>
        </div>

        <div className="menu" data-menu="true">
          <div className="menu-item" data-menu-item-trigger="click|lg:click" data-menu-item-toggle="dropdown" data-menu-item-placement="bottom-end" data-menu-item-offset="0, 10px">
            <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
              <KeenIcon icon="dots-vertical" />
            </button>

            <CardItem1 />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
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
        <div className="grid gap-2.5 lg:gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>

      <div className="card-footer justify-center">
        <Link to="/account/integrations" className="btn btn-link">All Files</Link>
      </div>
    </div>
  );
};

export { DefaultRecentUploads };
