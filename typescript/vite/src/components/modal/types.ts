import { ReactNode } from 'react';

export interface IModalBackdropProps {
  className: string;
  open: boolean;
}

export interface IModalContentProps {
  children: ReactNode;
  className?: string;
}
