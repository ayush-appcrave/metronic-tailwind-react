import { DefaultConnections, DefaultContributions, DefaultProjects, DefaultTags } from '../default';
import { CompanyHighlights, CompanyLocations, CompanyNetwork, CompanyOpenJobs, CompanyProfle, CompanyStatistics } from '.';
const CompanyContent = () => {
  const items = [{
    number: '624',
    label: 'Employees'
  }, {
    number: '60.7M',
    label: 'Users'
  }, {
    number: '369M',
    label: 'Revenue'
  }, {
    number: '27',
    label: 'Company Rank'
  }];
  const data = [{
    icon: 'dribbble',
    link: 'https://duolingo.com'
  }, {
    icon: 'sms',
    link: 'info@duolingo.com'
  }, {
    icon: 'facebook',
    link: 'duolingo'
  }, {
    icon: 'twitter',
    link: 'duolingo-news'
  }, {
    icon: 'youtube',
    link: 'duolingo-tuts'
  }];
  return <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1 lg:col-span-3">
        <CompanyStatistics items={items} />
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <CompanyHighlights />
          <CompanyOpenJobs url="#" />
          <CompanyNetwork title="Network" data={data} />
          <DefaultTags title="Tags" />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <CompanyProfle />
          <CompanyLocations />
          <DefaultProjects />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            <DefaultConnections title="Members" url="#" />
            <DefaultContributions title="Investments" />
          </div>
        </div>
      </div>
    </div>;
};
export { CompanyContent };