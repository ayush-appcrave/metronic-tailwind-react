import { type Breakpoint } from '@mui/material/styles';

import { useResponsive } from './useResponsive';

export default function useResponsiveProp(prop: any, defaultProp: any = null) {
  let value;

  if (prop?.breakpoints) {
    console.log('breatpoints');
    for (const condition in prop.breakpoints) {
      const breakpoint = Object.keys(prop.breakpoints[condition])[0] as Breakpoint;

      console.log('condition:' + condition + '.breakpoint:' + breakpoint);
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
