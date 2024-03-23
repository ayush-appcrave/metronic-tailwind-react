import clsx from 'clsx';
import { memo } from 'react';
const ScrollspyAnchorComponent = ({
  className,
  offset,
  active,
  children
}) => {
  return <div className={clsx(className && className, active && 'active')}>{children}</div>;
};
const ScrollspyAnchor = memo(ScrollspyAnchorComponent);
export { ScrollspyAnchor };