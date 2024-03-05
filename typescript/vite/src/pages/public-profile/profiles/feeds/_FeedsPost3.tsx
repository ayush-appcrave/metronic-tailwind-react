import { useState } from 'react';

import { ICommentsItems, ILikesItems, ISavesItems } from './interfaces';
import { Comments, Heading, Likes, Saves, Tabs } from './post';

const FeedsPost3 = () => {
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
        author="Finance Deprt - Annual Report"
        avatar={{
          icon: 'tablet-book',
          className:
            'flex items-center justify-center uppercase rounded-full size-[50px] shrink-0 bg-primary-light text-primary',
          iconClass: 'text-2xl'
        }}
        date="1 week ago"
      />

      <p className="mb-5 text-sm font-medium text-gray-600 leading-5.5">
        You also need to be able to accept that not every post is going to get your motor running.
        Some posts will feel like a chore, but if you have editorial control over what you write
        about, then choose topics you’d want to read – even if they relate to niche industries.
      </p>

      <div className="grid gap-5">
        <Tabs
          postId={3}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          comments={27}
          likes="47k"
          saves={900}
        />

        {activeTab === 'comments' && (
          <div id="post_3_comments">
            <Comments items={comments} url="#" />
          </div>
        )}
        {activeTab === 'likes' && (
          <div id="post_3_likes">
            <Likes items={likes} />
          </div>
        )}
        {activeTab === 'saves' && (
          <div id="post_3_saves">
            <Saves items={saves} />
          </div>
        )}
      </div>
    </div>
  );
};

export { FeedsPost3 };
