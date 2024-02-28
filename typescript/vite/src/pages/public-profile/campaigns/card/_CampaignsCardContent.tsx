import { KeenIcon } from '@/components';
import { Campaign, CampaignRow } from '@/partials/cards';

import {
  ICampaignsCardContentItem,
  ICampaignsCardContentItems,
  ICampaignsCardContentProps
} from './interfaces';

const CampaignsCardContent = ({ mode }: ICampaignsCardContentProps) => {
  const items: ICampaignsCardContentItems = [
    {
      logo: 'jira.png',
      title: 'Urban Dreams',
      description: 'Live Gaming Spectacle Unveiled',
      status: {
        variant: 'badge-success',
        label: 'Completed'
      },
      statistics: [
        {
          total: '50.7%',
          description: 'Traffic Up'
        },
        {
          total: '20.1k',
          description: 'New Fans'
        },
        {
          total: '$100k',
          description: 'Donated'
        }
      ],
      progress: {
        variant: 'progress-success',
        value: 100
      }
    },
    {
      logo: 'jira.png',
      title: 'Photo Promotion',
      description: 'Visual Stories Unleashed Worldwide',
      status: {
        variant: 'badge-primary',
        label: 'Running'
      },
      statistics: [
        {
          total: '25k',
          description: 'Link Hits'
        },
        {
          total: '32.9%',
          description: 'Engage Uptick'
        },
        {
          total: '$7,5k',
          description: 'Earnings'
        }
      ],
      progress: {
        variant: 'progress-primary',
        value: 60
      }
    },
    {
      logo: 'jira.png',
      title: 'Video Viral',
      description: 'Video Content Showcase Spotlighted',
      status: {
        variant: 'badge-primary',
        label: 'Running'
      },
      statistics: [
        {
          total: '12M',
          description: 'Video Plays'
        },
        {
          total: '40%',
          description: 'Sub Gain'
        },
        {
          total: '25k',
          description: 'Link Hits'
        }
      ],
      progress: {
        variant: 'progress-primary',
        value: 55
      }
    },
    {
      logo: 'jira.png',
      title: 'Product Push',
      description: 'Prime Shopping Bliss Delivered',
      status: {
        variant: 'badge-success',
        label: 'Completed'
      },
      statistics: [
        {
          total: '50%',
          description: 'Traffic Rise'
        },
        {
          total: '$34,9k',
          description: 'Product Sales'
        },
        {
          total: '10k',
          description: 'Actions'
        }
      ],
      progress: {
        variant: 'progress-success',
        value: 100
      }
    },
    {
      logo: 'jira.png',
      title: 'Email Engagement',
      description: 'Email Engagement Power Unleashed',
      status: {
        variant: '',
        label: 'Upcoming'
      },
      statistics: [
        {
          total: '24.3k',
          description: 'Subscribers'
        },
        {
          total: '34.8%',
          description: 'Traffic Rise'
        },
        {
          total: '$20,5k',
          description: 'Total Sales'
        }
      ],
      progress: {
        variant: 'progress-gray-300',
        value: 100
      }
    },
    {
      logo: 'jira.png',
      title: 'Career Boost',
      description: 'Pro Connections Empowered Globally',
      status: {
        variant: 'badge-success',
        label: 'Completed'
      },
      statistics: [
        {
          total: '9.1k',
          description: 'Suvey Inputs'
        },
        {
          total: '834',
          description: 'Influencer Tie-ins'
        },
        {
          total: '70k',
          description: 'Impressions'
        }
      ],
      progress: {
        variant: 'progress-primary',
        value: 30
      }
    }
  ];

  const renderProject = (item: ICampaignsCardContentItem) => {
    return (
      <>
        <Campaign
          logo={item.logo}
          title={item.title}
          description={item.description}
          status={item.status}
          statistics={item.statistics}
          progress={item.progress}
          url="#"
        />
      </>
    );
  };

  const renderItem = (data: ICampaignsCardContentItem) => {
    return (
      <>
        <CampaignRow
          logo={data.logo}
          title={data.title}
          description={data.description}
          status={data.status}
          statistics={data.statistics}
          url="#"
        />
      </>
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-gray-800 font-semibold">{items.length} Campaigns</h3>

        <div className="btn-group" data-tabs="true">
          <a
            href="#"
            className={`btn btn-icon btn-sm ${mode === 'card' ? 'active' : ''}`}
            data-tab-toggle="#campaigns_cards"
          >
            <KeenIcon icon="category" />
          </a>
          <a
            href="#"
            className={`btn btn-icon btn-sm ${mode === 'list' ? 'active' : ''}`}
            data-tab-toggle="#campaigns_list"
          >
            <KeenIcon icon="row-horizontal" />
          </a>
        </div>
      </div>

      <div id="campaigns_cards" className={mode === 'list' ? 'hidden' : ''}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
          {items.map((item, index) => {
            return renderProject(item);
          })}
        </div>

        <div className="flex grow justify-center pt-5 lg:pt-7.5">
          <a href="#" className="btn btn-link">
            Show more Campaigns
          </a>
        </div>
      </div>

      <div className={mode === 'card' ? 'hidden' : ''} id="campaigns_list">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          {items.map((data, index) => {
            return renderItem(data);
          })}
        </div>

        <div className="flex grow justify-center pt-5 lg:pt-7.5">
          <a href="#" className="btn btn-link">
            Show more Campaigns
          </a>
        </div>
      </div>
    </div>
  );
};

export { CampaignsCardContent };
