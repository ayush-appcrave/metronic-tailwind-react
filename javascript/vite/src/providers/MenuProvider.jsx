import { createContext, useContext } from 'react';
const initialProps = {
  configs: new Map(),
  setMenuConfig: (name, config) => {},
  getMenuConfig: name => []
};
const MenuContext = createContext(initialProps);
const useMenu = () => useContext(MenuContext);
const MenuProvider = ({
  children
}) => {
  const configs = initialProps.configs;
  const setMenuConfig = (name, config) => {
    configs.set(name, config);
  };
  const getMenuConfig = name => {
    return configs.get(name) ?? null;
  };
  return <MenuContext.Provider value={{
    configs,
    setMenuConfig,
    getMenuConfig
  }}>
      {children}
    </MenuContext.Provider>;
};
export { MenuProvider, useMenu };