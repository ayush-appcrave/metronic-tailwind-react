import { toAbsoluteUrl } from '@/utils/Assets';

import { ICreatorUsersItem, ICreatorUsersProps } from './interfaces';

const CreatorUsers = ({ title, items, url }: ICreatorUsersProps) => {
  const renderItem = (item: ICreatorUsersItem, index: number) => {
    return (
      <img
        src={toAbsoluteUrl(`/images/content/avatars/${item.image}`)}
        className="rounded-full h-[36px]"
        alt=""
        key={index}
      />
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>

      <div className="card-body">
        <div className="flex flex-wrap gap-2.5 xl:mr-16">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>

      <div className="card-footer justify-center">
        <a href={url} className="btn btn-link">
          Join Our Team
        </a>
      </div>
    </div>
  );
};

export { CreatorUsers };
