import { type ILayoutConfig } from '@/providers';

// Defining the layout configuration specific to Demo3 layout
const Demo3LayoutConfig: ILayoutConfig = {
  name: 'Demo3-layout', // Unique name identifier for this layout
  options: {
    header: {
      stickyOffset: 200 // Offset value (in pixels) that determines when the header becomes sticky on scroll
    }
  }
};

export { Demo3LayoutConfig };
