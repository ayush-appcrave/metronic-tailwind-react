import { CompanyNetwork } from '../company';
import { ICompanyNetworkItems } from '../company/interfaces';
import { CreatorUsers } from '../creator';
import { ICreatorUsersItems } from '../creator/interfaces';
import { DefaultCommunityBadges } from '../default';
import {
  GamerAbout,
  GamerActivity,
  GamerFavoriteGames,
  GamerNowPlaying,
  GamerStatistics,
  GamerTournaments
} from '.';
import { IGamerStatisticsItems } from './interfaces';

const GamerContent = () => {
  const details: IGamerStatisticsItems = [
    { image: 'gamer-online-game.png', number: '164', label: 'Tournaments' },
    { image: 'gamer-online-game.png', number: '73.2%', label: 'Game Win-rate' },
    { image: 'gamer-online-game.png', number: '257', label: 'Duels Played' },
    { image: 'gamer-online-game.png', number: '19', label: 'Trophies' }
  ];

  const items: ICreatorUsersItems = [
    { image: '300-11.jpg' },
    { image: '300-2.jpg' },
    { image: '300-1.jpg' },
    { image: '300-3.jpg' },
    { image: '300-20.jpg' },
    { image: '300-4.jpg' },
    { image: '300-15.jpg' },
    { image: '300-13.jpg' },
    { image: '300-10.jpg' }
  ];

  const data: ICompanyNetworkItems = [
    { icon: 'dribbble', link: 'jennynft' },
    { icon: 'facebook', link: 'nftmania' },
    { icon: 'twitter', link: 'jennynft' },
    { icon: 'youtube', link: 'jennyklabber' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1 lg:col-span-3">
        <GamerStatistics details={details} />
      </div>

      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <GamerFavoriteGames />
          <GamerAbout />
          <DefaultCommunityBadges />
          <CreatorUsers title="Floyd’s Team" url="#" items={items} />
          <CompanyNetwork title="Network" data={data} />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <GamerTournaments url="#" />
            <GamerNowPlaying url="#" />
            <GamerActivity url="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { GamerContent };
