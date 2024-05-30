import clsx from 'clsx';
const DefaultTags = ({
  title,
  className
}) => {
  const items = [{
    label: 'Web Design'
  }, {
    label: 'Code Review'
  }, {
    label: 'Figma'
  }, {
    label: 'Product Development'
  }, {
    label: 'Webflow'
  }, {
    label: 'AI'
  }, {
    label: 'noCode'
  }, {
    label: 'Management'
  }];
  const renderItem = item => {
    return <span className="badge badge-sm badge-gray-200">{item.label}</span>;
  };
  return <div className={clsx('card', className && className)}>
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
    </div>;
};
export { DefaultTags };