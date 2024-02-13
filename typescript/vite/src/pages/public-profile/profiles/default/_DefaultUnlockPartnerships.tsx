import { toAbsoluteUrl } from '@/utils/Assets';

import { IDefaultUnlockPartnershipsProps } from './interfaces';

const DefaultUnlockPartnerships = ({ url }: IDefaultUnlockPartnershipsProps) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-1.5xl font-semibold text-gray-900">
                Unlock Creative <br />
                Partnerships on Our Blog
              </h2>
              <p className="text-sm text-gray-700 leading-5.5">
                Explore exciting collaboration opportunities with our blog. We&apos;re open to
                partnerships, guest posts, and more. Join us to share your insights and grow your
                audience.
              </p>
            </div>
            <img
              src={toAbsoluteUrl('/images/content/illustrations/welcome.png')}
              className="max-h-[160px]"
            />
          </div>
        </div>

        <div className="card-footer justify-center">
          <a href={url} className="btn btn-link">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export { DefaultUnlockPartnerships };
