import { forwardRef, ReactNode } from 'react';

interface ModalModalProps {
  className?: string;
  children: ReactNode;
  tabIndex?: number;
}

// Forwarding ref to ensure this component can hold a ref
const ModalBody = forwardRef<HTMLDivElement, ModalModalProps>(
  ({ className, children, tabIndex = -1 }, ref) => {
    return (
      <div ref={ref} tabIndex={tabIndex} className={`modal-body ${className}`}>
        {children}
      </div>
    );
  }
);

export { ModalBody };
