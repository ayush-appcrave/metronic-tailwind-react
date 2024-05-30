import { useRouter } from 'next/router';

interface ReturnType {
  match: boolean;
  isExternal: boolean;
}

export const removeTrailingSlash = (val: string) =>
    val.endsWith('/') ? val.substring(0, val.length - 1) : val;

export const matchesPathname = (asPath: string, pathname: string) => {
  if (asPath === pathname) {
    return true;
  }
  const baseAsPath = removeTrailingSlash(asPath.split('?')[0]);
  const basePathname = removeTrailingSlash(pathname.split('?')[0]);
  if (baseAsPath === basePathname) {
    return true;
  }
  const basePathRegex = new RegExp(
      `^${basePathname.replace(/(\[[a-zA-Z0-9-]+\])+/g, '[a-zA-Z0-9-]+')}$`
          .replace(/\[\[\.\.\.[a-zA-Z0-9-]+\]\]/g, '?.*')
          .replace(/\[\.\.\.[a-zA-Z0-9-]+\]/g, '.*')
  );
  if (basePathRegex.test(baseAsPath)) {
    return true;
  }
  return false;
};

const useMatchPath = (path: string, mode = 'default'): ReturnType => {
  const router = useRouter();
  const { pathname } = router;
  let match: boolean = false;

  if (mode === 'default' && matchesPathname(pathname, path)) {
    match = true;
  } else if (mode === 'full' && matchesPathname(pathname, path)) {
    match = true;
  }

  return {
    match,
    isExternal: path.startsWith('http') || path.startsWith('//')
  };
};

export { useMatchPath };
