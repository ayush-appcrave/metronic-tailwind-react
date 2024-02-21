import { Post } from '@/partials/cards';

import { IBloggerPostsItem, IBloggerPostsItems, IBloggerPostsProps } from './interfaces';

const BloggerPosts = ({ url }: IBloggerPostsProps) => {
  const items: IBloggerPostsItems = [
    {
      image: '11.jpg',
      label: 'Software',
      description: 'Maximizing Efficiency with Modern Software',
      time: '4 hours ago'
    },
    {
      image: '12.jpg',
      label: 'Work-Life',
      description: 'Balancing Work and Life: Strategies for Success',
      time: '2 days ago'
    },
    {
      image: '13.jpg',
      label: 'Technology',
      description: 'Exploring the Latest Technological',
      time: 'A week ago'
    },
    {
      image: '11.jpg',
      label: '',
      description: '',
      time: ''
    },
    {
      image: '12.jpg',
      label: '',
      description: '',
      time: ''
    }
  ];

  const renderItems = (item: IBloggerPostsItem) => {
    return (
      <>
        <Post
          image={item.image}
          label={item.label}
          description={item.description}
          time={item.time}
        />
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Jenny’s Posts</h3>

        <div className="justify-center">
          <a href={url} className="btn btn-link">
            View details
          </a>
        </div>
      </div>
      <div className="card-body">
        <div className="flex flex-no-wrap scrollable-x gap-5">
          {items.map((item, index) => {
            return renderItems(item);
          })}
        </div>
      </div>
    </div>
  );
};

export { BloggerPosts };
