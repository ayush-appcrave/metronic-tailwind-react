import { useState } from 'react';

import { ICommentsItems, ILikesItems, ISavesItems } from './interfaces';
import { Comments, Heading, Likes, Saves, Tabs } from './post';

const FeedsPost4 = () => {
  const [activeTab, setActiveTab] = useState('comments');

  const comments: ICommentsItems = [
    {
      avatar: '300-3.jpg',
      author: 'Mr. Anderson',
      date: '1 Day ago',
      text: 'Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write. I’ll show you how to write a great blog post in five simple steps that people will actually want to read. Ready?'
    },
    {
      avatar: '300-10.jpg',
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
        date="Week ago"
      />

      <p className="text-sm font-medium text-gray-600 leading-5.5 mb-5">
        This doesn’t mean that all bloggers are insincere fakers. On the contrary, many bloggers’
        natural curiosity is what makes them great at what they do. If you blog for a living, you
        have to be comfortable jumping from one topic to the next, even if you don’t know anything
        about it.
      </p>

      <div className="grid gap-5">
        <Tabs
          postId={4}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          comments={2}
          likes="47k"
          saves={900}
        />

        {activeTab === 'comments' && (
          <div id="post_4_comments">
            <Comments items={comments} url="#" />
          </div>
        )}
        {activeTab === 'likes' && (
          <div id="post_4_likes">
            <Likes items={likes} />
          </div>
        )}
        {activeTab === 'saves' && (
          <div id="post_4_saves">
            <Saves items={saves} />
          </div>
        )}
      </div>
    </div>
  );
};

export { FeedsPost4 };
