/* eslint-disable react-hooks/rules-of-hooks */
import { type Breakpoint } from '@mui/material/styles';

import { useResponsive } from './useResponsive';

export default function useResponsiveProp(prop: any, defaultProp: any = null) {
  let value = prop;

  if (prop?.breakpoints) {
    for (const condition in prop.breakpoints) {
      const breakpoint = Object.keys(prop.breakpoints[condition])[0] as Breakpoint;
      if (condition === 'up' && useResponsive('up', breakpoint)) {
        value = prop.breakpoints[condition][breakpoint];
      } else if (condition === 'down' && useResponsive('down', breakpoint)) {
        value = prop.breakpoints[condition][breakpoint];
      }
    }
  }

  value = value !== null && value !== undefined ? value : defaultProp;

  return value;
}

export { useResponsiveProp };
