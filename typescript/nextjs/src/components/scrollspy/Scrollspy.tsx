import clsx from 'clsx';
import { Children, cloneElement, isValidElement, memo } from 'react';

import { IScrollspyAnchorProps, IScrollspyProps } from './';

const ScrollspyComponent = ({ className, offset, target, children }: IScrollspyProps) => {
  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      // Add some props to each child
      const modifiedProps: IScrollspyAnchorProps = {};

      return cloneElement(child, modifiedProps);
    }

    return child;
  });

  return <div className={clsx(className && className)}>{modifiedChildren}</div>;
};

const Scrollspy = memo(ScrollspyComponent);
export { Scrollspy };
