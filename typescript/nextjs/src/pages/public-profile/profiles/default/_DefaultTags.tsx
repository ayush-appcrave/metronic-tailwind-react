import clsx from 'clsx';

import { IDefaultTagsItem, IDefaultTagsItems, IDefaultTagsProps } from './interfaces';

const DefaultTags = ({ title, className }: IDefaultTagsProps) => {
  const items: IDefaultTagsItems = [
    { label: 'Web Design' },
    { label: 'Code Review' },
    { label: 'Figma' },
    { label: 'Product Development' },
    { label: 'Webflow' },
    { label: 'AI' },
    { label: 'noCode' },
    { label: 'Management' }
  ];

  const renderItem = (item: IDefaultTagsItem) => {
    return <span className="badge badge-sm badge-gray-200">{item.label}</span>;
  };

  return (
    <div className={clsx('card', className && className)}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <div className="flex flex-wrap gap-2.5 mb-2">
          {items.map((item, index) => {
            return renderItem(item);
          })}
        </div>
      </div>
    </div>
  );
};

export { DefaultTags }
