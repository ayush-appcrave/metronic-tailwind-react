import { ILayout, ILayoutPart } from "../_base";

const authLayoutParts: ReadonlyArray<ILayoutPart> = [
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

const authLayoutConfig: ILayout = {
  layoutName: "auth-layout",
  parts: new Map<string, ILayoutPart>(
    authLayoutParts.map((i) => [i.layoutPartName, i])
  ),
};

export { authLayoutConfig };
