import { toAbsoluteUrl } from '@/utils/Assets';

import { IGamerFavoriteGamesItem, IGamerFavoriteGamesItems } from './interfaces';

const GamerFavoriteGames = () => {
  const items: IGamerFavoriteGamesItems = [
    { image: '300-310.png' },
    { image: '300-310.png' },
    { image: '300-310.png' },
    { image: '300-310.png' },
    { image: '300-310.png' },
    { image: '300-310.png' },
    { image: '300-310.png' },
    { image: '300-310.png' }
  ];

  const renderItem = (item: IGamerFavoriteGamesItem) => {
    return (
      <>
        <img
          src={toAbsoluteUrl(`/images/content/logos/${item.image}`)}
          className="rounded-xl w-11 h-11"
          alt=""
        />
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Favorite Games</h3>
      </div>

      <div className="card-body">
        <div className="flex flex-wrap gap-2.5 xl:mr-14 mb-1.5">
          {items.map((item, index) => {
            return renderItem(item);
          })}
        </div>
      </div>
    </div>
  );
};

export default  GamerFavoriteGames ;
