const getCurrentUrl = (path: string) => {
  return path.split(/[?#]/)[0];
};

const matchPath = (path: string, pathname: string) => {
  const current = getCurrentUrl(path);
  if (!current || !pathname) {
    return false;
  }

  if (current === pathname) {
    return true;
  }

  if (current.indexOf(pathname) > -1) {
    return true;
  }

  return false;
};

export { getCurrentUrl, matchPath };
