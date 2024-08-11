import { TimelinesWrapper } from '@/partials/timelines/default/item';

import { IBloggingConferenceProps } from './interfaces';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/utils';

const BloggingConference = ({ heading, datetime, image, title }: IBloggingConferenceProps) => {
  return (
    <TimelinesWrapper icon="directbox-default" line={true}>
      <div className="flex flex-col pb-2.5">
        <span className="text-sm font-medium text-gray-800">
          {heading ?? 'Attending the virtual blogging conference was an enriching experience'}
        </span>

        <span className="text-xs font-medium text-gray-500">
          {datetime ?? '2 days ago, 4:07 PM'}
        </span>
      </div>

      <div className="card shadow-none">
        <div className="card-body lg:py-4">
          <div className="flex justify-center py-4">
            {image ? (
              <>
                <img
                  src={toAbsoluteUrl('/media/illustrations/28.svg')}
                  className="dark:hidden max-h-[160px]"
                  alt=""
                />
                <img
                  src={toAbsoluteUrl('/media/illustrations/28-dark.svg')}
                  className="light:hidden max-h-[160px]"
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  src={toAbsoluteUrl('/media/illustrations/3.svg')}
                  className="dark:hidden max-h-[160px]"
                  alt=""
                />
                <img
                  src={toAbsoluteUrl('/media/illustrations/3-dark.svg')}
                  className="light:hidden max-h-[160px]"
                  alt=""
                />
              </>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-md font-semibold text-gray-900 text-center">
              {title ?? 'Blogging Conference'}
            </div>

            <div className="flex items-center justify-center gap-1">
              <Link to="/public-profile/profiles/company" className="text-2sm font-semibold link">
                Axio new release
              </Link>
              <span className="text-2sm font-medium text-gray-600 mr-2">email campaign</span>
              <span className="badge badge-sm badge-success badge-outline">Public</span>
            </div>
          </div>
        </div>
      </div>
    </TimelinesWrapper>
  );
};

export { BloggingConference };
