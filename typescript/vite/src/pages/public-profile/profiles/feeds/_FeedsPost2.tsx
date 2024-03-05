import { useState } from 'react';

import { ICommentsItems, ILikesItems, ISavesItems } from './interfaces';
import { Comments, Heading, Likes, Saves, Tabs } from './post';

const FeedsPost2 = () => {
  const [activeTab, setActiveTab] = useState('comments');

  const comments: ICommentsItems = [
    {
      avatar: '300-1.png',
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
        avatar={{ image: '300-2.jpg', imageClass: 'rounded-full size-[50px]' }}
        date="2 days ago"
      />

      <p className="mb-5 text-sm font-medium text-gray-600 leading-5.5">
        I can hear your objections already. “But Dan, I have to blog for a cardboard box
        manufacturing company.” I feel your pain, I really do.
      </p>

      <div className="grid gap-5">
        <Tabs
          postId={2}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          comments={2}
          likes="24"
          saves={16}
        />

        {activeTab === 'comments' && (
          <div id="post_2_comments">
            <Comments items={comments} url="#" />
          </div>
        )}
        {activeTab === 'likes' && (
          <div id="post_2_likes">
            <Likes items={likes} />
          </div>
        )}
        {activeTab === 'saves' && (
          <div id="post_2_saves">
            <Saves items={saves} />
          </div>
        )}
      </div>
    </div>
  );
};

export { FeedsPost2 };
