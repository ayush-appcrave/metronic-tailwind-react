import { ICreatorWorksItem, ICreatorWorksItems } from './interfaces';

const CreatorWorks = () => {
  const items: ICreatorWorksItems = [
    {
      url: '#',
      title: 'Urban Dreams',
      image: 'images/content/stock/1.jpg',
      authorName: 'Cody Fisher',
      authorAvatar: 'images/content/avatars/300-3.jpg',
      likes: 24,
      comments: 5
    },
    {
      url: '#',
      title: 'Timeless Elegance',
      image: 'images/content/stock/2.jpg',
      authorName: 'Jenny Wilson',
      authorAvatar: 'images/content/avatars/300-20.jpg',
      likes: 6,
      comments: 1
    },
    {
      url: '#',
      title: 'Whispered Emotions',
      image: 'images/content/stock/7.jpg',
      authorName: 'Wade Warren',
      authorAvatar: 'images/content/avatars/300-9.jpg',
      likes: 187,
      comments: 49
    },
    {
      url: '#',
      title: 'Golden Serenity',
      image: 'images/content/stock/9.jpg',
      authorName: 'Albert Flores',
      authorAvatar: 'images/content/avatars/300-15.jpg',
      likes: 60,
      comments: 13
    },
    {
      url: '#',
      title: 'Wild Beauty',
      image: 'images/content/stock/10.jpg',
      authorName: 'Devon Lane',
      authorAvatar: 'images/content/avatars/300-18.jpg',
      likes: 625,
      comments: 109
    },
    {
      url: '#',
      title: 'Mystic Shadows',
      image: 'images/content/stock/1.jpg',
      authorName: 'Kathryn Murphy',
      authorAvatar: 'images/content/avatars/300-3.jpg',
      likes: 37,
      comments: 16
    }
  ];

  const renderItem = (item: ICreatorWorksItem) => {
    return <></>;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7.5">
      {items.map((item, index) => {
        return renderItem(item);
      })}
    </div>
  );
};

export { CreatorWorks };
