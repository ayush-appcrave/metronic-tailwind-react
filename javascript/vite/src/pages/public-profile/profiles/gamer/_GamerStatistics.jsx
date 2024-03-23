import { toAbsoluteUrl } from '@/utils/Assets';
const GamerStatistics = ({
  details
}) => {
  const renderData = item => {
    return <>
        <div className="grid flex-1">
          <div className="flex justify-self-center items-center gap-3">
            <img src={toAbsoluteUrl(`/images/content/logos/${item.image}`)} className="" alt="" />

            <div className="grid grid-cols-1 place-content-center flex-1">
              <span className="text-gray-800 text-2x lg:text-2.5xl font-semibold">
                {item.number}
              </span>
              <span className="text-gray-600 text-sm font-medium">{item.label}</span>
            </div>
          </div>
        </div>

        <span className="[&:not(:last-child)]:border-r border-r-gray-300 my-1"></span>
      </>;
  };
  return <div className="card">
      <div className="card-body">
        <div className="flex lg:px-10 lg:py-4 gap-2">
          {details.map((item, index) => {
          return renderData(item);
        })}
        </div>
      </div>
    </div>;
};
export { GamerStatistics };