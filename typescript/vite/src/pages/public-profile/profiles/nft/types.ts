export interface INFTAboutItem {
  label: string;
  info: string;
}
export interface INFTAboutItems extends Array<INFTAboutItem> {}

export interface INFTNetworkItem {
  logo: string;
  info: string;
}
export interface INFTNetworkItems extends Array<INFTNetworkItem> {}

export interface INFTTokensCreatedItem {
  image: string;
  title: string;
  id: number;
  info: string;
  date: string;
}
export interface INFTTokensCreatedItems extends Array<INFTTokensCreatedItem> {}

export interface INFTTokensCollectedItem {
  image: string;
  title: string;
  id: number;
  info: string;
  date: string;
}
export interface INFTTokensCollectedItems extends Array<INFTTokensCollectedItem> {}

export interface INFTTokens3dArtItem {
  image: string;
  title: string;
  id: number;
  info: string;
  date: string;
}
export interface INFTTokens3dArtItems extends Array<INFTTokens3dArtItem> {}
