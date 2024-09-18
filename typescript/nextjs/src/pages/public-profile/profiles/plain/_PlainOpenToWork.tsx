import clsx from 'clsx';

import { IPlainOpenToWorkProps } from './types';
import Link from 'next/link';

const PlainOpenToWork = ({ className, title }: IPlainOpenToWorkProps) => {
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
        <Link to="/public-profile/works" className="btn btn-link">
          View details
        </Link>
      </div>
    </div>
  );
};

export default  PlainOpenToWork ;
