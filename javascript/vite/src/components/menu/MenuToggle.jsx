import clsx from 'clsx';
const MenuToggle = ({
  className,
  children
}) => {
  return <div className={clsx('menu-toggle', className && className)}>{children}</div>;
};
export { MenuToggle };