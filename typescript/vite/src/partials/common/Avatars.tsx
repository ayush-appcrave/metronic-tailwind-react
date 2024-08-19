import clsx from 'clsx';

import { toAbsoluteUrl } from '@/utils/Assets';

import { IAvatarsItem, IAvatarsProps } from './interfaces';

const Avatars = ({ size, group, more, className }: IAvatarsProps) => {
  const renderItem = (each: IAvatarsItem, index: number) => {
    return (
      <div key={index} className="flex">
        {each.filename ? (
          <img
            src={toAbsoluteUrl(`/media/avatars/${each.filename}`)}
            className={clsx(
              `hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light ${size} size-6`,
            )}
            alt=""
          />
        ) : each.fallback ? (
          <span
            className={clsx(
              `hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs ${size} size-6`,
              each.variant
            )}
          >
            {each.fallback}
          </span>
        ) : null}
      </div>
    );
  };

  return (
    <div className={clsx('flex -space-x-2', className && className)}>
      {group.map((each, index) => {
        return renderItem(each, index);
      })}

      {more && (
        <div className="flex">
          <span
            className={clsx(
              `relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs ${size} size-6`,
              more.variant
            )}
          >
            +{more.number}
          </span>
        </div>
      )}
    </div>
  );
};

export { Avatars };
