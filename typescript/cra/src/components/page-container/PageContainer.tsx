import { type ReactNode } from 'react';
import { Container, type SxProps, type Theme } from '@mui/material';
import { useSettings } from '../../providers/SettingsProvider';
import { SettingsContainerWidthType } from '../../config/types';

export interface PageContainerProps {
  children?: ReactNode;
  width?: SettingsContainerWidthType;
  sx?: SxProps<Theme>;
}

const PageContainer = ({ children, width, sx }: PageContainerProps) => {
  const { settings } = useSettings();
  const { containerWidth } = settings;
  const widthMode = width !== undefined ? width : containerWidth;

  return (
    <Container maxWidth={widthMode === 'fixed' ? 'lg' : false} sx={sx}>
      {children}
    </Container>
  );
};

export { PageContainer };
