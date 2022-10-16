export interface ILayoutPart {
  layoutPartName: string;
  config: unknown;
}

export interface ILayout {
  layoutName: string;
  parts: Map<string, ILayoutPart>;
}

export interface ILayoutProvider {
  layout: ILayout;
  updateLayoutPart: (part: ILayoutPart) => void;
  getConfig: (partName: string) => unknown | undefined;
}
