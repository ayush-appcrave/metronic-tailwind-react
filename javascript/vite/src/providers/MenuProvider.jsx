import { createContext, useContext, useState } from 'react';
const initialProps = {
  configs: new Map(),
  setMenuConfig: () => {},
  getMenuConfig: () => null,
  setCurrentMenuItem: () => {},
  getCurrentMenuItem: () => null
};
const MenuContext = createContext(initialProps);
const useMenu = () => useContext(MenuContext);
const MenuProvider = ({
  children
}) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(null);
  const configs = initialProps.configs;
  const setMenuConfig = (name, config) => {
    configs.set(name, config);
  };
  const getCurrentMenuItem = () => {
    return currentMenuItem;
  };
  const getMenuConfig = name => {
    return configs.get(name) ?? null;
  };
  return <MenuContext.Provider value={{
    configs,
    setMenuConfig,
    getMenuConfig,
    setCurrentMenuItem,
    getCurrentMenuItem
  }}>
      {children}
    </MenuContext.Provider>;
};
export { MenuProvider, useMenu };