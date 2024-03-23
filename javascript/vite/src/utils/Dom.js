const getViewPort = () => {
  let e = window;
  let a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {
    width: e[a + 'Width'],
    height: e[a + 'Height']
  };
};
const getTotalHeight = element => {
  if (!element) return 0;
  const styles = window.getComputedStyle(element);
  const height = element.offsetHeight;
  const paddingTop = parseFloat(styles.paddingTop);
  const paddingBottom = parseFloat(styles.paddingBottom);
  const borderTop = parseFloat(styles.borderTopWidth);
  const borderBottom = parseFloat(styles.borderBottomWidth);
  const marginTop = parseFloat(styles.marginTop);
  const marginBottom = parseFloat(styles.marginBottom);
  const totalHeight = height + paddingTop + paddingBottom + borderTop + borderBottom + marginTop + marginBottom;
  return totalHeight;
};
export { getTotalHeight, getViewPort };