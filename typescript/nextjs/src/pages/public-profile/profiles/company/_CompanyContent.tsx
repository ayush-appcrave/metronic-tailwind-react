import { DefaultConnections, DefaultContributions, DefaultProjects, DefaultTags } from '../default';
import {
  CompanyHighlights,
  CompanyLocations,
  CompanyNetwork,
  CompanyOpenJobs,
  CompanyStatistics
} from '.';
import { ICompanyNetworkItems, ICompanyStatisticsItems } from './types';

const CompanyContent = () => {
  const items: ICompanyStatisticsItems = [
    { number: '624', label: 'Employees' },
    { number: '60.7M', label: 'Users' },
    { number: '369M', label: 'Revenue' },
    { number: '27', label: 'Company Rank' }
  ];

  const data: ICompanyNetworkItems = [
    { icon: 'dribbble', link: 'https://duolingo.com' },
    { icon: 'sms', link: 'info@duolingo.com' },
    { icon: 'facebook', link: 'duolingo' },
    { icon: 'twitter', link: 'duolingo-news' },
    { icon: 'youtube', link: 'duolingo-tuts' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1 lg:col-span-3">
        <CompanyStatistics items={items} />
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <CompanyHighlights />
          <CompanyOpenJobs />
          <CompanyNetwork title="Network" data={data} />
          <DefaultTags title="Tags" />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <CompanyLocations />
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

export default  CompanyContent ;
