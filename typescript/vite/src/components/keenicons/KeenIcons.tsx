import { Box } from '@mui/material';
import { type SxProps, type Theme } from '@mui/material/styles';
import { memo } from 'react';

import { useSettings } from '../../providers/SettingsProvider';
import KeenIconsConfig from './config';
import { type KeenIconsStyleType } from './types';

interface Props {
  icon: string;
  style?: KeenIconsStyleType;
  className?: string;
  sx?: SxProps<Theme>;
}

const KeenIconComponent = ({ icon, style, className, sx }: Props) => {
  const { settings } = useSettings();
  const { keeniconsStyle } = settings;

  if (typeof style === 'undefined') {
    style = keeniconsStyle;
  }

  return (
    <Box
       
      className={`ki-${style} ki-${icon} ${className && ' ' + className}`}
      component="i"
      {...(sx && { sx })}
    >
      {style === 'duotone' &&
        [...Array(KeenIconsConfig[icon])].map((e, i) => {
          return (
            <span
               
              key={`${style}-${icon}-${className}-path-${i + 1}`}
              className={`path${i + 1}`}
            ></span>
          );
        })}
    </Box>
  );
};

const KeenIcon = memo(KeenIconComponent);

export { KeenIcon };
