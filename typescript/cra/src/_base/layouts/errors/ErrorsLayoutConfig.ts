import { ILayout, ILayoutPart } from "@base/layouts/_core";

const errorsLayoutParts: ReadonlyArray<ILayoutPart> = [
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

const errorsLayoutConfig: ILayout = {
  layoutName: "errors-layout",
  parts: new Map<string, ILayoutPart>(
    errorsLayoutParts.map((i) => [i.layoutPartName, i])
  ),
};

export { errorsLayoutConfig };
