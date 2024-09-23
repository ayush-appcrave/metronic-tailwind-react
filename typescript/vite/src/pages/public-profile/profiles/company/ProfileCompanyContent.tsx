import { DefaultConnections, DefaultContributions, DefaultProjects, DefaultTags } from '../default';
import {
  ProfileCompanyHighlightsBlock,
  ProfileCompanyLocationsBlock,
  ProfileCompanyNetworkBlock,
  IProfileCompanyNetworkItems,
  ProfileCompanyOpenJobsBlock,
  ProfileCompanyProfileBlock,
  ProfileCompanyStatisticsBlock,
  IProfileCompanyStatisticsItems
} from './blocks';

const ProfileCompanyContent = () => {
  const items: IProfileCompanyStatisticsItems = [
    { number: '624', label: 'Employees' },
    { number: '60.7M', label: 'Users' },
    { number: '369M', label: 'Revenue' },
    { number: '27', label: 'ProfileCompany Rank' }
  ];

  const data: IProfileCompanyNetworkItems = [
    { icon: 'dribbble', link: 'https://duolingo.com' },
    { icon: 'sms', link: 'info@duolingo.com' },
    { icon: 'facebook', link: 'duolingo' },
    { icon: 'twitter', link: 'duolingo-news' },
    { icon: 'youtube', link: 'duolingo-tuts' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1 lg:col-span-3">
        <ProfileCompanyStatisticsBlock items={items} />
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <ProfileCompanyHighlightsBlock />
          <ProfileCompanyOpenJobsBlock />
          <ProfileCompanyNetworkBlock title="Network" data={data} />
          <DefaultTags title="Tags" />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <ProfileCompanyProfileBlock />
          <ProfileCompanyLocationsBlock />
          <DefaultProjects />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            <DefaultConnections title="Members" />
            <DefaultContributions title="Investments" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileCompanyContent };
