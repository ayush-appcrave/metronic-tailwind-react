import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';
const CreatorFeaturesHighlight = ({
  title,
  description,
  features,
  image,
  more
}) => {
  const renderItem = feature => {
    return <>
        <div className="flex items-center gap-1.5">
          <KeenIcon icon="check-circle" className="text-base text-success" />
          <span className="text-sm font-medium text-gray-800">{feature}</span>
        </div>
      </>;
  };
  return <div className="card">
      <div className="card-body">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-1.5xl font-semibold text-gray-900">{title}</h2>

            <p className="text-sm font-medium text-gray-700 leading-5.5 mb-2.5">{description}</p>

            <div className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-1.5">
              {features.map((feature, index) => {
              return renderItem(feature);
            })}
            </div>
          </div>
          <img src={toAbsoluteUrl(`${image}`)} className="max-h-[200px]" />
        </div>
      </div>

      <div className="card-footer justify-center">
        <a href={more.url} className="btn btn-link">
          {more.title}
        </a>
      </div>
    </div>;
};
export { CreatorFeaturesHighlight };