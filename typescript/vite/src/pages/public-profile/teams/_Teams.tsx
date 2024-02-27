import { KeenIcon } from '@/components';
import { Team, TeamRow } from '@/partials/cards';

import { ITeamsItem, ITeamsItems } from './interfaces';

const Teams = () => {
  const items: ITeamsItems = [
    {
      icon: 'ghost',
      title: 'Pixel Crafters',
      description: 'Crafting digital experiences for the world',
      labels: ['Ul', 'DevOps'],
      team: {
        group: [
          { filename: '300-9.jpg', variant: 'size-7' },
          { filename: '300-2.jpg', variant: 'size-7' },
          { filename: '300-1.jpg', variant: 'size-7' }
        ],
        more: {
          number: 10,
          variant: 'text-success-inverse ring-success-light bg-success size-7'
        }
      },
      connected: true,
      rating: { value: 5, round: 0 }
    },
    {
      icon: 'abstract-22',
      title: 'Code Masters',
      description: 'Coding the future, one line at a time',
      labels: ['Dev', 'Al', 'Cloud'],
      team: {
        group: [
          { filename: '300-6.jpg', variant: 'size-7' },
          { filename: '300-10.jpg', variant: 'size-7' },
          { filename: '300-13.jpg', variant: 'size-7' }
        ]
      },
      connected: true,
      rating: { value: 5, round: 0 }
    },
    {
      icon: 'abstract-39',
      title: 'Market Mavericks',
      description: 'Navigating markets with strategic solutions',
      labels: ['Marketing', 'Brand'],
      team: {
        group: [
          { filename: '300-4.jpg', variant: 'size-7' },
          { filename: '300-5.jpg', variant: 'size-7' },
          { filename: '300-6.jpg', variant: 'size-7' },
          {
            fallback: 'S',
            variant: 'text-primary-inverse size-7 ring-primary-light bg-primary'
          }
        ]
      },
      connected: false,
      rating: { value: 4, round: 0.5 }
    },
    {
      icon: 'shield-slash',
      title: 'Data Dynamo',
      description: 'Transforming data into actionable insights',
      labels: ['Analytics', 'Data'],
      team: {
        group: [
          { filename: '300-4.jpg', variant: 'size-7' },
          { filename: '300-7.jpg', variant: 'size-7' }
        ],
        className: 'lg:justify-end'
      },
      connected: true,
      rating: { value: 4, round: 0.5 }
    },
    {
      icon: 'chart-line-star',
      title: 'Market Mavericks',
      description: 'Navigating markets with strategic solutions',
      labels: ['Marketing', 'Brand'],
      team: {
        group: [
          { filename: '300-11.jpg', variant: 'size-7' },
          { filename: '300-12.jpg', variant: 'size-7' },
          { filename: '300-14.jpg', variant: 'size-7' },
          {
            fallback: 'A',
            variant: 'text-primary-inverse size-7 ring-primary-light bg-primary'
          }
        ]
      },
      connected: false,
      rating: { value: 5, round: 0 }
    },
    {
      icon: 'message-programming',
      title: 'Code Masters',
      description: 'Coding the future, one line at a time',
      labels: ['Dev', 'Al', 'Cloud'],
      team: {
        group: [
          { filename: '300-16.jpg', variant: 'size-7' },
          { filename: '300-15.jpg', variant: 'size-7' },
          { filename: '300-17.jpg', variant: 'size-7' },
          { filename: '300-20.jpg', variant: 'size-7' }
        ]
      },
      connected: true,
      rating: { value: 3, round: 0 }
    },
    {
      icon: 'nexo',
      title: 'Fusion Thinkers',
      description: 'Merging strategy for impactful results',
      labels: ['Creative', 'Strat'],
      team: {
        group: [
          { filename: '300-21.jpg', variant: 'size-7' },
          { filename: '300-23.jpg', variant: 'size-7' },
          { filename: '300-25.jpg', variant: 'size-7' }
        ],
        more: {
          number: 10,
          variant: 'text-success-inverse ring-success-light bg-success size-7'
        }
      },
      connected: false,
      rating: { value: 5, round: 0 }
    },
    {
      icon: 'abstract-44',
      title: ' Spark Surge',
      description: ' Igniting ideas into powerful solutions',
      labels: ['Innovation', 'Tech'],
      team: {
        group: [
          { filename: '300-7.jpg', variant: 'size-7' },
          { filename: '300-3.jpg', variant: 'size-7' },
          { filename: '300-12.jpg', variant: 'size-7' },
          { filename: '300-19.jpg', variant: 'size-7' }
        ]
      },
      connected: true,
      rating: { value: 2, round: 0.5 }
    },
    {
      icon: 'abstract-25',
      title: 'Quantum Craft',
      description: 'Infusing concepts into cutting-edge tech',
      labels: ['Marketing', 'Brand'],
      team: {
        group: [
          { filename: '300-22.jpg', variant: 'size-7' },
          { filename: '300-24.jpg', variant: 'size-7' },
          { filename: '300-29.jpg', variant: 'size-7' },
          {
            fallback: 'K',
            variant: 'text-info-inverse size-7 ring-info-light bg-info'
          }
        ]
      },
      connected: false,
      rating: { value: 4, round: 0 }
    }
  ];

  const renderItem = (item: ITeamsItem) => {
    return (
      <>
        <Team
          icon={item.icon}
          title={item.title}
          description={item.description}
          labels={item.labels}
          team={item.team}
          connected={item.connected}
          rating={item.rating}
        />
      </>
    );
  };

  const renderData = (data: ITeamsItem) => {
    return (
      <>
        <TeamRow
          icon={data.icon}
          title={data.title}
          description={data.description}
          labels={data.labels}
          team={data.team}
          connected={data.connected}
          rating={data.rating}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-gray-800 font-semibold">{items.length} Teams</h3>

        <div className="btn-group" data-tabs="true">
          <a href="#" className="btn btn-icon btn-sm active" data-tab-toggle="#teams_cards">
            <KeenIcon icon="category" />
          </a>
          <a href="#" className="btn btn-icon btn-sm" data-tab-toggle="#teams_list">
            <KeenIcon icon="row-horizontal" />
          </a>
        </div>
      </div>

      <div id="teams_cards">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
          {items.map((item, index) => {
            return renderItem(item);
          })}
        </div>

        <div className="flex grow justify-center pt-5 lg:pt-7.5">
          <a href="#" className="btn btn-link">
            Show more Teams
          </a>
        </div>
      </div>

      <div className="hidden" id="teams_list">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          {items.map((data, index) => {
            return renderData(data);
          })}
        </div>

        <div className="flex grow justify-center pt-5 lg:pt-7.5">
          <a href="#" className="btn btn-link">
            Show more Teams
          </a>
        </div>
      </div>
    </div>
  );
};

export { Teams };
