import { IGamerAboutItem, IGamerAboutItems } from './interfaces';

const GamerAbout = () => {
  const items: IGamerAboutItems = [
    { label: 'Joined:', info: '26 Aug, 2021', type: 1 },
    { label: 'Location:', info: 'Porto, EU', type: 2 },
    { label: 'Level:', info: '<span class="badge badge-sm badge-success badge-outline">Pro</span>' }
  ];

  const renderItem = (item: IGamerAboutItem) => {
    return (
      <>
        <tr>
          <td className="text-sm font-medium text-gray-500 pb-3 pe-4 lg:pe-12">{item.label}</td>
          <td className="text-sm font-medium text-gray-800 pb-3">
            {item.type === 1 ? (
              <span>{item.info}</span>
            ) : item.type === 2 ? (
              <span>{item.info}</span>
            ) : (
              <span dangerouslySetInnerHTML={{ __html: item.info }}></span>
            )}
          </td>
        </tr>
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">About</h3>
      </div>

      <div className="card-body pb-7 pt-4">
        <table className="table-auto mb-1.5">
          <tbody>
            {items.map((item, index) => {
              return renderItem(item);
            })}
          </tbody>
        </table>

        <p className="text-sm text-gray-700 font-medium leading-5.5">
          Experienced and creative professional with a passion great as a commitment to best
          excellence.
        </p>
      </div>
    </div>
  );
};

export { GamerAbout };
