const BloggerCollaborate = ({
  title,
  url
}) => {
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <p className="text-sm font-medium text-gray-700 leading-5.5">
          Experienced UI/UX designer seeking new opportunities.
        </p>
      </div>

      <div className="card-footer justify-center">
        <a href={url} className="btn btn-link">
          View details
        </a>
      </div>
    </div>;
};
export { BloggerCollaborate };