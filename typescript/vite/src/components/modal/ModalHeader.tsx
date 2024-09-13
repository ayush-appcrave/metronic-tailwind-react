import { forwardRef } from 'react';

interface ModalHeaderProps {
  className?: string;
  children: React.ReactNode;
}

// Forwarding ref to ensure this component can hold a ref
const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(({ className, children}, ref) => {
  return (
    <div
      ref={ref}
      className={`modal-header ${className}`}
    >
      {children}
    </div>
  );
});

export { ModalHeader };