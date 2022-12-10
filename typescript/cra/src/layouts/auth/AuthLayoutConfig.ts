import { ILayout, ILayoutPartial } from "../models";

const authLayoutPartials: ReadonlyArray<ILayoutPartial> = [
  {
    name: "sidebar",
    config: {
      enabled: false,
    },
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

const authLayoutConfig: ILayout = {
  name: "auth-layout",
  partials: new Map<string, ILayoutPartial>(
    authLayoutPartials.map((i) => [i.name, i])
  ),
};

export { authLayoutConfig };
