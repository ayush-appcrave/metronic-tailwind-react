import { type ILayoutConfig } from '@/providers'; // Importing the ILayoutConfig type from the providers

// Defining the layout configuration specific to Demo2 layout
const Demo2LayoutConfig: ILayoutConfig = {
  name: 'demo2-layout', // Unique name identifier for this layout
  options: {
    header: {
      stickyOffset: 200 // Offset value (in pixels) that determines when the header becomes sticky on scroll
    }
  }
};

// Exporting the Demo2LayoutConfig to be used in other parts of the application
export { Demo2LayoutConfig };
