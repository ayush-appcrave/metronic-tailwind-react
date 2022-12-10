import { ILayout, ILayoutPartial } from "../";

export type DefaultSidebarType = {
  enabled: boolean;
  collapse: boolean;
};

const defaultSidebarConfig: DefaultSidebarType = {
  enabled: true,
  collapse: true,
};

export type DefaultHeaderType = {
  enabled: boolean;
};

export type IFooterPart = {
  enabled: boolean,
}

const defaultLayoutPartials: ReadonlyArray<ILayoutPartial> = [
  {
    name: "sidebar",
    config: defaultSidebarConfig,
  },
  {
    name: "footer",
    config: {
      enabled: true,
    },
  },
  {
    name: "header",
    config: {
      enabled: true,
    },
  },
];

const defaultLayoutConfig: ILayout = {
  name: "default-layout",
  partials: new Map<string, ILayoutPartial>(
    defaultLayoutPartials.map((i) => [i.name, i])
  ),
};

export { defaultLayoutConfig };
