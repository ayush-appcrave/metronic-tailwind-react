import { NowPlaying } from '@/partials/cards';

import { IGamerNowPlayingItem, IGamerNowPlayingItems, IGamerNowPlayingProps } from './interfaces';

const GamerNowPlaying = ({ url }: IGamerNowPlayingProps) => {
  const items: IGamerNowPlayingItems = [
    {
      image: '11.jpg',
      logo: 'gamer-online-game.png',
      title: 'Call of Duty',
      date: 'Playing since 6 Aug, 2018',
      statistics: [
        {
          number: '79',
          description: 'Win-rate'
        },
        {
          number: '88/100',
          description: 'Reflex-rate'
        },
        {
          number: '2367',
          description: 'Score'
        }
      ],
      label: 268,
      team: {
        group: [{ filename: '300-9.jpg' }, { filename: '300-2.jpg' }, { filename: '300-1.jpg' }],
        more: {
          number: 7,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
      }
    },
    {
      image: '11.jpg',
      logo: 'gamer-online-game.png',
      title: 'Rocket League',
      date: 'Playing since 18 May, 2015',
      statistics: [
        {
          number: '764',
          description: 'Win-rate'
        },
        {
          number: '9/10',
          description: 'Reflex-rate'
        },
        {
          number: '436',
          description: 'Score'
        }
      ],
      label: 5,
      team: {
        group: [
          { filename: '300-7.jpg' },
          { filename: '300-13.jpg' },
          { filename: '300-17.jpg' },
          { filename: '300-12.jpg' }
        ]
      }
    },
    {
      image: '11.jpg',
      logo: 'gamer-online-game.png',
      title: 'GTA 5',
      date: 'Playing since 24 Dec, 2018',
      statistics: [
        {
          number: '87',
          description: 'Win-rate'
        },
        {
          number: '61/100',
          description: 'Reflex-rate'
        },
        {
          number: '214',
          description: 'Score'
        }
      ],
      label: 12,
      team: {
        group: [{ filename: '300-2.jpg' }, { filename: '300-4.jpg' }, { filename: '300-15.jpg' }],
        more: {
          number: 16,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
      }
    },
    {
      image: '11.jpg',
      logo: 'gamer-online-game.png',
      title: 'CyberStorm Cup',
      date: 'Playing since 12 Sep, 2019',
      statistics: [
        {
          number: '53',
          description: 'Win-rate'
        },
        {
          number: '56/70',
          description: 'Reflex-rate'
        },
        {
          number: '327',
          description: 'Score'
        }
      ],
      label: 45,
      team: {
        group: [{ filename: '300-22.jpg' }, { filename: '300-17.jpg' }, { filename: '300-18.jpg' }],
        more: {
          number: 14,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
      }
    },
    {
      image: '11.jpg',
      logo: 'gamer-online-game.png',
      title: 'Call of Duty',
      date: 'Playing since 23 Nov, 2021',
      statistics: [
        {
          number: '122',
          description: 'Win-rate'
        },
        {
          number: '45/80',
          description: 'Reflex-rate'
        },
        {
          number: '44',
          description: 'Score'
        }
      ],
      label: 374,
      team: {
        group: [{ filename: '300-12.jpg' }, { filename: '300-25.jpg' }, { filename: '300-26.jpg' }],
        more: {
          number: 32,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
      }
    }
  ];

  const renderItem = (item: IGamerNowPlayingItem, index: number) => {
    return (
      <>
        <NowPlaying
          image={item.image}
          logo={item.logo}
          date={item.date}
          statistics={item.statistics}
          team={item.team}
          label={item.label}
          title={item.title}
          key={index}
        />
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Now Playing</h3>

        <div className="justify-center">
          <a href={url} className="btn btn-link">
            View All
          </a>
        </div>
      </div>
      <div className="card-body">
        <div className="flex flex-no-wrap scrollable-x gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export { GamerNowPlaying };
