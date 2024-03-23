import clsx from 'clsx';
import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils/Assets';
const Avatar = ({
  image,
  fallback,
  icon,
  iconClass,
  badgeClass,
  className,
  imageClass
}) => {
  return <div className={clsx(className && className)}>
      {image && <img src={toAbsoluteUrl(`/images/content/avatars/${image}`)} className={clsx(imageClass && imageClass)} />}
      {!image && fallback && fallback}
      {!image && !fallback && icon && <KeenIcon icon={icon} className={clsx(iconClass && iconClass)} />}
      {badgeClass && <div className={clsx(badgeClass && badgeClass)}></div>}
    </div>;
};
export { Avatar };