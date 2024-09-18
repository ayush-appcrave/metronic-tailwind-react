import { KeenIcon } from '@/components';
import { Link } from 'react-router-dom';
const CreatorFeaturesHighlight = ({
  title,
  description,
  features,
  image,
  more
}) => {
  const renderItem = (cell, index) => {
    return <div key={index} className="flex items-center gap-1.5 pe-7.5">
        <KeenIcon icon="check-circle" className="text-base text-success" />
        <span className="text-sm text-gray-900 text-nowrap">{cell}</span>
      </div>;
  };
  return <div className="card">
      <div className="card-body px-10 py-7.5 lg:pr-12.5">
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-between gap-6 md:gap-10 p-2.5">
          <div className="flex flex-col items-start gap-3 md:max-w-[60%]">
            <h2 className="text-1.5xl font-semibold text-gray-900" dangerouslySetInnerHTML={{
            __html: title
          }}></h2>

            <p className="text-sm font-normal  text-gray-700 leading-5.5 mb-2.5">{description}</p>

            <div className="grid md:grid-cols-2 gap-2">
              {features.map((feature, index) => <div key={index}>
                  {feature.map((cell, index) => {
                return renderItem(cell, index);
              })}
                </div>)}
            </div>
          </div>

          <div className="shrink-0">{image}</div>
        </div>
      </div>

      <div className="card-footer justify-center">
        <Link to={more.url} className="btn btn-link">
          {more.title}
        </Link>
      </div>
    </div>;
};
export { CreatorFeaturesHighlight };