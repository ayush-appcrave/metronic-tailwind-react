import { KeenIcon } from '@/components';
import { Work, WorkRow } from '@/partials/cards';

import { Offer, OfferRow } from './cards';
import { IWorksItem, IWorksItems } from './interfaces';

const Works = () => {
  const items: IWorksItems = [
    {
      url: '#',
      title: 'Urban Dreams',
      description: 'Cloud storage and file sharing',
      image: '/images/content/stock/1.jpg',
      authorName: 'Cody Fisher',
      authorAvatar: '/images/content/avatars/300-3.jpg',
      likes: 24,
      comments: 5
    },
    {
      url: '#',
      title: 'Timeless Elegance',
      description: 'Neutrals are the epitome of timeless elegance',
      image: '/images/content/stock/2.jpg',
      authorName: 'Jenny Wilson',
      authorAvatar: '/images/content/avatars/300-20.jpg',
      likes: 6,
      comments: 1
    },
    {
      url: '#',
      title: 'Whispered Emotions',
      description: 'Choose the right time. ',
      image: '/images/content/stock/7.jpg',
      authorName: 'Wade Warren',
      authorAvatar: '/images/content/avatars/300-9.jpg',
      likes: 187,
      comments: 49
    },
    {
      url: '#',
      title: 'Golden Serenity',
      description: 'Her alluring appearance radiates calmness.',
      image: '/images/content/stock/9.jpg',
      authorName: 'Albert Flores',
      authorAvatar: '/images/content/avatars/300-15.jpg',
      likes: 60,
      comments: 13
    },
    {
      url: '#',
      title: 'Wild Beauty',
      description: 'Pulled apart by reality',
      image: '/images/content/stock/10.jpg',
      authorName: 'Devon Lane',
      authorAvatar: '/images/content/avatars/300-18.jpg',
      likes: 625,
      comments: 109
    },
    {
      url: '#',
      title: 'Mystic Shadows',
      description: 'The charm and limit of shadows',
      image: '/images/content/stock/1.jpg',
      authorName: 'Kathryn Murphy',
      authorAvatar: '/images/content/avatars/300-22.jpg',
      likes: 37,
      comments: 16
    },
    {
      url: '#',
      title: 'Intrepid Travel',
      description: 'Understand the world with us',
      image: '/images/content/stock/1.jpg',
      authorName: 'Jhon Smith',
      authorAvatar: '/images/content/avatars/300-21.jpg',
      likes: 30,
      comments: 22
    },
    {
      url: '#',
      title: 'We rise together',
      description: 'We share the best experiences with you',
      image: '/images/content/stock/1.jpg',
      authorName: 'Adam Cruse',
      authorAvatar: '/images/content/avatars/300-25.jpg',
      likes: 19,
      comments: 23
    }
  ];

  const renderItem = (item: IWorksItem) => {
    return (
      <>
        <Work
          url={item.url}
          title={item.title}
          image={item.image}
          authorName={item.authorName}
          authorAvatar={item.authorAvatar}
          likes={item.likes}
          comments={item.comments}
        />
      </>
    );
  };

  const renderData = (data: IWorksItem) => {
    return (
      <>
        <WorkRow
          description={data.description}
          title={data.title}
          image={data.image}
          authorName={data.authorName}
          authorAvatar={data.authorAvatar}
          likes={data.likes}
          comments={data.comments}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-gray-800 font-semibold">{items.length} Works</h3>

        <div className="btn-group" data-tabs="true">
          <a href="#" className="btn btn-icon btn-sm active" data-tab-toggle="#works_cards">
            <KeenIcon icon="category" />
          </a>
          <a href="#" className="btn btn-icon btn-sm" data-tab-toggle="#works_list">
            <KeenIcon icon="row-horizontal" />
          </a>
        </div>
      </div>

      <div id="works_cards">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
          {items.map((item, index) => {
            return renderItem(item);
          })}
          <Offer />
        </div>

        <div className="flex grow justify-center pt-5 lg:pt-7.5">
          <a href="#" className="btn btn-link">
            Show more works
          </a>
        </div>
      </div>

      <div className="hidden" id="works_list">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          {items.map((data, index) => {
            return renderData(data);
          })}
          <OfferRow />
        </div>
        <div className="flex grow justify-center pt-5 lg:pt-7.5">
          <a href="#" className="btn btn-link">
            Show more works
          </a>
        </div>
      </div>
    </div>
  );
};

export { Works };
