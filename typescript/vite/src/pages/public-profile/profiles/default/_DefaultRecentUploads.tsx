import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import {
  IDefaultRecentUploadsItem,
  IDefaultRecentUploadsItems,
  IDefaultRecentUploadsProps
} from './interfaces';

const DefaultRecentUploads = ({ title, url }: IDefaultRecentUploadsProps) => {
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
      image: 'adobe illustrator.svg',
      desc: 'Framework-App.js',
      date: '0.8 MB 17 Oct 2024 6:46 PM'
    },
    {
      image: 'javascript.svg',
      desc: 'Mobile-logo.ai',
      date: '0.2 MB 4 Nov 2024 11:30 AM'
    }
  ];

  const renderItem = (item: IDefaultRecentUploadsItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-3">
        <div className="flex items-center grow gap-2.5">
          <img src={toAbsoluteUrl(`/images/content/file-types/${item.image}`)} alt="" />

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800 cursor-pointer hover:text-primary mb-px">
              {item.desc}
            </span>
            <span className="text-xs font-normal text-gray-500">{item.date}</span>
          </div>
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
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <div className="grid gap-2.5 lg:gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>

      <div className="card-footer justify-center">
        <a href={url} className="btn btn-link">
          All Files
        </a>
      </div>
    </div>
  );
};

export { DefaultRecentUploads };
