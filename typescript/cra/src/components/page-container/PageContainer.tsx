import { ReactNode } from 'react';
import { Container, SxProps, Theme } from '@mui/material';
import { useSettings } from '../../providers/SettingsProvider';

export interface PageContainerProps {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

const PageContainer = ({ children, sx }: PageContainerProps) => {
  const { settings } = useSettings();
  const { container } = settings;

  return (
    <Container maxWidth={container === 'fixed' ? 'lg' : false} sx={sx}>
      {children}
    </Container>
  );
};

export { PageContainer };
