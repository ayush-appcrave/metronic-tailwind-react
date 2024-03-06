import { KeenIcon } from '@/components';
import { Avatars } from '@/partials/common';
import { IAvatarsItems } from '@/partials/common/interfaces';
import { TimelinesWrapper } from '@/partials/timelines/default/item';

import { IProductWebinarProps } from './interfaces';

const ProductWebinar = ({ url }: IProductWebinarProps) => {
  const group: IAvatarsItems = [
    { filename: '300-4.png', variant: 'size-7' },
    { filename: '300-1.png', variant: 'size-7' },
    { filename: '300-2.png', variant: 'size-7' },
    {
      fallback: '+24',
      variant: 'text-primary-inverse size-7 ring-primary-light bg-primary'
    }
  ];

  return (
    <TimelinesWrapper icon="calendar-tick" line={true}>
      <div className="flex flex-col pb-2.5">
        <span className="text-sm font-medium text-gray-800">
          Jenny attended a webinar on new product features.
        </span>
        <span className="text-xs font-medium text-gray-500">3 days ago, 11:45 AM</span>
      </div>

      <div className="card p-4">
        <div className="flex flex-wrap gap-2.5">
          <KeenIcon icon="code" className="text-lg text-info" />
          <div className="flex flex-col gap-5 grow">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-md font-semibold text-gray-800 cursor-pointer hover:text-primary mb-px">
                  Leadership Development Series: Part 1
                </span>
                <span className="text-xs font-medium text-gray-500">
                  The first installment of a leadership development series.
                </span>
              </div>

              <a href={url} className="btn btn-link">
                View
              </a>
            </div>

            <div className="flex flex-wrap gap-7.5">
              <div className="flex items-center gap-1.5">
                <span className="text-2sm font-medium text-gray-500">Code:</span>
                <span className="text-2sm font-semibold text-primary">#leaderdev-1</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-2sm font-medium text-gray-500">Progress:</span>
                <div className="progress progress-success min-w-[120px]">
                  <div className="progress-bar" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 lg:min-w-24 shrink-0 max-w-auto">
                <span className="text-2sm font-medium text-gray-500">Guests:</span>
                <Avatars group={group} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TimelinesWrapper>
  );
};

export { ProductWebinar };
