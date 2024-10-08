import { type ILayoutConfig } from '@/providers';

// Defining the layout configuration specific to Demo6 layout
const Demo6LayoutConfig: ILayoutConfig = {
  name: 'Demo6-layout', // Unique name identifier for this layout
  options: {
    header: {
      stickyOffset: 200 // Offset value (in pixels) that determines when the header becomes sticky on scroll
    }
  }
};

export { Demo6LayoutConfig };
