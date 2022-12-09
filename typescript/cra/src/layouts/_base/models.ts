export interface ILayoutPartial {
  layoutPartialName: string;
  config: unknown;
}

export interface ILayout {
  layoutName: string;
  partials: Map<string, ILayoutPartial>;
}

export interface ILayoutProvider {
  layout: ILayout;
  updateLayoutPartial: (part: ILayoutPartial) => void;
  getConfig: (partName: string) => unknown | undefined;
}
