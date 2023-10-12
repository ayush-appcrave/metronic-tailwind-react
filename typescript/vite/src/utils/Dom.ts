const getViewPort = (): { width: number; height: number } => {
  let e: any = window;
  let a: string = 'inner';

  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }

  return {
    width: e[a + 'Width'] as number,
    height: e[a + 'Height'] as number
  };
};

export { getViewPort };
