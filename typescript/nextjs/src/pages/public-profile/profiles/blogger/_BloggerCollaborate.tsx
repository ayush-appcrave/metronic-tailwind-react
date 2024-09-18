import Link from 'next/link';
import { IBloggerCollaborateProps } from './types';

const BloggerCollaborate = ({ title }: IBloggerCollaborateProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <p className="text-sm font-medium text-gray-700 leading-5.5">
          Experienced UI/UX designer seeking new opportunities.
        </p>
      </div>

      <div className="card-footer justify-center">
        <Link to="/public-profile/works" className="btn btn-link">
          View details
        </Link>
      </div>
    </div>
  );
};

export default  BloggerCollaborate ;
