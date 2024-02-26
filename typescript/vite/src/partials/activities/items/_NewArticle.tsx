const NewArticle = () => {
  return (
    <div className="flex flex-col">
      <div className="text-sm font-medium text-gray-800">
        Posted a new article
        <a href="#" className="text-sm font-medium text-primary hover:text-primary-active">
          Top 10 Tech Trends
        </a>
      </div>
      <span className="text-xs font-medium text-gray-500">Today, 9:00 AM</span>
    </div>
  );
};

export { NewArticle };
