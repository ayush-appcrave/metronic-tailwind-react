import { createContext, type PropsWithChildren, useContext, useEffect, useState } from 'react';
import { MENU_SIDEBAR } from '@/config';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMenus } from '@/providers';
import { ILayoutConfig, useLayout } from '@/providers';
import { deepMerge } from '@/utils';
import { Demo4LayoutConfig } from '.';

// Interface defining the properties of the layout provider context
export interface IDemo4LayoutProviderProps {
  layout: ILayoutConfig; // The layout configuration object
  headerSticky: boolean; // Whether the header should stick to the top on scroll
  mobileSidebarOpen: boolean; // Whether the mobile sidebar is open
  setMobileSidebarOpen: (open: boolean) => void; // Function to toggle the mobile sidebar
}

// Initial layout provider properties, using Demo4 layout configuration as the default
const initalLayoutProps: IDemo4LayoutProviderProps = {
  layout: Demo4LayoutConfig, // Default layout configuration
  headerSticky: false, // Header is not sticky by default
  mobileSidebarOpen: false, // Mobile sidebar is closed by default
  setMobileSidebarOpen: (open: boolean) => {
    console.log(`${open}`);
  }
};

// Create a context to manage the layout-related state and logic for Demo4 layout
const Demo4LayoutContext = createContext<IDemo4LayoutProviderProps>(initalLayoutProps);

// Custom hook to access the layout context in other components
const useDemo4Layout = () => useContext(Demo4LayoutContext);

// Provider component that sets up the layout state and context for Demo4 layout
const Demo4LayoutProvider = ({ children }: PropsWithChildren) => {
  const { setMenuConfig } = useMenus(); // Hook to manage menu configurations
  const { getLayout, setCurrentLayout } = useLayout(); // Hook to get and set layout configuration

  // Merge the Demo4 layout configuration with the current layout configuration fetched via getLayout
  const layoutConfig = deepMerge(Demo4LayoutConfig, getLayout(Demo4LayoutConfig.name));

  // Set the initial state for layout and mobile sidebar
  const [layout] = useState(layoutConfig); // Layout configuration is stored in state
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // Manage state for mobile sidebar

  // Get the current scroll position using a custom hook
  const scrollPosition = useScrollPosition();

  // Calculate whether the header should be sticky based on the scroll position and the layout's sticky offset
  const headerSticky: boolean = scrollPosition > layout.options.header.stickyOffset;

  // Set the menu configuration for the primary menu using the provided MENU_SIDEBAR configuration
  setMenuConfig('primary', MENU_SIDEBAR);

  // When the layout state changes, set the current layout configuration in the layout provider
  useEffect(() => {
    setCurrentLayout(layout); // Update the current layout in the global layout state
  }, [layout, setCurrentLayout]); // Re-run this effect if layout or setCurrentLayout changes

  // Provide the layout state, sticky header state, and sidebar state to children components via context
  return (
    <Demo4LayoutContext.Provider
      value={{
        layout, // The current layout configuration
        headerSticky, // Whether the header should be sticky based on the scroll position
        mobileSidebarOpen, // Whether the mobile sidebar is currently open
        setMobileSidebarOpen // Function to toggle the mobile sidebar state
      }}
    >
      {children} {/* Render child components that consume this context */}
    </Demo4LayoutContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { Demo4LayoutProvider, useDemo4Layout };
