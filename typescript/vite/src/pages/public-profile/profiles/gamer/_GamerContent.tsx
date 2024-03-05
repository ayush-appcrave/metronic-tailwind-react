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
    { image: 'coinhodler.svg', number: '164', label: 'Tournaments' },
    { image: 'gamer-online-game.svg', number: '73.2%', label: 'Game Win-rate' },
    { image: 'gamer-online-game.svg', number: '257', label: 'Duels Played' },
    { image: 'gamer-online-game.svg', number: '19', label: 'Trophies' }
  ];

  const items: ICreatorUsersItems = [
    { image: '300-27.png' },
    { image: '300-1.png' },
    { image: '300-2.png' },
    { image: '300-3.png' },
    { image: '300-5.png' },
    { image: '300-23.png' },
    { image: '300-6.png' },
    { image: '300-11.png' },
    { image: '300-12.png' }
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
