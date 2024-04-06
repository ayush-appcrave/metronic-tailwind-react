import clsx from 'clsx';
import { memo } from 'react';

import { useSettings } from '../../providers/SettingsProvider';
import KeenIconsConfig from './config';
import { IKeenIconProps } from './types';

const KeenIconComponent = ({ icon, style, className = '' }: IKeenIconProps) => {
  const { settings } = useSettings();

  if (typeof style === 'undefined') {
    style = settings.keenIconsStyle;
  }

  return <div></div>;
};

const KeenIcon = memo(KeenIconComponent);

export { KeenIcon };
