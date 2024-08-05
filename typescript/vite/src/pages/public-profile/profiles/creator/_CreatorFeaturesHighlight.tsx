import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { ICreatorFeaturesHighlightProps } from './interfaces';

const CreatorFeaturesHighlight = ({
  title,
  description,
  features,
  image,
  more
}: ICreatorFeaturesHighlightProps) => {
  const renderItem = (cell: string, index: number) => {
    return (
      <td key={index} className="py-1 pe-7.5">
        <div className="flex items-center gap-1.5">
          <KeenIcon icon="check-circle" className="text-base text-success" />
          <span className="text-sm font-medium text-gray-800">{cell}</span>
        </div>
      </td>
    );
  };

  return (
    <div className="card">
      <div className="card-body px-10 py-7.5 lg:pr-12.5">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-10 p-2.5">
          <div className="flex flex-col items-start gap-3 md:max-w-[60%]">
            <h2
              className="text-1.5xl font-semibold text-gray-900"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>

            <p className="text-sm text-gray-700 leading-5.5 mb-2.5">{description}</p>

            <table>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index}>
                    {feature.map((cell, index) => {
                      return renderItem(cell, index);
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="shrink-0">
            <img src={toAbsoluteUrl(`${image}`)} className="max-h-[200px]" alt="" />
          </div>
        </div>
      </div>

      <div className="card-footer justify-center">
        <a href={more.url} className="btn btn-link">
          {more.title}
        </a>
      </div>
    </div>
  );
};

export { CreatorFeaturesHighlight };
