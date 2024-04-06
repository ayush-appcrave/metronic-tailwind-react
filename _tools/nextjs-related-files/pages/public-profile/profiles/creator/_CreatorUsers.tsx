import { toAbsoluteUrl } from '@/utils/Assets';

import { ICreatorUsersItem, ICreatorUsersProps } from './interfaces';

const CreatorUsers = ({ title, items, url }: ICreatorUsersProps) => {
  const renderItem = (item: ICreatorUsersItem) => {
    return (
      <>
        <img
          src={toAbsoluteUrl(`/images/content/avatars/${item.image}`)}
          className="rounded-full h-[36px]"
        />
      </>
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
            return renderItem(item);
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

export default  CreatorUsers ;
