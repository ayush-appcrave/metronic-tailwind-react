import tailwindConfig from 'tailwindcss/defaultConfig';

import { useMediaQuery } from './useMediaQuery';

type BreakpointType = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type QueryType = 'up' | 'down' | 'between';
type Key = BreakpointType | number;
type Start = BreakpointType | number;
type End = BreakpointType | number;
const breakpoints: BreakpointType[] = ['sm', 'md', 'lg', 'xl', '2xl'];

const useResponsive = (query: QueryType, key?: Key, start?: Start, end?: End) => {
  const screens = tailwindConfig?.theme?.screens;

  if (query === 'up') {
    key = breakpoints.includes(key as BreakpointType) && screens ? screens[key] : key;

    return useMediaQuery(`(min-width: ${key})`);
  }

  if (query === 'down') {
    key = breakpoints.includes(key as BreakpointType) && screens ? screens[key] : key;

    return useMediaQuery(`(max-width: ${key})`);
  }

  if (query === 'between') {
    start = breakpoints.includes(start as BreakpointType) && screens ? screens[start] : start;
    end = breakpoints.includes(end as BreakpointType) && screens ? screens[end] : end;

    return useMediaQuery(`(min-width: ${start}) and (max-width: ${end})`);
  }
};

export { type BreakpointType, useResponsive };
