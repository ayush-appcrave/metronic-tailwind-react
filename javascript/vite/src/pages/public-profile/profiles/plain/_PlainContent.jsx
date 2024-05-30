import { CompanyNetwork, CompanyStatistics } from '../company';
import { DefaultTags } from '../default';
import { PlainAboutMe, PlainGettingStarted, PlainOpenToWork } from '.';
const PlainContent = () => {
  const items = [{
    number: '249',
    label: 'Connections'
  }, {
    number: '1.2k',
    label: 'Uploads'
  }, {
    number: '1M+',
    label: 'Gross Sales'
  }, {
    number: '27',
    label: 'Author Rank'
  }];
  const data = [{
    icon: 'abstract-41',
    link: 'KeenThemes'
  }, {
    icon: 'crown-2',
    link: 'Author Level 100'
  }, {
    icon: 'briefcase',
    link: 'UI/UX Desiger'
  }, {
    icon: 'sms',
    link: 'jenny@kteam.com'
  }, {
    icon: 'icon',
    link: 'https://keenthemes.com'
  }, {
    icon: 'facebook',
    link: 'keenthemes'
  }];
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <CompanyStatistics items={items} />
      </div>
      <div className="col-span-2">
        <PlainGettingStarted />
      </div>
      <div className="col-span-1 flex">
        <CompanyNetwork className="pb-3 grow" title="Profile" data={data} />
      </div>
      <div className="col-span-1 flex">
        <PlainAboutMe className="grow" />
      </div>
      <div className="col-span-1 flex">
        <PlainOpenToWork className="grow" title="Open to work" url="#" />
      </div>
      <div className="col-span-1 flex">
        <DefaultTags title="Skills" className="grow" />
      </div>
    </div>;
};
export { PlainContent };