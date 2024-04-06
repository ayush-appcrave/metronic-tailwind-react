import { KeenIcon } from '@/components';

import { ICreatorSummaryItem, ICreatorSummaryItems, ICreatorSummaryProps } from './interfaces';

const CreatorSummary = ({ title }: ICreatorSummaryProps) => {
  const items: ICreatorSummaryItems = [
    { icon: 'abstract-41', info: 'KeenThemes' },
    { icon: 'crown-2', info: 'Author' },
    { icon: 'briefcase', info: 'UI/UX Desiger' },
    { icon: 'sms', info: 'enny@kteam.com' },
    { icon: 'abstract-39', info: 'https://keenthemes.com' },
    { icon: 'facebook', info: 'keenthemes' },
    { icon: 'youtube', info: 'keenthemes' }
  ];

  const renderItem = (item: ICreatorSummaryItem) => {
    return (
      <>
        <div className="flex items-center gap-2.5">
          <KeenIcon icon={item.icon} className="text-base text-gray-500" />
          <a
            href="#"
            className="text-sm font-medium leading-none text-gray-800 hover:text-primary-active"
          >
            {item.info}
          </a>
        </div>
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>

      <div className="card-body">
        <p className="text-sm font-medium text-gray-700 leading-5.5 mb-4">
          Experienced and creative professional with a passion great as for problem-solving and a
          commitment to excellence.
        </p>

        <div className="grid gap-y-3.5">
          {items.map((item, index) => {
            return renderItem(item);
          })}
        </div>
      </div>
    </div>
  );
};

export default  CreatorSummary ;
