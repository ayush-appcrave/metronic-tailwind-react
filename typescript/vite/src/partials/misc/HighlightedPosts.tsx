import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';

import { IHighlightedPostsItem, IHighlightedPostsProps } from './interfaces';

const HighlightedPosts = ({ posts }: IHighlightedPostsProps) => {
  const renderItem = (post: IHighlightedPostsItem) => {
    return (
      <>
        <div className="flex flex-col items-start gap-2.5">
          <div className="relative size-[50px] shrink-0 mb-2.5">
            <svg
              className="w-full h-full stroke-brand-clarity fill-brand-light"
              width="44"
              height="48"
              viewBox="0 0 44 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                fill=""
                stroke=""
              />
            </svg>
            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
              <KeenIcon icon={post.icon} className="text-1.5xl ps-px text-brand" />
            </div>
          </div>

          <a href={toAbsoluteUrl(post.path)} className="text-base font-semibold hover:text-primary">
            {post.title}
          </a>

          <p className="text-sm text-gray-700">{post.summary}</p>

          <a href={toAbsoluteUrl(post.path)} className="btn btn-link flex-none">
            Learn more
          </a>
        </div>

        <span className="hidden [&:not(:last-child)]:block [&:not(:last-child)]:border-b border-b-gray-200"></span>
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-body py-10 flex flex-col gap-5 lg:gap-7.5">
        {posts.map((post, index) => {
          return renderItem(post);
        })}
      </div>
    </div>
  );
};

export { HighlightedPosts };
