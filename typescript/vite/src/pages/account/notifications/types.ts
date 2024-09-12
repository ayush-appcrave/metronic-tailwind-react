export interface IChannelsItem {
  icon: string;
  title: string;
  description: string;
  button?: boolean;
  actions: React.ReactNode;
}
export interface IChannelsItems extends Array<IChannelsItem> {}

export interface IDoNotDistrubProps {
  title?: string;
  icon?: React.ReactNode;
  text?: string;
}
