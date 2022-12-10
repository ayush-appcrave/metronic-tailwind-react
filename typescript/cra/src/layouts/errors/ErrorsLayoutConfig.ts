import { ILayout, ILayoutPartial, ILayoutProvider } from "../models";

const errorsLayoutPartials: ReadonlyArray<ILayoutPartial> = [
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

const errorsLayoutConfig: ILayout = {
  name: "errors-layout",
  partials: new Map<string, ILayoutPartial>(
    errorsLayoutPartials.map((i) => [i.name, i])
  ),
};

export { errorsLayoutConfig };
