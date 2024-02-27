import { KeenIcon } from '@/components';
import { Connection, ConnectionRow } from '@/partials/cards';

import { INetworkItem, INetworkItems } from './interfaces';

const Network = () => {
  const items: INetworkItems = [
    {
      name: 'Jenny Klabber',
      info: 'Pinnacle Innovate',
      avatar: {
        className: 'size-20 relative',
        image: '300-2.jpg',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-success rounded-full absolute bottom-0.5 left-16 transform -translate-y-1/2'
      },
      email: 'kevin@pinnacle.com',
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
      statistics: [
        {
          total: '92',
          description: 'Purchases'
        },
        {
          total: '$69',
          description: 'Avg. Price'
        },
        {
          total: '$6,240',
          description: 'Total spent'
        }
      ],
      connected: true
    },
    {
      name: 'Sarah Johnson',
      info: 'InnovateX',
      avatar: {
        className:
          'flex items-center justify-center relative text-2.5xl text-info size-20 ring-1 ring-info bg-info-light rounded-full',
        fallback: 'S',
        badgeClass:
          'flex size-2.5 bg-success rounded-full absolute bottom-0.5 left-16 transform -translate-y-1/2'
      },
      email: 'sarahj@innx.com',
      team: {
        group: [
          { filename: '300-24.jpg', variant: 'size-7' },
          { filename: '300-15.jpg', variant: 'size-7' },
          { filename: '300-22.jpg', variant: 'size-7' },
          { filename: '300-13.jpg', variant: 'size-7' }
        ]
      },
      statistics: [
        {
          total: '123',
          description: 'Purchases'
        },
        {
          total: '$30',
          description: 'Avg. Price'
        },
        {
          total: '$3,713',
          description: 'Total spent'
        }
      ],
      connected: false
    },
    {
      name: 'Kevin Wang',
      info: 'Pinnacle Innovate',
      avatar: {
        className:
          'flex items-center justify-center relative text-2.5xl text-danger size-20 ring-1 ring-danger bg-danger-light rounded-full',
        fallback: 'K',
        badgeClass:
          'flex size-2.5 bg-success rounded-full absolute bottom-0.5 left-16 transform -translate-y-1/2'
      },
      email: 'kevin@pinnacle.com',
      team: {
        group: [
          { filename: '300-7.jpg', variant: 'size-7' },
          { filename: '300-5.jpg', variant: 'size-7' },
          { filename: '300-4.jpg', variant: 'size-7' },
          { filename: '300-11.jpg', variant: 'size-7' }
        ]
      },
      statistics: [
        {
          total: '30',
          description: 'Purchases'
        },
        {
          total: '$150',
          description: 'Avg. Price'
        },
        {
          total: '$4,500',
          description: 'Total spent'
        }
      ],
      connected: true
    },
    {
      name: 'Brian Davis',
      info: 'Vortex Tech',
      avatar: {
        className: 'size-20 relative',
        image: '300-30.jpg',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-success rounded-full absolute bottom-0.5 left-16 transform -translate-y-1/2'
      },
      email: 'brian@vortextech.com',
      team: {
        group: [
          { filename: '300-7.jpg', variant: 'size-7' },
          { filename: '300-3.jpg', variant: 'size-7' },
          { filename: '300-12.jpg', variant: 'size-7' },
          { filename: '300-20.jpg', variant: 'size-7' }
        ]
      },
      statistics: [
        {
          total: '87',
          description: 'Purchases'
        },
        {
          total: '$22',
          description: 'Avg. Price'
        },
        {
          total: '$1958',
          description: 'Total spent'
        }
      ],
      connected: true
    },
    {
      name: 'Megan Taylor',
      info: 'Catalyst',
      avatar: {
        className:
          'flex items-center justify-center relative text-2.5xl text-success size-20 ring-1 ring-success bg-success-light rounded-full',
        fallback: 'M',
        badgeClass:
          'flex size-2.5 bg-gray-400 rounded-full absolute bottom-0.5 left-16 transform -translate-y-1/2'
      },
      email: 'megan@catalyst.com',
      team: {
        group: [
          { filename: '300-14.jpg', variant: 'size-7' },
          { filename: '300-23.jpg', variant: 'size-7' },
          { filename: '300-25.jpg', variant: 'size-7' },
          { filename: '300-2.jpg', variant: 'size-7' }
        ]
      },
      statistics: [
        {
          total: '45',
          description: 'Purchases'
        },
        {
          total: '$300',
          description: 'Avg. Price'
        },
        {
          total: '$13,500',
          description: 'Total spent'
        }
      ],
      connected: false
    },
    {
      name: 'Alex Martinez',
      info: 'Precision Solutions',
      avatar: {
        className: 'size-20 relative',
        image: '300-7.jpg',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-success rounded-full absolute bottom-0.5 left-16 transform -translate-y-1/2'
      },
      email: 'alex@kteam.com',
      team: {
        group: [
          { filename: '300-9.jpg', variant: 'size-7' },
          { filename: '300-12.jpg', variant: 'size-7' },
          { filename: '300-13.jpg', variant: 'size-7' }
        ],
        more: {
          number: 10,
          variant: 'text-success-inverse ring-success-light bg-success size-7'
        }
      },
      statistics: [
        {
          total: '63',
          description: 'Purchases'
        },
        {
          total: '$65',
          description: 'Avg. Price'
        },
        {
          total: '$4,095',
          description: 'Total spent'
        }
      ],
      connected: true
    }
  ];

  const renderItem = (item: INetworkItem) => {
    return (
      <>
        <Connection
          name={item.name}
          info={item.info}
          avatar={item.avatar}
          email={item.email}
          team={item.team}
          statistics={item.statistics}
          connected={item.connected}
        />
      </>
    );
  };

  const renderData = (data: INetworkItem) => {
    return (
      <>
        <ConnectionRow
          name={data.name}
          info={data.info}
          avatar={data.avatar}
          email={data.email}
          team={data.team}
          statistics={data.statistics}
          connected={data.connected}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-gray-800 font-semibold">{items.length} Connections</h3>

        <div className="btn-group" data-tabs="true">
          <a href="#" className="btn btn-icon btn-sm active" data-tab-toggle="#network_cards">
            <KeenIcon icon="category" />
          </a>
          <a href="#" className="btn btn-icon btn-sm" data-tab-toggle="#network_list">
            <KeenIcon icon="row-horizontal" />
          </a>
        </div>
      </div>

      <div id="network_cards">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
          {items.map((item, index) => {
            return renderItem(item);
          })}
        </div>

        <div className="flex grow justify-center pt-5 lg:pt-7.5">
          <a href="#" className="btn btn-link">
            Show more Connections
          </a>
        </div>
      </div>

      <div className="hidden" id="network_list">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          {items.map((data, index) => {
            return renderData(data);
          })}
        </div>

        <div className="flex grow justify-center pt-5 lg:pt-7.5">
          <a href="#" className="btn btn-link">
            Show more Connections
          </a>
        </div>
      </div>
    </div>
  );
};

export { Network };
