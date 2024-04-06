import clsx from 'clsx';

import { IPlainOpenToWorkProps } from './interfaces';

const PlainOpenToWork = ({ className, title, url }: IPlainOpenToWorkProps) => {
  return (
    <div className={clsx(`card ${className && className}`)}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <p className="text-sm text-gray-700 font-medium leading-5.5">
          Seasoned UI/UX designer with a flair for user-centric interfaces. Let&apos;s create
          something amazing together!
        </p>
      </div>

      <div className="card-footer justify-center lg:pb-9">
        <a href={url} className="btn btn-link">
          View details
        </a>
      </div>
    </div>
  );
};

export default  PlainOpenToWork ;
