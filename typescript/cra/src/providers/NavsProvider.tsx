import { useState, createContext, useContext, PropsWithChildren } from "react";
import { getData, setData } from "../utils";
import { NavConfigType } from "../components/nav";
import { NAV_COMMON, NAV_VERTICAL } from "../config/navs.config";

const NAVS_CONFIGS_KEY = "navs-config";

export type NavsConfigType = {
  commonNav: { [key: string]: NavConfigType };
  verticalNav: NavConfigType;
};
export type NavsProviderProps = {
  navs: NavsConfigType;
  updateCommonNav: (_: NavConfigType) => void;
  updateVerticalNav: (_: NavConfigType) => void;
};

const initNavs: NavsConfigType = {
  commonNav: NAV_COMMON,
  verticalNav: NAV_VERTICAL,
};

const calculateInitialNavs = () => {
  const navs = getData(NAVS_CONFIGS_KEY) as NavsConfigType | undefined;
  return navs || initNavs;
};

const calculateUpdatedNavs = (
  nav: NavConfigType,
  oldNavs: NavsConfigType,
  isVertical = false
): NavsConfigType => {
  const updatedNav = isVertical
    ? { ...oldNavs, verticalNav: nav }
    : { ...oldNavs, horizontalnNav: nav };
  setData(NAVS_CONFIGS_KEY, JSON.stringify(updatedNav));
  return updatedNav;
};

const initialProps: NavsProviderProps = {
  navs: calculateInitialNavs(),
  updateCommonNav: (_: NavConfigType) => {},
  updateVerticalNav: (_: NavConfigType) => {},
};

const NavsContext = createContext<NavsProviderProps>(initialProps);
const useNavs = () => useContext(NavsContext);

const NavsProvider = ({ children }: PropsWithChildren) => {
  const [navs, setNavs] = useState(initialProps.navs);
  const updateVerticalNav = (verticalNav: NavConfigType) => {
    const updatedNavs = calculateUpdatedNavs(verticalNav, navs, true);
    setNavs(updatedNavs);
  };
  const updateCommonNav = (commonNav: NavConfigType) => {
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
