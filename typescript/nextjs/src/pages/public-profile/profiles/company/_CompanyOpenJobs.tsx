import { KeenIcon } from '@/components';

import { ICompanyOpenJobsItem, ICompanyOpenJobsItems, ICompanyOpenJobsProps } from './interfaces';

const CompanyOpenJobs = ({ url }: ICompanyOpenJobsProps) => {
  const items: ICompanyOpenJobsItems = [
    {
      icon: 'chart-line-star',
      link: 'Data Science',
      desc: 'Data Science Ninja',
      price: '$80,000 - $110,000'
    },
    {
      icon: 'rocket',
      link: 'Exploration',
      desc: 'Galactic Guide Writer',
      price: '$45,000 - $60,000'
    },
    {
      icon: 'milk',
      link: 'Drinking Arts',
      desc: 'Taste',
      price: '$40,000 - $55,000'
    },
    {
      icon: 'abstract-44',
      link: 'Film Production',
      desc: 'Zombie Makeup Artist',
      price: ' $55,000 - $75,000'
    }
  ];

  const renderItems = (item: ICompanyOpenJobsItem) => {
    return (
      <>
        <div className="flex align-start gap-3.5">
          <div className="flex items-center justify-center w-[1.875rem] h-[1.875rem] bg-gray-100 rounded-lg border border-gray-300">
            <KeenIcon icon={item.icon} className="text-base text-gray-600" />
          </div>
          <div className="flex flex-col">
            <a
              href="#"
              className="text-sm font-semibold leading-none text-primary hover:text-primary-active mb-1"
            >
              {item.link}
            </a>
            <span className="text-sm font-medium text-gray-700">{item.desc}</span>
            <span className="text-xs font-medium text-gray-500">{item.price}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Open Jobs</h3>
      </div>

      <div className="card-body">
        <div className="grid gap-5">
          {items.map((item, index) => {
            return renderItems(item);
          })}
        </div>
      </div>

      <div className="card-footer justify-center">
        <a href={url} className="btn btn-link">
          View & Apply
        </a>
      </div>
    </div>
  );
};

export { CompanyOpenJobs };
