import { INFTAboutItem, INFTAboutItems } from './interfaces';

const NFTAbout = () => {
  const items: INFTAboutItems = [
    { label: 'Joined:', info: '26 Aug, 2021' },
    { label: 'Sector:', info: 'Online Education' },
    {
      label: 'Status:',
      info: '<span class="badge badge-sm badge-success badge-outline">Subscribed</span>'
    }
  ];

  const renderItems = (item: INFTAboutItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-2.5">
        <span className="text-sm font-medium text-gray-500 min-w-14 xl:min-w-24 shrink-0">
          {item.label}
        </span>
        <div className="text-sm font-medium text-gray-800">
          <span dangerouslySetInnerHTML={{ __html: item.info }}></span>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">About</h3>
      </div>
      <div className="card-body">
        <div className="flex flex-col gap-3.5 mb-3.5">
          {items.map((item, index) => {
            return renderItems(item, index);
          })}
        </div>

        <p className="text-sm font-medium text-gray-700 leading-5.5 mb-2.5">
          Experienced and creative professional with a passion great as a commitment to best
          excellence.
        </p>
      </div>
    </div>
  );
};

export { NFTAbout };
