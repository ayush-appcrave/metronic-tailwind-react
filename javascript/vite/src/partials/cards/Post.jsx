import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';
const Post = ({
  image,
  label,
  description,
  time
}) => {
  return <div className="card w-[280px] border-0 mb-5">
      <img src={toAbsoluteUrl(`/images/content/stock/${image}`)} className="rounded-t-xl max-w-[280px] shrink-0" alt="" />

      <div className="card-border card-rounded-b grid h-full gap-1.5 px-5 pt-4 pb-3">
        <a href="#" className="font-medium text-brand text-2sm hover:text-primary">
          {label}
        </a>
        <a href="#" className="font-semibold text-gray-800 text-lg leading-6 mb-1.5 hover:text-primary">
          {description}
        </a>
        <time className="flex items-center gap-1.5 text-2sm font-medium text-gray-600 leading-none">
          <KeenIcon icon="time" className="text-lg" />
          {time}
        </time>
      </div>
    </div>;
};
export { Post };