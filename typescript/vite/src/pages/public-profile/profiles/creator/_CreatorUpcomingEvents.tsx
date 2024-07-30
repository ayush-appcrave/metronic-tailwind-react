import { toAbsoluteUrl } from '@/utils/Assets';

import { ICreatorUpcomingEventsItem, ICreatorUpcomingEventsItems } from './interfaces';

const CreatorUpcomingEvents = () => {
  const items: ICreatorUpcomingEventsItems = [
    {
      month: 'Feb',
      date: '21',
      image: '7.jpg',
      label: 'Webinar Series',
      title: 'Digital Marketing Mastery Series',
      desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.'
    },
    {
      month: 'Apr',
      date: '02',
      image: '8.jpg',
      label: 'Photo Workshop',
      title: 'Nature Photography Immersion',
      desc: 'Enhance your nature photography skills in a hands-on workshop guided by experienced photographers.'
    },
    {
      month: 'Aug',
      date: '29',
      image: '9.jpg',
      label: 'Tech Conference',
      title: 'Future Tech Exploration',
      desc: 'Delve into tech innovations and emerging trends at this influential conference for tech enthusiasts.'
    }
  ];

  const renderItem = (item: ICreatorUpcomingEventsItem, index: number) => {
    return (
      <>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex items-center gap-5 shrink-0">
            <div className="border border-brand-clarity rounded-lg">
              <div className="flex items-center justify-center border-b border-b-brand-clarity bg-brand-light rounded-t-lg">
                <span className="text-2sm text-brand fw-medium p-2">{item.month}</span>
              </div>
              <div className="flex items-center justify-center size-12">
                <span className="fw-semibold text-gray-800 text-1.5xl tracking-tight">
                  {item.date}
                </span>
              </div>
            </div>

            <img
              src={toAbsoluteUrl(`/media/images/600x400/${item.image}`)}
              className="rounded-lg max-h-[120px] max-w-full"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="text-2sm font-medium text-brand leading-[14px] hover:text-primary-active mb-px"
            >
              {item.label}
            </a>
            <a
              href="#"
              className="text-base font-semibold hover:text-primary text-gray-800 leading-4"
            >
              {item.title}
            </a>
            <p className="text-sm font-medium text-gray-700 leading-[22px]">{item.desc}</p>
          </div>
        </div>

        <div className="[&:not(:last-child)]:border-b border-b-gray-200"></div>
      </>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Upcoming Events</h3>
        <a href="#" className="btn btn-link">
          View All
        </a>
      </div>

      <div className="card-body">
        <div className="grid gap-4">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export { CreatorUpcomingEvents };
