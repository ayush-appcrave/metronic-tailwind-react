export interface ILayoutPartial {
  name: string;
  config: unknown;
}

export interface ILayout {
  name: string;
  partials: Map<string, ILayoutPartial>;
}

export interface ILayoutProvider {
  layout: ILayout;
  updatePartial: (part: ILayoutPartial) => void;
  getConfig: (partName: string) => unknown | undefined;
}