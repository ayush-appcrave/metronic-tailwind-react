import { ILayout, ILayoutPart } from "../_base";

const defaultLayout2Parts: ReadonlyArray<ILayoutPart> = [
  {
    layoutPartName: "sidebar",
    config: {
      enabled: false,
    },
  },
  {
    layoutPartName: "footer",
    config: {
      enabled: true,
    },
  },
  {
    layoutPartName: "header",
    config: {
      enabled: true,
    },
  },
];

const defaultLayout2Config: ILayout = {
  layoutName: "default-layout-2",
  parts: new Map<string, ILayoutPart>(
    defaultLayout2Parts.map((i) => [i.layoutPartName, i])
  ),
};

export { defaultLayout2Config };
