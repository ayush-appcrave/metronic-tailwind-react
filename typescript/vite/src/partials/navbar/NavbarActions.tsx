import { INavbarActionsProps } from './';

const NavbarActions = ({ children }: INavbarActionsProps) => {
  return <div className="flex items-center pb-4 gap-2.5">{children}</div>;
};

export { NavbarActions };
