import { toAbsoluteUrl } from '@/utils/Assets';
const Tournament = ({
  image,
  logo,
  title,
  time,
  labels,
  progress
}) => {
  return <div className="card w-[280px] border-0">
      <img src={toAbsoluteUrl(`/images/content/stock/${image}`)} className="rounded-t-xl max-w-[280px] shrink-0" alt="" />

      <div className="card-border card-rounded-b grid h-full gap-6 px-5 pt-3.5 pb-3 mb-5">
        <div className="flex items-center gap-3">
          <img src={toAbsoluteUrl(`/images/content/stock/${logo}`)} className="" alt="" />

          <div className="grid grid-cols-1 gap-0.5">
            <a href="#" className="text-gray-800 hover:text-primary-active text-md font-semibold mb-px">
              {title}
            </a>
            <time className="flex items-center gap-1.5 text-3xs font-medium text-gray-500">
              <div className="rounded-full w-1.5 h-1.5 bg-danger gap-1.5"></div> {time}
            </time>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {labels.map((label, index) => <span key={index} className="badge badge-xs badge-outline">
              {label}
            </span>)}
        </div>

        <div className="grid gap-1.5 mb-0.5">
          <div className={`progress h-1.5 ${progress.variant}`}>
            <div className="progress-bar" style={{
            width: `${progress.value}%`
          }}></div>
          </div>

          <div className="flex items-center place-content-between">
            <span className="text-gray-500 text-2xs font-medium">{progress.slotNumber} slots</span>
            <span className="text-gray-500 text-2xs font-medium">{progress.leftNumber} left</span>
          </div>
        </div>
      </div>
    </div>;
};
export { Tournament };