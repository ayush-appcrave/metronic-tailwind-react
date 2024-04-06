import clsx from 'clsx';
import { Children, cloneElement, isValidElement, memo } from 'react';

import { IScrollspyAnchorProps } from './';

const ScrollspyAnchorComponent = ({
  className,
  offset,
  active,
  children
}: IScrollspyAnchorProps) => {
  return <div className={clsx(className && className, active && 'active')}>{children}</div>;
};

const ScrollspyAnchor = memo(ScrollspyAnchorComponent);
export { ScrollspyAnchor };
