import { type ILayoutConfig } from '@/providers';

const demo1LayoutConfig: ILayoutConfig = {
  name: 'demo1-layout',
  options: {
    sidebar: {
      theme: 'light',
      fixed: true,
      collapse: false
    },
    header: {
      fixed: true
    }
  }
};

export { demo1LayoutConfig };
