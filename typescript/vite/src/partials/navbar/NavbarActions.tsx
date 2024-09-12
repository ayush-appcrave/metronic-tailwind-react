import { INavbarActionsProps } from './types';

const NavbarActions = ({ children }: INavbarActionsProps) => {
  return <div className="flex items-center lg:pb-4 gap-2.5">{children}</div>;
};

export { NavbarActions };
