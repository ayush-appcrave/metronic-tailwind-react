import clsx from 'clsx';
import { Children, cloneElement, isValidElement, memo } from 'react';
const ScrollspyComponent = ({
  className,
  offset,
  target,
  children
}) => {
  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      // Add some props to each child
      const modifiedProps = {};
      return cloneElement(child, modifiedProps);
    }
    return child;
  });
  return <div className={clsx(className && className)}>{modifiedChildren}</div>;
};
const Scrollspy = memo(ScrollspyComponent);
export { Scrollspy };