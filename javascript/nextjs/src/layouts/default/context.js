// Todo: refactor
import PropTypes, { any } from 'prop-types';
import Cookies from 'js-cookie';
import useResponsive from '../../_core/hooks/useResponsive';
import { createContext, useContext, useEffect, useState } from 'react';

const initialState = {
  layout: {},
  setLayout: () => {},
};

const LayoutContext = createContext(initialState);

const useLayout = () => useContext(LayoutContext);

LayoutProvider.propTypes = {
  children: PropTypes.node
};

function LayoutProvider({ children }) {
  const isMobile = useResponsive('down', 'lg');

  const [layout, setLayout] = useState({
    sidebar: {
      collapse: false
    }
  });

  const setSidebarCollapse = (state) => {
    setLayout({ ...layout, sidebar: {collapse: state }});
  };
  
  return (
    <LayoutContext.Provider
      value={{        
        isSidebarCollapse: layout.sidebar.collapse,
        setSidebarCollapse: setSidebarCollapse
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export { LayoutProvider, LayoutContext, useLayout};