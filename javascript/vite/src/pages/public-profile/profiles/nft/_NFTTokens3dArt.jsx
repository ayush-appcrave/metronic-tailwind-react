import { NFT } from '@/partials/cards/NFT';
const NFTTokens3dArt = ({
  url
}) => {
  const items = [{
    image: '21.jpg',
    title: 'Geometric Patterns',
    id: 81023,
    info: '3.8 XMR',
    date: '14h 30m 49s'
  }, {
    image: '21.jpg',
    title: 'Artistic Expressions',
    id: 67890,
    info: '3.2 XMR',
    date: '14h 30m 49s'
  }, {
    image: '21.jpg',
    title: 'Digital Harmony',
    id: 54321,
    info: '4.1 XMR',
    date: '11h 15m 00s'
  }, {
    image: '21.jpg',
    title: 'Futuristic Sculptures',
    id: 71045,
    info: '4.3 XMR',
    date: '10h 30m 00s'
  }, {
    image: '21.jpg',
    title: 'Enchanted Realms',
    id: 67670,
    info: '5.3 XMR',
    date: '15h 43m 23s'
  }];
  const renderItems = item => {
    return <>
        <NFT image={item.image} id={item.id} title={item.title} info={item.info} date={item.date} />
      </>;
  };
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">3d Art</h3>

        <a href={url} className="btn btn-link">
          View All
        </a>
      </div>
      <div className="card-body pb-7">
        <div className="flex gap-5 scrollable-x">
          {items.map((item, index) => {
          return renderItems(item);
        })}
        </div>
      </div>
    </div>;
};
export { NFTTokens3dArt };