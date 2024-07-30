import { useState } from 'react';

import { toAbsoluteUrl } from '@/utils/Assets';

import { ICommentsItems, ILikesItems, ISavesItems } from './interfaces';
import { Comments, Heading, Likes, Saves, Tabs } from './post';

const FeedsPost1 = () => {
  const [activeTab, setActiveTab] = useState('comments');

  const comments: ICommentsItems = [
    {
      avatar: '300-3.png',
      author: 'Mr. Anderson',
      date: '1 Day ago',
      text: 'Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write. I’ll show you how to write a great blog post in five simple steps that people will actually want to read. Ready?'
    },
    {
      avatar: '300-15.png',
      author: 'Mrs. Anderson',
      date: '1 Day ago',
      text: 'Long before you sit dow to put digital pen to paper.'
    }
  ];

  const likes: ILikesItems = [];
  const saves: ISavesItems = [];

  return (
    <div className="card p-7.5">
      <Heading
        author="Jenny Klabber"
        avatar={{ image: '300-1.png', imageClass: 'rounded-full size-[50px]' }}
        date="Yesterday at  5:06 PM"
      />
      <div className="grid gap-5 mb-5">
        <p className="text-sm font-medium text-gray-600 leading-5.5">
          Now that I’m done thoroughly mangling that vague metaphor, let’s get down to business. You
          know you need to start blogging to grow your business, but you don’t know how. In this
          post, I’ll show you how to write a great blog post in five simple steps that people will
          actually want to read. Ready? Let’s get started.
        </p>

        <div className="grid grid-cols-12 gap-2.5 xl:gap-7.5">
          <div className="col-span-6">
            <img
              src={toAbsoluteUrl('/media/images/600x600/21.jpg')}
              className="rounded-xl max-h-[340px] size-full"
              alt=""
            />
          </div>

          <div className="col-span-6">
            <div className="grid grid-cols-1 gap-2.5 xl:gap-7.5">
              <img
                src={toAbsoluteUrl('/media/images/600x400/19.jpg')}
                className="rounded-xl max-h-[155px] size-full"
                alt=""
              />
              <img
                src={toAbsoluteUrl('/media/images/600x400/20.jpg')}
                className="rounded-xl max-h-[155px] size-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5">
        <Tabs
          postId={1}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          comments={2}
          likes="47k"
          saves={900}
        />

        {activeTab === 'comments' && (
          <div id="post_1_comments">
            <Comments items={comments} url="#" />
          </div>
        )}
        {activeTab === 'likes' && (
          <div id="post_1_likes">
            <Likes items={likes} />
          </div>
        )}
        {activeTab === 'saves' && (
          <div id="post_1_saves">
            <Saves items={saves} />
          </div>
        )}
      </div>
    </div>
  );
};

export { FeedsPost1 };
