import { Tournament } from '@/partials/cards';
const GamerTournaments = ({
  url
}) => {
  const items = [{
    image: '11.jpg',
    logo: 'gamer-online-game.png',
    title: 'CyberStorm Cup',
    time: 'WED, FEB 16, 12:30 CET',
    labels: ['CS 2', 'PUBG', 'RAID', 'COD', 'Fortnite'],
    progress: {
      variant: 'progress-primary',
      value: 80,
      slotNumber: 76,
      leftNumber: 9
    }
  }, {
    image: '11.jpg',
    logo: 'gamer-online-game.png',
    title: 'PixelPulse Showdown',
    time: 'MON, MAR 2, 16:00 CET',
    labels: ['TERA', 'MK11', 'PUBG', 'HOTS', 'R6'],
    progress: {
      variant: 'progress-primary',
      value: 20,
      slotNumber: 520,
      leftNumber: 27
    }
  }, {
    image: '11.jpg',
    logo: 'gamer-online-game.png',
    title: 'NexusRift Masters',
    time: 'SUN, APR 29, 11:00 CET',
    labels: ['HS', 'Valorant', 'Dota 2', 'PUBG', 'COD'],
    progress: {
      variant: 'progress-primary',
      value: 42,
      slotNumber: 18,
      leftNumber: 21
    }
  }, {
    image: '11.jpg',
    logo: 'gamer-online-game.png',
    title: 'CyberStorm Cup',
    time: 'WED, FEB 16, 12:30 CET',
    labels: ['CS 2', 'PUBG', 'RAID', 'COD', 'Fortnite'],
    progress: {
      variant: 'progress-primary',
      value: 80,
      slotNumber: 98,
      leftNumber: 44
    }
  }, {
    image: '11.jpg',
    logo: 'gamer-online-game.png',
    title: 'PixelPulse Showdown',
    time: 'MON, MAR 2, 16:00 CET',
    labels: ['TERA', 'MK11', 'PUBG', 'HOTS', 'R6'],
    progress: {
      variant: 'progress-primary',
      value: 60,
      slotNumber: 324,
      leftNumber: 15
    }
  }];
  const renderItem = item => {
    return <>
        <Tournament image={item.image} logo={item.logo} title={item.title} time={item.time} labels={item.labels} progress={item.progress} />
      </>;
  };
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">Floyd’s Tournaments</h3>

        <div className="justify-center">
          <a href={url} className="btn btn-link">
            View All
          </a>
        </div>
      </div>
      <div className="card-body">
        <div className="flex flex-no-wrap scrollable-x gap-5">
          {items.map((item, index) => {
          return renderItem(item);
        })}
        </div>
      </div>
    </div>;
};
export { GamerTournaments };