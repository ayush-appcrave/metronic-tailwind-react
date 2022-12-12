import { useState, createContext, useContext, PropsWithChildren } from "react";
import { getData, setData } from "../utils";
import { NavType } from "../components/nav";
import { COMMON_NAV, VERTICAL_NAV } from "../config/navs.config";

const NAVS_CONFIGS_KEY = "navs-config";

export type NavsType = {
  commonNav: NavType;
  verticalNav: NavType;
};
export type NavsProviderProps = {
  navs: NavsType;
  updateCommonNav: (_: NavType) => void;
  updateVerticalNav: (_: NavType) => void;
};

const initNavs: NavsType = {
  commonNav: COMMON_NAV,
  verticalNav: VERTICAL_NAV,
};

const calculateInitialNavs = () => {
  const navs = getData(NAVS_CONFIGS_KEY) as NavsType | undefined;
  return navs || initNavs;
};

const calculateUpdatedNavs = (
  menu: NavType,
  oldNavs: NavsType,
  isVertical = false
): NavsType => {
  const updatedNav = isVertical
    ? { ...oldNavs, verticalNav: menu }
    : { ...oldNavs, horizontalnNav: menu };
  setData(NAVS_CONFIGS_KEY, JSON.stringify(updatedNav));
  return updatedNav;
};

const initialProps: NavsProviderProps = {
  navs: calculateInitialNavs(),
  updateCommonNav: (_: NavType) => {},
  updateVerticalNav: (_: NavType) => {},
};

const NavsContext = createContext<NavsProviderProps>(initialProps);
const useNavs = () => useContext(NavsContext);

const NavsProvider = ({ children }: PropsWithChildren) => {
  const [navs, setNavs] = useState(initialProps.navs);
  const updateVerticalNav = (verticalNav: NavType) => {
    const updatedNavs = calculateUpdatedNavs(verticalNav, navs, true);
    setNavs(updatedNavs);
  };
  const updateCommonNav = (commonNav: NavType) => {
    const updatedNav = calculateUpdatedNavs(commonNav, navs, false);
    setNavs(updatedNav);
  };

  return (
    <NavsContext.Provider
      value={{ navs, updateCommonNav, updateVerticalNav }}
    >
      {children}
    </NavsContext.Provider>
  );
};

export { useNavs, NavsProvider };
