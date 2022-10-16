import { ILayout, ILayoutPart } from "@base/layouts/_core";

export type DefaultSidebarType = {
  enabled: boolean;
  collapse: boolean;
};

const defaultSidebarConfig: DefaultSidebarType = {
  enabled: true,
  collapse: true,
}

export type DefaultHeaderType = {
  enabled: boolean;
}

const defaultLayoutParts: ReadonlyArray<ILayoutPart> = [
  {
    layoutPartName: "sidebar",
    config: defaultSidebarConfig,
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

const defaultLayoutConfig: ILayout = {
  layoutName: "default-layout",
  parts: new Map<string, ILayoutPart>(
    defaultLayoutParts.map((i) => [i.layoutPartName, i])
  ),
};

export { defaultLayoutConfig };
