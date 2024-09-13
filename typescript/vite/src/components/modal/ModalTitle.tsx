import { forwardRef } from 'react';

interface ModalModalProps {
  className?: string;
  children: React.ReactNode;
}

// Forwarding ref to ensure this component can hold a ref
const ModalTitle = forwardRef<HTMLDivElement, ModalModalProps>(({ className, children }, ref) => {
  return (
    <h3 ref={ref} className={`modal-title ${className}`}>
      {children}
    </h3>
  );
});

export { ModalTitle };