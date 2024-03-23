import { KeenIcon } from '@/components';
import { Location } from '@/partials/cards';
const CompanyLocations = () => {
  const items = [{
    image: '4.jpg',
    title: 'Duolingo Tech Hub',
    description: '456 Innovation Street, Floor 6, Techland, New York 54321'
  }, {
    image: '5.jpg',
    title: 'Duolingo Language Lab',
    description: '789 Learning Lane, 3rd Floor, Lingoville, Texas 98765'
  }, {
    image: '6.jpg',
    title: 'Duolingo Research Institute',
    description: '246 Innovation Road, Research Wing, Innovacity, Arizona 13579'
  }, {
    image: '7.jpg',
    title: 'Duolingo Research Institute',
    description: '246 Innovation Road, Research Wing, Innovacity, Arizona 13579'
  }, {
    image: '8.jpg',
    title: 'Duolingo Research Institute',
    description: '246 Innovation Road, Research Wing, Innovacity, Arizona 13579'
  }];
  const renderItem = item => {
    return <>
        <Location image={item.image} title={item.title} description={item.description} />
      </>;
  };
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">Locations</h3>

        <button className="btn btn-success btn-sm">
          <KeenIcon icon="geolocation" />
          Offer Location
        </button>
      </div>
      <div className="card-body">
        <div className="flex gap-5 scrollable-x">
          {items.map((item, index) => {
          return renderItem(item);
        })}
        </div>
      </div>
    </div>;
};
export { CompanyLocations };