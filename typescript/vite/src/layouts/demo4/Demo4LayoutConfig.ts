import { type ILayoutConfig } from '@/providers';

// Defining the layout configuration specific to Demo4 layout
const Demo4LayoutConfig: ILayoutConfig = {
  name: 'Demo4-layout', // Unique name identifier for this layout
  options: {
    header: {
      stickyOffset: 200 // Offset value (in pixels) that determines when the header becomes sticky on scroll
    }
  }
};

export { Demo4LayoutConfig };
