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

  return (
    <i className={clsx(`ki-${style}`, `ki-${icon}`, className)}>
      {style === 'duotone' &&
        [...Array(KeenIconsConfig[icon])].map((e, i) => {
          return (
            <span
              key={`${style}-${icon}-${className}-path-${i + 1}`}
              className={`path${i + 1}`}
            ></span>
          );
        })}
    </i>
  );
};

const KeenIcon = memo(KeenIconComponent);

export { KeenIcon };
