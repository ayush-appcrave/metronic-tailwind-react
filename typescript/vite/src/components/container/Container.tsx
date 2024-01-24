import { type ReactNode } from 'react';

import { SettingsContainerType } from '../../config/types';
import { useSettings } from '../../providers/SettingsProvider';

export interface PageContainerProps {
  children?: ReactNode;
  width?: SettingsContainerType;
  className?: string;
}

const Container = ({ children, width, className = '' }: PageContainerProps) => {
  const { settings } = useSettings();
  const { containerWidth } = settings;
  const widthMode = width ?? containerWidth;

  return (
    <div className={className + (widthMode === 'fixed' ? ' container-fixed' : ' container-fluid')}>
      {children}
    </div>
  );
};

export { Container };
