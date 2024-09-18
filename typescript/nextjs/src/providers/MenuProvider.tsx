import { createContext, type PropsWithChildren, useContext, useState } from 'react';

import { IMenuItemConfig, MenuConfigType } from '@/components/menu';

export interface IMenuProps {
  configs: Map<string, MenuConfigType | null>;
  setMenuConfig: (name: string, config: MenuConfigType | null) => void;
  getMenuConfig: (name: string) => MenuConfigType | null;
  setCurrentMenuItem: (config: IMenuItemConfig | null) => void;
  getCurrentMenuItem: () => IMenuItemConfig | null;
}

const initialProps: IMenuProps = {
  configs: new Map(),
  setMenuConfig: () => {},
  getMenuConfig: () => null,
  setCurrentMenuItem: () => {},
  getCurrentMenuItem: () => null
};

const MenuContext = createContext<IMenuProps>(initialProps);
const useMenu = () => useContext(MenuContext);

const MenuProvider = ({ children }: PropsWithChildren) => {
  const [currentMenuItem, setCurrentMenuItem] = useState<IMenuItemConfig | null>(null);
  const configs = initialProps.configs;

  const setMenuConfig = (name: string, config: MenuConfigType | null) => {
    configs.set(name, config);
  };

  const getCurrentMenuItem = (): IMenuItemConfig | null => {
    return currentMenuItem;
  };

  const getMenuConfig = (name: string): MenuConfigType | null => {
    return configs.get(name) ?? null;
  };

  return (
    <MenuContext.Provider
      value={{ configs, setMenuConfig, getMenuConfig, setCurrentMenuItem, getCurrentMenuItem }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, useMenu };
