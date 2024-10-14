import { ReactNode } from 'react';
import { Container } from '@/components';

export interface IToolbarProps {
  children?: ReactNode;
}

const Toolbar = ({ children }: IToolbarProps) => {
  return (
    <div className="pb-5">
      <Container className="flex items-center justify-between flex-wrap gap-3">
        {children}
      </Container>
    </div>
  );
};

export { Toolbar };
