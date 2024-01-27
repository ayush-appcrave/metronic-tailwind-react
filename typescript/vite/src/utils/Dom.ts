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

const getTotalHeight = (element: HTMLElement): number => {
  if (!element) return 0;

  const styles = window.getComputedStyle(element);
  const height = element.offsetHeight;
  const paddingTop = parseFloat(styles.paddingTop);
  const paddingBottom = parseFloat(styles.paddingBottom);
  const borderTop = parseFloat(styles.borderTopWidth);
  const borderBottom = parseFloat(styles.borderBottomWidth);
  const marginTop = parseFloat(styles.marginTop);
  const marginBottom = parseFloat(styles.marginBottom);

  const totalHeight =
    height + paddingTop + paddingBottom + borderTop + borderBottom + marginTop + marginBottom;

  return totalHeight;
};

export { getTotalHeight, getViewPort };
