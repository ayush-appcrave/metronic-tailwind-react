import { useResponsive } from '.';
import { ResponsiveBreakpointType } from './types';

export default function useResponsiveProp(prop: any, defaultProp: any = null) {
  let value = prop;

  if (prop) {
    for (const condition in prop) {
      const breakpoint = prop[condition] as ResponsiveBreakpointType;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      if (condition === 'up' && useResponsive('up', breakpoint)) {
        value = prop[condition][breakpoint];
        // eslint-disable-next-line react-hooks/rules-of-hooks
      } else if (condition === 'down' && useResponsive('down', breakpoint)) {
        value = prop[condition][breakpoint];
      }
    }
  }

  value = value ?? defaultProp;

  return value;
}

export { useResponsiveProp };
