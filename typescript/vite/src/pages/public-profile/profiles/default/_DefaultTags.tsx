import clsx from 'clsx';

import { IDefaultTagsProps } from './interfaces';

const DefaultTags = ({ title, className }: IDefaultTagsProps) => {
  return (
    <div className={clsx('card', className && className)}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body pb-7.5">
        <div className="flex items-center flex-wrap gap-3 lg:gap-4"></div>
      </div>
    </div>
  );
};

export { DefaultTags };
