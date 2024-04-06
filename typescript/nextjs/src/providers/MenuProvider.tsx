import { createContext, type PropsWithChildren, useContext } from 'react';

import { MenuConfigType } from '@/components/menu';

export interface IMenuProps {
  configs: Map<string, MenuConfigType | null>;
  setMenuConfig: (name: string, config: MenuConfigType | null) => void;
  getMenuConfig: (name: string) => MenuConfigType | null;
}

const initialProps: IMenuProps = {
  configs: new Map(),
  setMenuConfig: (name: string, config: MenuConfigType | null) => {},
  getMenuConfig: (name: string) => []
};

const MenuContext = createContext<IMenuProps>(initialProps);
const useMenu = () => useContext(MenuContext);

const MenuProvider = ({ children }: PropsWithChildren) => {
  const configs = initialProps.configs;

  const setMenuConfig = (name: string, config: MenuConfigType | null) => {
    configs.set(name, config);
  };

  const getMenuConfig = (name: string): MenuConfigType | null => {
    return configs.get(name) ?? null;
  };

  return (
    <MenuContext.Provider value={{ configs, setMenuConfig, getMenuConfig }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, useMenu };
