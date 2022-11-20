import { useState, createContext, useContext, PropsWithChildren } from "react";
import { getData, setData } from "@base/helpers";
import { COMMON_MENU, VERTICAL_MENU } from "./menu.config";
import { MenuType } from "./types";

const MENU_CONFIGS_KEY = "menus-config";

export type MenusType = {
  commonMenu: MenuType;
  verticalMenu: MenuType;
};
export type MenusProviderProps = {
  menus: MenusType;
  updateCommonMenu: (_: MenuType) => void;
  updateVerticalMenu: (_: MenuType) => void;
};

const initMenus: MenusType = {
  commonMenu: COMMON_MENU,
  verticalMenu: VERTICAL_MENU,
};

const calculateInitialMenus = () => {
  const menus = getData(MENU_CONFIGS_KEY) as MenusType | undefined;
  return menus || initMenus;
};

const calculateUpdatedMenus = (
  menu: MenuType,
  oldMenus: MenusType,
  isVertical = false
): MenusType => {
  const updatedMenu = isVertical
    ? { ...oldMenus, verticalMenu: menu }
    : { ...oldMenus, commonMenu: menu };
  setData(MENU_CONFIGS_KEY, JSON.stringify(updatedMenu));
  return updatedMenu;
};

const initialProps: MenusProviderProps = {
  menus: calculateInitialMenus(),
  updateCommonMenu: (_: MenuType) => {},
  updateVerticalMenu: (_: MenuType) => {},
};

const MenusContext = createContext<MenusProviderProps>(initialProps);
const useMenus = () => useContext(MenusContext);

const MenusProvider = ({ children }: PropsWithChildren) => {
  const [menus, setMenus] = useState(initialProps.menus);
  const updateVerticalMenu = (verticalMenu: MenuType) => {
    const updatedMenus = calculateUpdatedMenus(verticalMenu, menus, true);
    setMenus(updatedMenus);
  };
  const updateCommonMenu = (commonMenu: MenuType) => {
    const updatedMenu = calculateUpdatedMenus(commonMenu, menus, false);
    setMenus(updatedMenu);
  };

  return (
    <MenusContext.Provider
      value={{ menus, updateCommonMenu, updateVerticalMenu }}
    >
      {children}
    </MenusContext.Provider>
  );
};

export { useMenus, MenusProvider };
