import { forwardRef } from 'react';
// Forwarding ref to ensure this component can hold a ref
const ModalBody = forwardRef(({
  className,
  children,
  tabIndex = -1
}, ref) => {
  return <div ref={ref} tabIndex={tabIndex} className={`modal-body ${className}`}>
        {children}
      </div>;
});
export { ModalBody };