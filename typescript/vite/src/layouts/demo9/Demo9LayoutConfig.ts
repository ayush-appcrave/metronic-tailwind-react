import { type ILayoutConfig } from '@/providers';

// Defining the layout configuration specific to Demo2 layout
const Demo9LayoutConfig: ILayoutConfig = {
  name: 'demo9-layout', // Unique name identifier for this layout
  options: {
    header: {
      stickyOffset: 200 // Offset value (in pixels) that determines when the header becomes sticky on scroll
    }
  }
};

export { Demo9LayoutConfig };
