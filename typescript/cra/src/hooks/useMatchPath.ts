import { useLocation, matchPath } from 'react-router-dom';

type ReturnType = {
  match: boolean;
  isExternal: boolean;
};

const useMatchPath = (path: string, mode = 'default'): ReturnType => {
  const { pathname } = useLocation();
  let match: boolean = false;

  if (mode === 'default' && matchPath({ path, end: true }, pathname)) {
    match = true;
  } else if (mode === 'full' && matchPath({ path, end: false }, pathname)) {
    match = true;
  }

  return {
    match,
    isExternal: path.startsWith('http') || path.startsWith('//')
  };
};

export { useMatchPath };
