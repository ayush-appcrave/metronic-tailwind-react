import clsx from 'clsx';
import { KeenIcon } from '@/components';

interface IProfileCompanyNetworkItem {
  icon: string;
  link: string;
}

interface IProfileCompanyNetworkItems extends Array<IProfileCompanyNetworkItem> {}

interface IProfileCompanyNetworkProps {
  data: IProfileCompanyNetworkItem[];
  title: string;
  className?: string;
}

const ProfileCompanyNetworkBlock = ({ data, className, title }: IProfileCompanyNetworkProps) => {
  const renderItems = (item: IProfileCompanyNetworkItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-2.5">
        <span>
          <KeenIcon icon={item.icon} className="text-lg text-gray-500" />
        </span>
        <a href="#" className="text-gray-800 hover:text-primary-active text-sm font-medium">
          {item.link}
        </a>
      </div>
    );
  };

  return (
    <div className={clsx('card', className && className)}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body pt-4">
        <div className="grid gap-2.5 mb-1">
          {data.map((item, index) => {
            return renderItems(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export { ProfileCompanyNetworkBlock, type IProfileCompanyNetworkItems };
