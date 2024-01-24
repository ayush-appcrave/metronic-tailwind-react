import { BreakpointType, useResponsive } from './useResponsive';

export default function useResponsiveProp(prop: any, defaultProp: any = null) {
  let value = prop;

  if (prop?.breakpoints) {
    for (const condition in prop.breakpoints) {
      const breakpoint = Object.keys(prop.breakpoints[condition])[0] as BreakpointType;
      if (condition === 'up' && useResponsive('up', breakpoint)) {
        value = prop.breakpoints[condition][breakpoint];
      } else if (condition === 'down' && useResponsive('down', breakpoint)) {
        value = prop.breakpoints[condition][breakpoint];
      }
    }
  }

  value = value ?? defaultProp;

  return value;
}

export { useResponsiveProp };
